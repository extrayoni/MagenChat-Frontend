import React, { useState } from 'react';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'יכולות', id: 'features' },
    { label: 'המלצות', id: 'voices' },
    { label: 'שאלות נפוצות', id: 'faq' },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 6vw',
      background: 'rgba(255,255,255,.82)', backdropFilter: 'blur(14px)',
      borderBottom: '1px solid #EAF1ED',
    }}>
      <a href="#top" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <img src="/cropped-LOGO.jpg" alt="מגןצ'אט" style={{ width: 44, height: 44, objectFit: 'contain', borderRadius: 11 }} />
        <span style={{ fontFamily: "'Rubik',sans-serif", fontWeight: 800, fontSize: 23, color: '#0E7D5E', letterSpacing: '-.5px' }}>
          מגן<span style={{ color: '#16261F' }}>צ'אט</span>
        </span>
      </a>

      {/* Desktop nav */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: 30 }} className="hidden-mobile">
        {links.map(l => (
          <a key={l.id} href={`#${l.id}`} onClick={e => { e.preventDefault(); scrollTo(l.id); }}
            style={{ textDecoration: 'none', color: '#16261F', fontWeight: 600, fontSize: 16 }}>
            {l.label}
          </a>
        ))}
        <a href="#beta" onClick={e => { e.preventDefault(); scrollTo('beta'); }}
          style={{
            textDecoration: 'none', background: '#0E7D5E', color: '#fff',
            fontWeight: 700, fontSize: 15, padding: '11px 22px', borderRadius: 999,
            boxShadow: '0 8px 20px -8px rgba(14,125,94,.6)',
          }}>התחילו עכשיו</a>
      </nav>

      {/* Mobile hamburger */}
      <button onClick={() => setOpen(o => !o)} className="show-mobile"
        style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: '#16261F' }}>
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <div style={{
          position: 'fixed', top: 77, right: 0, left: 0, background: '#fff',
          borderBottom: '1px solid #EAF1ED', padding: '20px 6vw',
          display: 'flex', flexDirection: 'column', gap: 16, zIndex: 49,
        }}>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={e => { e.preventDefault(); scrollTo(l.id); setOpen(false); }}
              style={{ textDecoration: 'none', color: '#16261F', fontWeight: 600, fontSize: 18 }}>
              {l.label}
            </a>
          ))}
          <a href="#beta" onClick={e => { e.preventDefault(); scrollTo('beta'); setOpen(false); }}
            style={{
              textDecoration: 'none', background: '#0E7D5E', color: '#fff',
              fontWeight: 700, fontSize: 16, padding: '12px 22px', borderRadius: 999,
              textAlign: 'center',
          }}>התחילו עכשיו</a>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
