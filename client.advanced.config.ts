export default {
  demoMode: true,
  salesDemoMode: true,
  designPreset: 'corporate' as 'corporate'|'luxury'|'industrial'|'contractor'|'realestate'|'minimal',
  tagline: 'Building Better Spaces. Building Better Futures.',
  whatsapp: '', email: '',
  address: {street: '', city: 'Bokaro', state: 'Jharkhand', country: 'IN', postalCode: ''},
  businessHours: [{days: 'Monday – Saturday', opens: '09:00', closes: '18:00'}],
  serviceAreas: ['Bokaro', 'Chas', 'Bokaro Steel City'],
  socialLinks: {} as Record<string,string>,
  constructionRates: {basic: null, standard: null, premium: null},
  analytics: {gaId: '', gtmId: '', metaPixelId: '', clarityId: ''},
} as const;
