'use client';

import { useEffect, useState } from 'react';
import { AdminNav } from './admin-nav';

type Lead = { id: string; client: string; date: string; name: string; phone: string; email?: string; type: string; source: string; status: string };
const statuses = ['NEW', 'CONTACTED', 'QUALIFIED', 'WON', 'LOST', 'SPAM'];

export function AdminLeads() {
  const [items, setItems] = useState<Lead[]>([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/admin/leads')
      .then(async (response) => {
        if (response.status === 401) {
          location.replace('/admin/login');
          return null;
        }
        if (!response.ok) throw new Error('Unable to load leads.');
        return response.json() as Promise<{ leads: Lead[] }>;
      })
      .then((data) => {
        if (data) setItems(data.leads || []);
      })
      .catch((cause) => setError(cause instanceof Error ? cause.message : 'Unable to load leads.'));
  }, []);

  async function updateStatus(id: string, value: string) {
    const response = await fetch('/api/admin/leads/' + id, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: value }) });
    if (response.status === 401) {
      location.replace('/admin/login');
      return;
    }
    if (!response.ok) {
      setError('Unable to update lead status.');
      return;
    }
    setItems((current) => current.map((lead) => lead.id === id ? { ...lead, status: value } : lead));
  }

  return <div className="admin-app"><AdminNav/><main className="admin-main"><p className="eyebrow">CONVERSIONS</p><h1>Leads</h1>{error&&<p className="error-message" role="alert">{error}</p>}<input className="search-input" placeholder="Search name, phone or email" value={query} onChange={event=>setQuery(event.target.value)}/><div className="admin-table leads-table"><div><strong>Date</strong><span>Client</span><span>Name</span><span>Phone</span><span>Type</span><span>Status</span></div>{items.filter(lead=>(lead.name+lead.phone+(lead.email||'')).toLowerCase().includes(query.toLowerCase())).map(lead=><div key={lead.id}><span>{new Date(lead.date).toLocaleDateString()}</span><span>{lead.client}</span><strong>{lead.name}</strong><a href={'tel:'+lead.phone}>{lead.phone}</a><span>{lead.type}</span><select value={lead.status} onChange={event=>void updateStatus(lead.id,event.target.value)}>{statuses.map(status=><option key={status}>{status}</option>)}</select></div>)}</div></main></div>;
}
