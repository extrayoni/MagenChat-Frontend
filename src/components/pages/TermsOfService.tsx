import React from 'react';

type Page = 'home' | 'privacy' | 'terms';

interface Props { onNavigate?: (p: Page) => void; }

export default function TermsOfService({ onNavigate }: Props) {
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
          <h1 style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 42, color: '#16261F', margin: 0 }}>תנאי שימוש</h1>
          <p style={{ color: '#5C6B64', marginTop: 10 }}>עדכון אחרון: יוני 2025</p>
        </div>

        <div style={{ background: '#fff', borderRadius: 24, padding: '48px 40px', boxShadow: '0 20px 50px -30px rgba(16,38,31,.25)', display: 'flex', flexDirection: 'column', gap: 40 }}>
          {[
            { title: '1. הסכמה לתנאים', body: "השימוש בשירות מגןצ'אט מהווה הסכמה לתנאי שימוש אלו. אם אינכם מסכימים לתנאים, נא הימנעו מהשימוש בשירות." },
            { title: '2. תיאור השירות', body: "מגןצ'אט מספק שירות סינון אוטומטי של תוכן בקבוצות וואטסאפ, כולל זיהוי ומחיקה של שפה פוגענית, תמונות לא ראויות, הקלטות קוליות בעייתיות וקישורים מסוכנים." },
            { title: '3. הגבלות שימוש', body: "אינכם רשאים להשתמש בשירות לכל מטרה בלתי חוקית, להפריע לפעולת השירות, לנסות לגשת למידע של משתמשים אחרים, או להשתמש בשירות לצורך ניטור ללא ידיעת משתמשי הקבוצה." },
            { title: '4. תשלום וביטול', body: "התשלום נגבה מראש לכל תקופת מנוי. ניתן לבטל בכל עת — הביטול ייכנס לתוקף בסוף תקופת החיוב הנוכחית. אין החזרים לתקופות שכבר שולמו." },
            { title: '5. אחריות ומגבלות', body: "מגןצ'אט מספק הגנה מיטבית אך אינו ערב לחסימת 100% מהתוכן הפוגעני. השירות מוצע As-Is ולא נישא באחריות לנזקים עקיפים." },
            { title: '6. שינויים בתנאים', body: "אנו שומרים על הזכות לעדכן תנאים אלו בכל עת. שינויים מהותיים יפורסמו מראש. המשך השימוש בשירות לאחר השינוי מהווה הסכמה לתנאים החדשים." },
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
