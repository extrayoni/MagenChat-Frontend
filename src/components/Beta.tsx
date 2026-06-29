import React from 'react';

interface Props {
  spotsLeft?: number;
  spotsTotal?: number;
}

const PERKS = [
  'כל היכולות פתוחות במלואן',
  'סינון בזמן אמת ב-3 שפות',
  'תמיכה אישית מהצוות',
  'השפעה ישירה על המשך פיתוח המוצר',
];

export default function Beta({ spotsLeft = 38, spotsTotal = 100 }: Props) {
  const pct = Math.round((1 - spotsLeft / spotsTotal) * 100) + '%';

  return (
    <section id="beta" style={{ padding: '96px 6vw', background: '#fff' }}>
      <div style={{ maxWidth: 740, margin: '0 auto', textAlign: 'center' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 9,
          background: '#E8F6EF', color: '#0A5E47', fontWeight: 700, fontSize: 14,
          padding: '8px 16px', borderRadius: 999,
        }}>
          <span style={{ width: 8, height: 8, background: '#2BC48A', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(43,196,138,.25)', display: 'inline-block' }} />
          תוכנית בטא פתוחה
        </span>
        <h2 style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 44, letterSpacing: '-1px', margin: '18px 0 8px', color: '#16261F' }}>
          הצטרפו עכשיו —{' '}
          <span style={{ color: '#0E7D5E' }}>בחינם לגמרי</span>
        </h2>
        <p style={{ fontSize: 19, color: '#5C6B64', lineHeight: 1.6, margin: '0 auto', maxWidth: 560 }}>
          לזמן מוגבל אנחנו פותחים את מגןצ'אט להורים הראשונים. כל היכולות פתוחות — בלי כרטיס אשראי ובלי התחייבות.
        </p>

        <div style={{ margin: '36px auto 0', background: '#F2FAF6', border: '1.5px solid #D5EBE0', borderRadius: 26, padding: '34px 32px', textAlign: 'right' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 26px', marginBottom: 26 }} className="beta-perks">
            {PERKS.map(perk => (
              <div key={perk} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#16261F', fontWeight: 600, fontSize: 16 }}>
                <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', background: '#0E7D5E', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>✓</span>
                {perk}
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <span style={{ color: '#0A5E47', fontWeight: 700, fontSize: 14 }}>המקומות מתמלאים מהר</span>
              <span style={{ color: '#5C6B64', fontSize: 14 }}>נותרו <strong style={{ color: '#16261F' }}>{spotsLeft}</strong> מתוך {spotsTotal}</span>
            </div>
            <div style={{ height: 10, background: '#E1EFE8', borderRadius: 999, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: pct, background: 'linear-gradient(90deg,#2BC48A,#0E7D5E)', borderRadius: 999 }} />
            </div>
          </div>

          <a href="#how" onClick={e => { e.preventDefault(); document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#0E7D5E', color: '#fff', fontWeight: 800, fontSize: 19, padding: 16, borderRadius: 999, textDecoration: 'none', boxShadow: '0 16px 30px -12px rgba(14,125,94,.6)' }}>
            הצטרפו לבטא — בחינם
          </a>
          <div style={{ color: '#7A8A82', fontSize: 13, marginTop: 12, textAlign: 'center' }}>בלי כרטיס אשראי · ביטול בכל רגע</div>
        </div>
      </div>
      <style>{`@media(max-width:600px){.beta-perks{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
