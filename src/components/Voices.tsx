import React from 'react';

const voices = [
  { emoji: '👩', avBg: '#FFD7A8', name: 'מיכל ל.', handle: '@michal_l', meta: "כיתה ה׳ · רעננה", when: '3 ימים', text: "סוף סוף אני ישנה בשקט. מגןצ'אט תפס תוך שניות הודעה פוגענית בקבוצה של הבת שלי — עוד לפני שהיא הספיקה לראות אותה." },
  { emoji: '🧔', avBg: '#A8D8FF', name: 'רונן ב.', handle: '@ronen_b', meta: "כיתה ו׳ · חיפה", when: 'שבוע', text: "לא התקנו כלום על הטלפון של הילד. תוך שתי דקות מגןצ'אט היה בקבוצה והתחיל לעבוד. גאוני בפשטות שלו." },
  { emoji: '👩‍🏫', avBg: '#C9F0DC', name: 'שירה כ.', handle: '@shira_teacher', meta: "מחנכת כיתה ד׳ · מודיעין", when: '5 ימים', text: "כמחנכת כיתה — הקבוצה הפכה למקום הרבה יותר נעים מאז שהוספנו את מגןצ'אט. ממליצה לכל בית ספר." },
  { emoji: '👨', avBg: '#E6C9FF', name: 'אבי מ.', handle: '@avi_m', meta: "כיתה ה׳ · פתח תקווה", when: 'שבועיים', text: 'הילד שלי בכלל לא יודע שזה שם, וזה כל העניין. אין תחושת ריגול — רק שקט נפשי.' },
  { emoji: '👱‍♀️', avBg: '#FFC9D6', name: 'נטלי ר.', handle: '@natali_r', meta: "כיתה ו׳ · כפר סבא", when: '4 ימים', text: 'תפס קללה שמישהו כתב ומחק אחרי שנייה. בדיוק הדברים שלעולם לא הייתי רואה בעצמי.' },
  { emoji: '👩', avBg: '#FFE3A8', name: 'דנה פ.', handle: '@dana_p', meta: "כיתה ד׳ · באר שבע", when: 'אתמול', text: 'הדבר הראשון שאני ממליצה עליו לכל הורה חדש בכיתה של הילדים שלי.' },
];

export default function Voices() {
  return (
    <section id="voices" style={{ padding: '96px 6vw', background: '#FBF7F0' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 46 }}>
          <h2 style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 44, letterSpacing: '-1px', margin: 0, color: '#16261F' }}>הורים כבר ישנים בשקט</h2>
          <p style={{ fontSize: 19, color: '#5C6B64', margin: '14px auto 0', maxWidth: 520 }}>מה שמשפחות מספרות אחרי שמגןצ'אט נכנס לקבוצות של הילדים.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, alignItems: 'stretch' }} className="voices-grid">
          {voices.map(v => (
            <div key={v.handle} style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid #ECE3D6', borderRadius: 18, padding: '20px 22px', boxShadow: '0 10px 30px -22px rgba(16,38,31,.5)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 12 }}>
                <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: v.avBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{v.emoji}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <span style={{ fontWeight: 700, fontSize: 15, color: '#16261F' }}>{v.name}</span>
                    <span style={{ flexShrink: 0, width: 15, height: 15, borderRadius: '50%', background: '#1D9BF0', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }}>✓</span>
                  </div>
                  <div style={{ color: '#8A938C', fontSize: 13 }}>{v.handle}</div>
                  <div style={{ color: '#0A5E47', fontSize: 11.5, fontWeight: 600, marginTop: 2 }}>{v.meta}</div>
                </div>
              </div>
              <p style={{ fontSize: 15.5, color: '#2A352F', lineHeight: 1.55, margin: 0 }}>{v.text}</p>
              <div style={{ marginTop: 'auto', paddingTop: 14, color: '#9AA59F', fontSize: 13 }}>{v.when}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.voices-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:580px){.voices-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
