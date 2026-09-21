# Client onboarding
1. Duplicate the source repository.
2. Run `npm run new-client -- your-client-slug`; review the generated config template before replacing config/company.ts.
3. Edit config/company.ts: legal/trading name, short mark, logo, verified phone, WhatsApp, email, address, hours, colors, service areas, SEO and feature toggles.
4. Replace demo records and /public/images/ with client-approved media and content. Record consent and image rights.
5. Keep isSample true for every remaining illustrative record. Do not turn off demo labelling to simulate a real business.
6. Set the public origin and server environment variables using .env.example.
7. Integrate a real submission adapter and durable edge rate limiter before accepting real leads.
8. Review legal copy, credentials, location content, Hindi translations and cookie consent with the client.
9. Run content audit, accessibility, Lighthouse and rebranding checks. Test every lead journey.
10. Deploy to the client's selected platform using DEPLOYMENT.md.

