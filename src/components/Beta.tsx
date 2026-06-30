import React, { useState } from 'react';

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

const INPUT_BASE = 'width:100%; box-sizing:border-box; background:#fff; border-radius:13px; padding:13px 15px; font-size:15.5px; color:#16261F; font-family:inherit; outline:none;';

export default function Beta({ spotsLeft = 38, spotsTotal = 100 }: Props) {
  const pct = Math.round((1 - spotsLeft / spotsTotal) * 100) + '%';
  const [role, setRole] = useState<'parent' | 'teacher'>('parent');
  const [name, setName] = useState('');
  const [group, setGroup] = useState('');
  const [report, setReport] = useState('');
  const [bypass, setBypass] = useState('');
  const [groupErr, setGroupErr] = useState(false);
  const [groupFocus, setGroupFocus] = useState(false);

  const roleStyle = (active: boolean) => ({
    flex: 1, padding: '12px', borderRadius: 13, fontSize: 15, fontWeight: 700,
    cursor: 'pointer', fontFamily: 'inherit', transition: 'all .15s',
    border: `1.5px solid ${active ? '#0E7D5E' : '#D5EBE0'}`,
    background: active ? '#0E7D5E' : '#fff',
    color: active ? '#fff' : '#46564E',
  } as React.CSSProperties);

  const inputStyle = (err?: boolean, focus?: boolean) => ({
    width: '100%', boxSizing: 'border-box' as const, background: '#fff',
    border: `1.5px solid ${err ? '#E2433A' : focus ? '#0E7D5E' : '#D5EBE0'}`,
    borderRadius: 13, padding: '13px 15px', fontSize: 15.5, color: '#16261F',
    fontFamily: 'inherit', outline: 'none',
  });

  const handleSubmit = () => {
    if (!group.trim()) { setGroupErr(true); return; }
    const roleLabel = role === 'teacher' ? 'מורה / מחנך.ת' : 'הורה';
    let msg = "שלום דניאל, אני רוצה להצטרף לפיילוט של מגןצ'אט.\n\n";
    msg += 'שם: ' + (name.trim() || 'לא צוין') + '\n';
    msg += 'תפקיד: ' + roleLabel + '\n';
    msg += 'קישור לקבוצה: ' + group.trim() + '\n';
    if (report.trim()) msg += 'מספר לדיווחים: ' + report.trim() + '\n';
    if (bypass.trim()) msg += 'מספרים שלא לנטר: ' + bypass.trim() + '\n';
    window.open('https://wa.me/972526665958?text=' + encodeURIComponent(msg), '_blank');
  };

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
          הצטרפו עכשיו,{' '}
          <span style={{ color: '#0E7D5E' }}>בחינם לגמרי</span>
        </h2>
        <p style={{ fontSize: 19, color: '#5C6B64', lineHeight: 1.6, margin: '0 auto', maxWidth: 560 }}>
          לזמן מוגבל אנחנו פותחים את מגןצ'אט להורים הראשונים. כל היכולות פתוחות, בלי כרטיס אשראי ובלי התחייבות.
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

          <div style={{ height: 1, background: '#DCEAE3', margin: '4px 0 24px' }} />

          {/* Signup form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {/* Role */}
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#16261F', marginBottom: 9 }}>אני ממלא.ת כ:</div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button onClick={() => setRole('parent')} style={roleStyle(role === 'parent')}>הורה</button>
                <button onClick={() => setRole('teacher')} style={roleStyle(role === 'teacher')}>מורה / מחנך.ת</button>
              </div>
            </div>

            {/* Name */}
            <label style={{ display: 'block' }}>
              <span style={{ display: 'block', fontWeight: 700, fontSize: 15, color: '#16261F', marginBottom: 7 }}>שם מלא</span>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="איך קוראים לך?"
                style={inputStyle()}
              />
            </label>

            {/* Group link */}
            <label style={{ display: 'block' }}>
              <span style={{ display: 'block', fontWeight: 700, fontSize: 15, color: '#16261F', marginBottom: 7 }}>
                קישור לקבוצת הוואטסאפ <span style={{ color: '#E2433A' }}>*</span>
              </span>
              <input
                value={group}
                onChange={e => { setGroup(e.target.value); if (e.target.value.trim()) setGroupErr(false); }}
                onFocus={() => setGroupFocus(true)}
                onBlur={() => setGroupFocus(false)}
                dir="ltr"
                placeholder="https://chat.whatsapp.com/..."
                style={inputStyle(groupErr, groupFocus)}
              />
              {groupErr && <span style={{ display: 'block', color: '#E2433A', fontSize: 13, fontWeight: 600, marginTop: 6 }}>צריך להדביק קישור לקבוצה כדי להמשיך</span>}
            </label>

            {/* Report number */}
            <label style={{ display: 'block' }}>
              <span style={{ display: 'block', fontWeight: 700, fontSize: 15, color: '#16261F', marginBottom: 3 }}>
                מספר לקבלת דיווחים <span style={{ color: '#7A8A82', fontWeight: 500 }}>(אופציונלי)</span>
              </span>
              <span style={{ display: 'block', color: '#7A8A82', fontSize: 13, marginBottom: 7 }}>לאיזה מספר לשלוח התראות על מה שנחסם. אם ריק, נשלח אליכם.</span>
              <input
                value={report}
                onChange={e => setReport(e.target.value)}
                dir="ltr"
                placeholder="05X-XXXXXXX"
                style={inputStyle()}
              />
            </label>

            {/* Bypass numbers */}
            <label style={{ display: 'block' }}>
              <span style={{ display: 'block', fontWeight: 700, fontSize: 15, color: '#16261F', marginBottom: 3 }}>
                מספרים שלא לנטר <span style={{ color: '#7A8A82', fontWeight: 500 }}>(אופציונלי)</span>
              </span>
              <span style={{ display: 'block', color: '#7A8A82', fontSize: 13, marginBottom: 7 }}>למשל מורים או מנהלי הקבוצה. ההודעות שלהם לא ייסרקו.</span>
              <textarea
                value={bypass}
                onChange={e => setBypass(e.target.value)}
                dir="ltr"
                rows={2}
                placeholder="05X-XXXXXXX, 05X-XXXXXXX"
                style={{ ...inputStyle(), resize: 'vertical' }}
              />
            </label>
          </div>

          <button
            onClick={handleSubmit}
            style={{
              width: '100%', marginTop: 22, display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: 10, background: '#0E7D5E', color: '#fff',
              fontWeight: 800, fontSize: 19, padding: 16, border: 'none', borderRadius: 999,
              cursor: 'pointer', boxShadow: '0 16px 30px -12px rgba(14,125,94,.6)',
              fontFamily: 'inherit',
            }}
          >
            <span style={{ fontSize: 21 }}>🟢</span> שליחה בוואטסאפ, בחינם
          </button>
          <div style={{ color: '#7A8A82', fontSize: 13, marginTop: 12, textAlign: 'center' }}>נפתח וואטסאפ עם הפרטים מוכנים לשליחה · בלי כרטיס אשראי</div>
        </div>
      </div>
      <style>{`@media(max-width:600px){.beta-perks{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
