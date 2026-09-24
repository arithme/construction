export function assertTenantAccess(user:{role:string;clientId:string|null},clientId:string){if(user.role==='CLIENT'&&user.clientId!==clientId)throw new Error('Tenant access denied.');return clientId}
export function tenantPath(clientId:string,path:string){if(!clientId)throw new Error('clientId is required.');return {clientId,path}}
