import React from 'react';

type Page = 'home' | 'privacy' | 'terms';

interface Props { onNavigate?: (p: Page) => void; }

export default function PrivacyPolicy({ onNavigate }: Props) {
  const back = () => { onNavigate?.('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const h2 = { fontFamily: "'Rubik',sans-serif", fontWeight: 700, fontSize: 22, color: '#16261F', marginBottom: 12 };
  const p = { color: '#5C6B64', lineHeight: 1.7, fontSize: 16 };

  return (
    <div style={{ minHeight: '100vh', background: '#F2FAF6', padding: '60px 6vw' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <img src="/cropped-LOGO.jpg" alt="" style={{ width: 44, height: 44, borderRadius: 11, objectFit: 'contain' }} />
            <span style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 28, color: '#0E7D5E' }}>מגן<span style={{ color: '#16261F' }}>צ'אט</span></span>
          </div>
          <h1 style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 42, color: '#16261F', margin: 0 }}>מדיניות פרטיות</h1>
          <p style={{ color: '#5C6B64', marginTop: 10 }}>עדכון אחרון: יולי 2026</p>
        </div>

        <div style={{ background: '#fff', borderRadius: 24, padding: '48px 40px', boxShadow: '0 20px 50px -30px rgba(16,38,31,.25)', display: 'flex', flexDirection: 'column', gap: 40 }}>
          {[
            { title: '1. איסוף מידע', body: "מגןצ'אט אוסף מידע מינימלי הדרוש לפעולת השירות: קישור לקבוצת הוואטסאפ, שם, מספר טלפון לקבלת התרעות ומספרים שיש לדלג עליהם. בשלב הבטא אין איסוף פרטי תשלום." },
            { title: '2. עיבוד תוכן', body: "המערכת מנתחת תוכן בקבוצות הוואטסאפ בזמן אמת — הודעות טקסט, הקלטות קוליות, תמונות וקישורים. התוכן מנותח אוטומטית ולא נשמר במערכת. אין גישה אנושית לתוכן הקבוצות." },
            { title: '3. דיווח לאחראי הקבוצה', body: "כאשר תוכן בעייתי מזוהה ונמחק, המערכת מעבירה לאחראי הקבוצה את: סוג התוכן שנמחק, זמן המחיקה, וסיבת המחיקה — ללא פרטי התוכן עצמו." },
            { title: '4. עוגיות ומעקב', body: "האתר אינו משתמש בעוגיות (cookies), אינו מטמיע כלי מעקב, פרסום או אנליטיקה, ואינו שולח מידע לצדדים שלישיים. הגופנים באתר מאוחסנים על שרתי מגןצ'אט בלבד — ללא בקשות לשרתי Google או גורם אחר." },
            { title: '5. אבטחת מידע', body: "אנו נוקטים באמצעי אבטחה מתקדמים: הצפנה מלאה של כל התקשורת, שרתים מאובטחים, גישה מוגבלת לצוות טכני בלבד, ומחיקה אוטומטית של נתונים זמניים." },
            { title: '6. זכויותיכם', body: "יש לכם זכות לבקש מחיקת המידע האישי שלכם, לעדכן פרטי קשר, להפסיק את השירות בכל עת, ולקבל מידע על השימוש בנתונים שלכם." },
          ].map(s => (
            <section key={s.title}>
              <h2 style={h2}>{s.title}</h2>
              <p style={p}>{s.body}</p>
            </section>
          ))}

          <section style={{ background: '#E8F6EF', borderRadius: 16, padding: 24 }}>
            <h3 style={{ fontFamily: "'Rubik'", fontWeight: 700, fontSize: 19, color: '#0A5E47', marginBottom: 10 }}>יצירת קשר</h3>
            <p style={{ color: '#0E7D5E', fontSize: 15, lineHeight: 1.8 }}>
              📧 johnny.fridburg@gmail.com<br />
              📧 roi.fridburg@gmail.com<br />
              📞 052-605-3680<br />
              📞 054-788-4076
            </p>
          </section>
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <button onClick={back}
            style={{ background: '#0E7D5E', color: '#fff', fontWeight: 700, fontSize: 16, padding: '13px 30px', borderRadius: 999, border: 'none', cursor: 'pointer' }}>
            חזרה לעמוד הבית
          </button>
        </div>
      </div>
    </div>
  );
}
