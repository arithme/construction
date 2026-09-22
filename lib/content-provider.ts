import {company} from '@/config/company';import quick from '@/client.config';import data from '@/content/demo/data.json';import type {ContentProvider,ProjectFilters,Service,Project,Testimonial,BlogPost,FAQ} from './types';
const slugify=(value:string)=>value.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const services=quick.services.map((title,index)=>{const base=(data.services[index]||data.services[0]) as Service;const slug=slugify(title);return {...base,title,slug,shortDescription:`Planning and coordinated delivery for ${title.toLowerCase()} projects.`,longDescription:`${company.companyName} helps clients define the scope, priorities and next steps for ${title.toLowerCase()}. Project-specific capabilities, specifications and commitments are confirmed in writing before work begins.`,cta:{label:'Discuss this service',href:`/request-a-quote?service=${slug}`},isSample:company.isSample,seo:{...base.seo,title:`${title} in ${company.address.city}`,description:`Explore ${title.toLowerCase()} with ${company.companyName} in ${company.address.city}.`}}});
const projects=quick.projects.map((name,index)=>{const base=(data.projects[index]||data.projects[0]) as Project;const slug=slugify(name);return {...base,name,slug,description:{short:'Project details will be added here.',long:'This project shell is ready for verified scope, location, images and project details. No client, cost, area, date or completed result is claimed.'},isSample:true,seo:{...base.seo,title:name,description:`Explore the ${name} project page from ${company.companyName}.`}}});
export class LocalJsonProvider implements ContentProvider{
 async getCompany(){return company}
 async getServices(){return services}
 async getProjects(filters:ProjectFilters={}){return projects.filter(p=>(!filters.category||filters.category==='all'||p.category===filters.category)&&(!filters.query||(p.name+' '+p.location.city+' '+p.description.short).toLowerCase().includes(filters.query.toLowerCase())))}
 async getTestimonials(){return data.testimonials as Testimonial[]}
 async getTeam(){return []}
 async getBlogPosts(){return data.blog as BlogPost[]}
 async getFAQs(){return data.faqs as FAQ[]}
}
export const content:ContentProvider=new LocalJsonProvider();
