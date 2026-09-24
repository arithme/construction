import test from 'node:test';
import assert from 'node:assert/strict';
import { company } from '../config/company.ts';
import { contactLinks } from '../lib/contact-links.ts';

test('demo mode cannot expose invented direct contact links', () => {
  assert.equal(company.isSample, true);
  assert.deepEqual(contactLinks({phone:'',whatsapp:''}), { phone: '/contact', whatsapp: '/contact' });
});

test('verified contact configuration resolves to phone and WhatsApp links', () => {
  const links = contactLinks({ phone: '+91 98765 43210', whatsapp: '+91 98765 43210' });
  assert.equal(links.phone, 'tel:+919876543210');
  assert.match(links.whatsapp, /^https:\/\/wa\.me\/919876543210\?text=/);
});
