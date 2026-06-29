import React from 'react';

const types = [
  { icon: '💬', title: 'טקסט', desc: 'קללות, עלבונות וסלנג — כולל ראשי תיבות ושיבושים מכוונים.' },
  { icon: '🖼️', title: 'תמונות', desc: 'מזהה תמונות וסטיקרים פוגעניים או לא ראויים ומסיר אותם מיד.' },
  { icon: '🎙️', title: 'הקלטות קוליות', desc: 'מתמלל הודעות קוליות ומזהה שפה פוגענית גם כשהילד מקליט במקום לכתוב.' },
];

export default function ContentCoverage() {
  return (
    <section style={{ padding: '92px 6vw', background: '#fff' }}>
      <div style={{ maxWidth: 1020, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ fontFamily: "'Rubik'", color: '#0E7D5E', fontWeight: 700, fontSize: 15, letterSpacing: 1 }}>כיסוי מלא</span>
        <h2 style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 44, letterSpacing: '-1px', margin: '14px 0 0', color: '#16261F' }}>פגיעה לא חייבת להיכתב</h2>
        <p style={{ fontSize: 19, color: '#5C6B64', lineHeight: 1.6, margin: '18px auto 0', maxWidth: 600 }}>
          ילדים לא רק כותבים. מגןצ'אט מזהה תוכן פוגעני גם בתמונות וגם בהקלטות קוליות — לא רק בטקסט.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 46, textAlign: 'right' }} className="coverage-grid">
          {types.map(t => (
            <div key={t.title} style={{ background: '#F2FAF6', borderRadius: 22, padding: 30 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 27, boxShadow: '0 6px 16px -10px rgba(16,38,31,.4)' }}>{t.icon}</div>
              <h3 style={{ fontFamily: "'Rubik'", fontWeight: 700, fontSize: 21, margin: '18px 0 8px', color: '#16261F' }}>{t.title}</h3>
              <p style={{ color: '#5C6B64', fontSize: 16, lineHeight: 1.55 }}>{t.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginTop: 40, background: '#E8F6EF', padding: '12px 22px', borderRadius: 999 }}>
          <span style={{ fontFamily: "'Rubik'", fontWeight: 700, color: '#0A5E47', fontSize: 15 }}>תומך ב-3 שפות:</span>
          <span style={{ color: '#16261F', fontWeight: 600, fontSize: 15 }}>🇮🇱 עברית</span>
          <span style={{ color: '#9AAAA2' }}>·</span>
          <span style={{ color: '#16261F', fontWeight: 600, fontSize: 15 }}>🇺🇸 אנגלית</span>
          <span style={{ color: '#9AAAA2' }}>·</span>
          <span style={{ color: '#16261F', fontWeight: 600, fontSize: 15 }}>🇷🇺 רוסית</span>
        </div>
      </div>
      <style>{`@media(max-width:768px){.coverage-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
