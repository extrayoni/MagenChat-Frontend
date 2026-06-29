import React from 'react';

type Page = 'home' | 'privacy' | 'terms';

interface Props { onNavigate: (p: Page) => void; }

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Footer({ onNavigate }: Props) {
  return (
    <footer style={{ padding: '50px 6vw 40px', background: '#fff', borderTop: '1px solid #EAF1ED' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/cropped-LOGO.jpg" alt="מגןצ'אט" style={{ width: 36, height: 36, objectFit: 'contain', borderRadius: 9 }} />
          <span style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 20, color: '#0E7D5E' }}>
            מגן<span style={{ color: '#16261F' }}>צ'אט</span>
          </span>
        </div>
        <div style={{ display: 'flex', gap: 26, color: '#5C6B64', fontWeight: 600, fontSize: 15, flexWrap: 'wrap' }}>
          {[{ label: 'איך זה עובד', id: 'how' }, { label: 'מחירים', id: 'pricing' }, { label: 'שאלות', id: 'faq' }].map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={e => { e.preventDefault(); scrollTo(l.id); }}
              style={{ textDecoration: 'none', color: '#5C6B64' }}>{l.label}</a>
          ))}
          <button onClick={() => onNavigate('privacy')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#5C6B64', fontWeight: 600, fontSize: 15, fontFamily: "'Assistant',sans-serif" }}>פרטיות</button>
          <button onClick={() => onNavigate('terms')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#5C6B64', fontWeight: 600, fontSize: 15, fontFamily: "'Assistant',sans-serif" }}>תנאי שימוש</button>
        </div>
        <div style={{ color: '#9AAAA2', fontSize: 14 }}>© 2026 מגןצ'אט · כל הזכויות שמורות</div>
      </div>
    </footer>
  );
}
