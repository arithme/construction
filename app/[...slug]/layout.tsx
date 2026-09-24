import {content} from '@/lib/content-provider';
import {Header,Footer} from '@/components/site-shell';
import {ContactControls} from '@/components/conversion-controls';
import {Schema,origin} from '@/lib/seo';

export async function generateMetadata(){const c=await content.getCompany();return {title:{default:c.companyName+' | '+c.seo.title,template:'%s | '+c.companyName},description:c.seo.description,icons:{icon:c.logo},robots:{index:!c.isSample,follow:!c.isSample}}}

export default async function LegacySiteLayout({children}:{children:React.ReactNode}){
 const company=await content.getCompany();
 return <div style={{'--accent':company.primaryColor,'--ink':company.secondaryColor} as React.CSSProperties}><Header brand={company}/>{children}<Footer brand={company}/><ContactControls brand={company}/>{!company.isSample&&<Schema value={{'@type':'GeneralContractor',name:company.companyName,url:origin,telephone:company.phone,address:{'@type':'PostalAddress',streetAddress:company.address.street,addressLocality:company.address.city,addressRegion:company.address.state,postalCode:company.address.postalCode,addressCountry:company.address.country},areaServed:company.serviceAreas}}/>}</div>
}
