import React from 'react';

interface Props { trialDays: number; }

export default function Pricing({ trialDays }: Props) {
  const trialLabel = `התחילו ${trialDays} ימי ניסיון חינם`;

  const plans = [
    {
      name: 'קבוצה אחת', price: '₪19', period: '/ חודש', sub: 'הגנה על קבוצה אחת', popular: false,
      feats: ['קבוצת וואטסאפ אחת', 'סינון בזמן אמת', 'עדכונים להורה', "תמיכה בצ'אט"],
      cta: 'התחלת ניסיון',
      cardStyle: { position: 'relative' as const, background: '#fff', borderRadius: 24, padding: '34px 28px', border: '1.5px solid #EAF1ED', display: 'flex', flexDirection: 'column' as const },
      btnStyle: { marginTop: 'auto', textAlign: 'center' as const, background: '#F2FAF6', color: '#0E7D5E', fontWeight: 700, padding: 13, borderRadius: 999, textDecoration: 'none', display: 'block' },
      titleColor: '#16261F', muted: '#5C6B64', featColor: '#46564E', check: '#0E7D5E',
    },
    {
      name: 'משפחה', price: '₪39', period: '/ חודש', sub: 'עד 4 קבוצות, כל הילדים', popular: true,
      feats: ['עד 4 קבוצות וואטסאפ', 'סינון מתקדם + סלנג', 'דוחות שבועיים להורה', 'רמות סינון לפי גיל', 'תמיכה מועדפת'],
      cta: trialLabel,
      cardStyle: { position: 'relative' as const, background: 'linear-gradient(135deg,#0E7D5E,#0A5E47)', borderRadius: 24, padding: '38px 28px', display: 'flex', flexDirection: 'column' as const, boxShadow: '0 24px 50px -20px rgba(14,125,94,.6)', transform: 'scale(1.04)' },
      btnStyle: { marginTop: 'auto', textAlign: 'center' as const, background: '#fff', color: '#0E7D5E', fontWeight: 800, padding: 14, borderRadius: 999, textDecoration: 'none', display: 'block' },
      titleColor: '#fff', muted: '#BFEAD7', featColor: '#E8F6EF', check: '#7FF0C4',
    },
    {
      name: 'בית ספר', price: 'בהתאמה', period: '', sub: 'לכיתות ולמועצות הורים', popular: false,
      feats: ['מספר כיתות בלתי מוגבל', 'לוח בקרה לצוות', 'דוחות מרוכזים', 'הדרכה והטמעה'],
      cta: 'דברו איתנו',
      cardStyle: { position: 'relative' as const, background: '#fff', borderRadius: 24, padding: '34px 28px', border: '1.5px solid #EAF1ED', display: 'flex', flexDirection: 'column' as const },
      btnStyle: { marginTop: 'auto', textAlign: 'center' as const, background: '#F2FAF6', color: '#0E7D5E', fontWeight: 700, padding: 13, borderRadius: 999, textDecoration: 'none', display: 'block' },
      titleColor: '#16261F', muted: '#5C6B64', featColor: '#46564E', check: '#0E7D5E',
    },
  ];

  return (
    <section id="pricing" style={{ padding: '96px 6vw', background: '#fff' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <span style={{ fontFamily: "'Rubik'", color: '#0E7D5E', fontWeight: 700, fontSize: 15, letterSpacing: 1 }}>מחירים</span>
          <h2 style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 44, letterSpacing: '-1px', margin: '14px 0 6px', color: '#16261F' }}>מחיר אחד, שקט נפשי מלא</h2>
          <p style={{ fontSize: 19, color: '#5C6B64' }}>מתחילים ב־{trialDays} ימי ניסיון חינם. בלי כרטיס אשראי.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, alignItems: 'stretch' }} className="pricing-grid">
          {plans.map(p => (
            <div key={p.name} style={p.cardStyle}>
              {p.popular && (
                <div style={{ position: 'absolute', top: -13, right: '50%', transform: 'translateX(50%)', background: '#FF7A59', color: '#fff', fontWeight: 700, fontSize: 13, padding: '5px 16px', borderRadius: 999 }}>
                  הכי פופולרי
                </div>
              )}
              <div style={{ fontFamily: "'Rubik'", fontWeight: 700, fontSize: 20, color: p.titleColor }}>{p.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '14px 0 4px' }}>
                <span style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 46, color: p.titleColor }}>{p.price}</span>
                <span style={{ color: p.muted, fontSize: 16 }}>{p.period}</span>
              </div>
              <div style={{ color: p.muted, fontSize: 15, marginBottom: 20 }}>{p.sub}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 26 }}>
                {p.feats.map(ft => (
                  <div key={ft} style={{ display: 'flex', alignItems: 'center', gap: 9, color: p.featColor, fontSize: 15 }}>
                    <span style={{ color: p.check }}>✓</span> {ft}
                  </div>
                ))}
              </div>
              <a href="#how" onClick={e => { e.preventDefault(); document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' }); }} style={p.btnStyle}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.pricing-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
