import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

export function getDb(){
 const url=process.env.DATABASE_URL;
 if(!url)throw new Error('DATABASE_URL is required for database features.');
 // Vinext uses a Cloudflare-style request runtime. A socket created by one
 // request cannot be reused by another, so keep each client request-scoped.
 const client=postgres(url,{prepare:false,max:1,idle_timeout:1,max_lifetime:60});
 return drizzle(client,{schema});
}
