import React from 'react';

const items = [
  { icon: '⚡', title: 'סינון בזמן אמת', sub: 'לפני שהילד בכלל רואה' },
  { icon: '📵', title: 'בלי אפליקציה', sub: 'כלום על הטלפון של הילד' },
  { icon: '🔒', title: 'פרטיות מלאה', sub: 'לא קוראים שיחות פרטיות' },
  { icon: '🌐', title: '3 שפות', sub: 'עברית · אנגלית · רוסית' },
];

export default function ValueStrip() {
  return (
    <section style={{ background: '#0E7D5E', padding: '26px 6vw' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
        {items.map(item => (
          <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#fff' }}>
            <span style={{ fontSize: 26 }}>{item.icon}</span>
            <div>
              <div style={{ fontWeight: 700, fontFamily: "'Rubik'" }}>{item.title}</div>
              <div style={{ fontSize: 13, color: '#BFEAD7' }}>{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
