import type {CompanyConfig} from '../lib/types.ts';import quick from '../client.config.ts';import advanced from '../client.advanced.config.ts';import {features} from './features.ts';
export const company:CompanyConfig = {
 companyName:quick.companyName,shortName:quick.companyName.split(/\s+/)[0].toUpperCase(),descriptor:quick.companyName.split(/\s+/).slice(1).join(' ').toUpperCase(),tagline:advanced.tagline,
 phone:quick.phone,whatsapp:advanced.whatsapp,email:advanced.email,address:advanced.address,
 primaryColor:quick.colors.primary,secondaryColor:quick.colors.secondary,logo:quick.logo,isSample:advanced.demoMode,locale:'en',
 hero:{title:'Building spaces.\nShaping tomorrow.',subtitle:'Thoughtfully planned homes, workplaces and civil construction. From the first conversation to the final handover.',image:'/images/courtyard.webp'},
 serviceAreas:[...advanced.serviceAreas],googleMapsUrl:'https://www.google.com/maps?q=Bokaro%2C+Jharkhand',googleBusinessUrl:'',
 mapsEmbedUrl:'https://www.google.com/maps?q=Bokaro%2C+Jharkhand&output=embed',
 businessHours:[...advanced.businessHours],stats:[],credentials:[],socialLinks:advanced.socialLinks,
 seo:{title:'Construction with clarity',description:`Explore construction services from ${quick.companyName} in Bokaro, Jharkhand.`},
 features:{calculators:features.costCalculator,careers:features.careers,blog:features.blog,siteVisit:features.siteVisit,popups:features.popupLeadForm,darkMode:false},theme:advanced.designPreset
};
