const encoder=new TextEncoder();
const cookieName='construction-admin';
function bytes(value:string){return encoder.encode(value)}
function hex(buffer:ArrayBuffer){return [...new Uint8Array(buffer)].map(v=>v.toString(16).padStart(2,'0')).join('')}
async function signature(payload:string){const secret=process.env.ADMIN_SESSION_SECRET;if(!secret)return '';const key=await crypto.subtle.importKey('raw',bytes(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);return hex(await crypto.subtle.sign('HMAC',key,bytes(payload)))}
function equal(a:string,b:string){if(a.length!==b.length)return false;let result=0;for(let i=0;i<a.length;i++)result|=a.charCodeAt(i)^b.charCodeAt(i);return result===0}
export function adminConfigured(){return Boolean(process.env.ADMIN_PASSWORD&&process.env.ADMIN_SESSION_SECRET&&process.env.ADMIN_SESSION_SECRET.length>=32)}
export async function passwordMatches(value:string){const expected=process.env.ADMIN_PASSWORD||'';const[a,b]=await Promise.all([crypto.subtle.digest('SHA-256',bytes(value)),crypto.subtle.digest('SHA-256',bytes(expected))]);return expected.length>0&&equal(hex(a),hex(b))}
export async function createAdminCookie(secure:boolean){const payload=String(Date.now()+8*60*60*1000);const token=payload+'.'+await signature(payload);return `${cookieName}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=28800${secure?'; Secure':''}`}
export function clearAdminCookie(secure:boolean){return `${cookieName}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${secure?'; Secure':''}`}
export async function isAdmin(request:Request){const token=request.headers.get('cookie')?.split(';').map(v=>v.trim()).find(v=>v.startsWith(cookieName+'='))?.slice(cookieName.length+1);if(!token)return false;const[payload,sig]=token.split('.');if(!payload||!sig||Number(payload)<Date.now())return false;return equal(sig,await signature(payload))}
