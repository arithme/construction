'use client';

import { useEffect, useState } from 'react';
import { AdminNav } from './admin-nav';

type Client = { id: string; name: string; slug: string; status: string; published: boolean; theme: string };

export function AdminClients() {
  const [items, setItems] = useState<Client[]>([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/admin/clients')
      .then(async (response) => {
        if (response.status === 401) {
          location.replace('/admin/login');
          return null;
        }
        if (!response.ok) throw new Error('Unable to load clients.');
        return response.json() as Promise<{ clients: Client[] }>;
      })
      .then((data) => {
        if (data) setItems(data.clients || []);
      })
      .catch((cause) => setError(cause instanceof Error ? cause.message : 'Unable to load clients.'));
  }, []);

  return <div className="admin-app"><AdminNav/><main className="admin-main"><div className="section-heading"><div><p className="eyebrow">WEBSITES</p><h1>Clients</h1></div><a className="button" href="/admin/clients/new">Create client</a></div>{error&&<p className="error-message" role="alert">{error}</p>}<input className="search-input" placeholder="Search clients" value={query} onChange={event=>setQuery(event.target.value)}/><div className="admin-table"><div><strong>Company</strong><span>Status</span><span>Theme</span><span>Website</span></div>{items.filter(client=>client.name.toLowerCase().includes(query.toLowerCase())).map(client=><div key={client.id}><a href={'/admin/clients/'+client.id}><strong>{client.name}</strong></a><span>{client.status}</span><span>{client.theme}</span><span>{client.published?<a href={'/client/'+client.slug}>View website</a>:<a href={'/admin/clients/'+client.id}>Preview</a>}</span></div>)}</div></main></div>;
}
