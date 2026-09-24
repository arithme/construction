import {randomBytes,scrypt as scryptCallback,timingSafeEqual,createHash} from 'node:crypto';import {promisify} from 'node:util';const scrypt=promisify(scryptCallback);
export async function hashPassword(password:string){const salt=randomBytes(16).toString('hex');const derived=await scrypt(password,salt,64) as Buffer;return `scrypt:${salt}:${derived.toString('hex')}`}
export async function verifyPassword(password:string,stored:string){const[,salt,hash]=stored.split(':');if(!salt||!hash)return false;const derived=await scrypt(password,salt,64) as Buffer;const expected=Buffer.from(hash,'hex');return expected.length===derived.length&&timingSafeEqual(expected,derived)}
export function hashToken(token:string){return createHash('sha256').update(token).digest('hex')}
