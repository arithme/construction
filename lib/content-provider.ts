import {company} from '@/config/company';import data from '@/content/demo/data.json';import type {ContentProvider,ProjectFilters,Service,Project,Testimonial,BlogPost,FAQ} from './types';
export class LocalJsonProvider implements ContentProvider{
 async getCompany(){return company}
 async getServices(){return data.services as Service[]}
 async getProjects(filters:ProjectFilters={}){return (data.projects as Project[]).filter(p=>(!filters.category||filters.category==='all'||p.category===filters.category)&&(!filters.query||(p.name+' '+p.location.city+' '+p.description.short).toLowerCase().includes(filters.query.toLowerCase())))}
 async getTestimonials(){return data.testimonials as Testimonial[]}
 async getTeam(){return []}
 async getBlogPosts(){return data.blog as BlogPost[]}
 async getFAQs(){return data.faqs as FAQ[]}
}
export const content:ContentProvider=new LocalJsonProvider();
