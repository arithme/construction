import type {ConversionEvent} from './types';
declare global{interface Window{dataLayer?:Record<string,unknown>[];onConversion?:(event:ConversionEvent)=>void;}}
export function conversion(event:ConversionEvent){window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'lead_submission',...event});window.onConversion?.(event)}
export function track(event:string,details:Record<string,string>={}){if(typeof window!=='undefined'){window.dataLayer=window.dataLayer||[];window.dataLayer.push({event,...details})}}

