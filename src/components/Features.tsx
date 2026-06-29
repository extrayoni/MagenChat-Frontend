import React from 'react';

const features = [
  { icon: '⚡', title: 'סינון בזמן אמת', desc: 'כל הודעה נסרקת ברגע שנשלחת — הודעה פוגענית נחסמת לפני שהילד רואה אותה.' },
  { icon: '🌐', title: 'מבין 3 שפות', desc: 'עברית, אנגלית ורוסית — כולל סלנג, ראשי תיבות ושיבושי כתיב מכוונים.' },
  { icon: '📵', title: 'בלי שום התקנה', desc: 'אין אפליקציה על הטלפון של הילד ואין מה להגדיר במכשיר שלו.' },
  { icon: '🔔', title: 'עדכון להורה', desc: 'מקבלים סיכום שקט על מה שנחסם — בלי לחשוף שיחות תקינות.' },
  { icon: '🔒', title: 'פרטיות מלאה', desc: "מגןצ'אט לא מעביר לכם הודעות פרטיות. הוא מסנן, לא מרגל." },
  { icon: '⚙️', title: 'מותאם אישית', desc: 'בוחרים את רמת הסינון המתאימה לגיל ולקבוצה — בלחיצה.' },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: '96px 6vw', background: '#F2FAF6' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <span style={{ fontFamily: "'Rubik'", color: '#0E7D5E', fontWeight: 700, fontSize: 15, letterSpacing: 1 }}>היכולות</span>
          <h2 style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 44, letterSpacing: '-1px', margin: '14px 0 0', color: '#16261F' }}>הגנה חכמה, לא מציצנית</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }} className="features-grid">
          {features.map(f => (
            <div key={f.title} style={{ background: '#fff', borderRadius: 22, padding: 30, boxShadow: '0 14px 40px -26px rgba(16,38,31,.4)' }}>
              <div style={{ width: 54, height: 54, borderRadius: 16, background: '#E8F6EF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>{f.icon}</div>
              <h3 style={{ fontFamily: "'Rubik'", fontWeight: 700, fontSize: 21, margin: '18px 0 8px', color: '#16261F' }}>{f.title}</h3>
              <p style={{ color: '#5C6B64', fontSize: 16, lineHeight: 1.55 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.features-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:560px){.features-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
