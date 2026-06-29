import React, { useState } from 'react';

const faqs = [
  { q: 'איך זה עובד בלי להתקין כלום?', a: "מגןצ'אט מצטרף לקבוצת הוואטסאפ כמו עוד משתתף, ומקבל הרשאת מנהל. הוא קורא רק את ההודעות שנשלחות בקבוצה — בלי שום אפליקציה על הטלפון של הילד." },
  { q: 'האם אתם קוראים את כל ההודעות של הילד?', a: "לא. מגןצ'אט מסנן רק הודעות בקבוצות שאליהן הוספתם אותו, ומדווח רק על מה שנחסם. שיחות פרטיות והודעות תקינות לעולם לא מועברות אליכם." },
  { q: 'מה קורה כשמזוהה קללה?', a: 'ההודעה הפוגענית מוסרת מהקבוצה כמעט מיד, לפני שרוב הילדים מספיקים לראות אותה, ובמקומה מופיעה התראה קצרה שהודעה נחסמה.' },
  { q: 'באילו שפות זה עובד?', a: "מגןצ'אט מבין עברית, אנגלית ורוסית — כולל סלנג מדובר, ראשי תיבות, אותיות מוחלפות ושיבושי כתיב מכוונים שנועדו לעקוף סינון פשוט." },
  { q: 'זה מזהה גם תמונות והקלטות קוליות?', a: "כן. מעבר לטקסט, מגןצ'אט מזהה תמונות וסטיקרים פוגעניים, ומתמלל הודעות קוליות כדי לזהות שפה לא ראויה גם כשהילד מקליט במקום לכתוב." },
  { q: 'אפשר לבטל מתי שרוצים?', a: "בהחלט. אין התחייבות — מבטלים בלחיצה ומסירים את מגןצ'אט מהקבוצה בכל רגע." },
];

export default function FAQ() {
  const [open, setOpen] = useState(-1);

  return (
    <section id="faq" style={{ padding: '96px 6vw', background: '#FBF7F0' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 46 }}>
          <span style={{ fontFamily: "'Rubik'", color: '#0E7D5E', fontWeight: 700, fontSize: 15, letterSpacing: 1 }}>שאלות נפוצות</span>
          <h2 style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 42, letterSpacing: '-1px', margin: '14px 0 0', color: '#16261F' }}>כל מה שחשוב לדעת</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button key={i} onClick={() => setOpen(isOpen ? -1 : i)}
                style={{
                  textAlign: 'right', width: '100%', cursor: 'pointer',
                  border: `1.5px solid ${isOpen ? '#2BC48A' : '#EAF1ED'}`,
                  background: '#fff', padding: '22px 24px', borderRadius: 18, transition: 'all .2s',
                }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                  <span style={{ fontFamily: "'Rubik'", fontWeight: 700, fontSize: 18, color: '#16261F', textAlign: 'right' }}>{f.q}</span>
                  <span style={{
                    flexShrink: 0, width: 30, height: 30, borderRadius: '50%',
                    background: isOpen ? '#0E7D5E' : '#F2FAF6', color: isOpen ? '#fff' : '#0E7D5E',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20, fontWeight: 600, transition: 'all .2s',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}>+</span>
                </div>
                {isOpen && (
                  <p style={{ color: '#5C6B64', fontSize: 16, lineHeight: 1.6, marginTop: 14, textAlign: 'right' }}>{f.a}</p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
