import React from 'react';

const voices = [
  { emoji: '👩', avBg: '#FFD7A8', name: 'מיכל ל.', handle: '@michal_l', likes: '212', shares: '34', when: '3 ימים', text: "סוף סוף אני ישנה בשקט. מגןצ'אט תפס תוך שניות הודעה פוגענית בקבוצה של הבת שלי — עוד לפני שהיא הספיקה לראות אותה." },
  { emoji: '🧔', avBg: '#A8D8FF', name: 'רונן ב.', handle: '@ronen_b', likes: '98', shares: '12', when: 'שבוע', text: "לא התקנו כלום על הטלפון של הילד. תוך שתי דקות מגןצ'אט היה בקבוצה והתחיל לעבוד. גאוני בפשטות שלו." },
  { emoji: '👩‍🏫', avBg: '#C9F0DC', name: 'שירה כ.', handle: '@shira_teacher', likes: '341', shares: '67', when: '5 ימים', text: "כמחנכת כיתה — הקבוצה הפכה למקום הרבה יותר נעים מאז שהוספנו את מגןצ'אט. ממליצה לכל בית ספר." },
  { emoji: '👨', avBg: '#E6C9FF', name: 'אבי מ.', handle: '@avi_m', likes: '156', shares: '21', when: 'שבועיים', text: 'הילד שלי בכלל לא יודע שזה שם, וזה כל העניין. אין תחושת ריגול — רק שקט נפשי.' },
  { emoji: '👱‍♀️', avBg: '#FFC9D6', name: 'נטלי ר.', handle: '@natali_r', likes: '187', shares: '29', when: '4 ימים', text: 'תפס קללה שמישהו כתב ומחק אחרי שנייה. בדיוק הדברים שלעולם לא הייתי רואה בעצמי.' },
  { emoji: '👩', avBg: '#FFE3A8', name: 'דנה פ.', handle: '@dana_p', likes: '73', shares: '9', when: 'אתמול', text: 'הדבר הראשון שאני ממליצה עליו לכל הורה חדש בכיתה של הילדים שלי.' },
];

export default function Voices() {
  return (
    <section id="voices" style={{ padding: '96px 6vw', background: '#FBF7F0' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 46 }}>
          <h2 style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 44, letterSpacing: '-1px', margin: 0, color: '#16261F' }}>הורים כבר ישנים בשקט</h2>
          <p style={{ fontSize: 19, color: '#5C6B64', margin: '14px auto 0', maxWidth: 520 }}>מה שמשפחות מספרות אחרי שמגןצ'אט נכנס לקבוצות של הילדים.</p>
        </div>
        <div style={{ columns: 3, columnGap: 20 }} className="voices-columns">
          {voices.map(v => (
            <div key={v.handle} style={{ breakInside: 'avoid', marginBottom: 20, background: '#fff', border: '1px solid #ECE3D6', borderRadius: 18, padding: '20px 22px', boxShadow: '0 10px 30px -22px rgba(16,38,31,.5)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 12 }}>
                <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: v.avBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{v.emoji}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <span style={{ fontWeight: 700, fontSize: 15, color: '#16261F' }}>{v.name}</span>
                    <span style={{ flexShrink: 0, width: 15, height: 15, borderRadius: '50%', background: '#1D9BF0', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }}>✓</span>
                  </div>
                  <div style={{ color: '#8A938C', fontSize: 13 }}>{v.handle}</div>
                </div>
              </div>
              <p style={{ fontSize: 15.5, color: '#2A352F', lineHeight: 1.55, margin: 0 }}>{v.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 14, color: '#9AA59F', fontSize: 13 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>♡ {v.likes}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>↻ {v.shares}</span>
                <span style={{ marginInlineStart: 'auto' }}>{v.when}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.voices-columns{columns:2!important;}}@media(max-width:580px){.voices-columns{columns:1!important;}}`}</style>
    </section>
  );
}
