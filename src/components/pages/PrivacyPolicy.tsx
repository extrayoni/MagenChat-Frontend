import React from 'react';
import { ArrowRight, Shield, Lock, Eye, Database, UserCheck } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface PrivacyPolicyProps {
  onNavigate?: (page: 'home' | 'privacy' | 'terms') => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  const { isHebrew } = useLanguage();

  const handleBackToHome = () => {
    if (onNavigate) {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse mb-4">
            <Shield className="h-10 w-10 text-blue-600" />
            <h1 className={`text-4xl font-bold text-gray-900 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'מדיניות פרטיות' : 'Privacy Policy'}
            </h1>
          </div>
          <p className={`text-lg text-gray-600 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
            {isHebrew 
              ? 'אנו מתחייבים להגן על הפרטיות שלכם ושל ילדיכם'
              : 'We are committed to protecting your privacy and your children\'s privacy'
            }
          </p>
          <div className={`text-sm text-gray-500 mt-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
            {isHebrew ? 'עדכון אחרון: יוני 2025' : 'Last updated: June 2025'}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          
          {/* Section 1 */}
          <section>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="bg-blue-100 rounded-lg p-2">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className={`text-2xl font-bold text-gray-900 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew ? '1. איסוף מידע' : '1. Information Collection'}
              </h2>
            </div>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              <p>
                {isHebrew 
                  ? 'מגןצ\'אט אוסף מידע מינימלי הדרוש לפעולת השירות:'
                  : 'MagenChat collects minimal information required for service operation:'
                }
              </p>
              <ul className="list-disc list-inside space-y-2 mr-6 rtl:mr-0 rtl:ml-6">
                <li>{isHebrew ? 'קישור לקבוצת הוואטסאפ שברצונכם להגן עליה' : 'WhatsApp group link you want to protect'}</li>
                <li>{isHebrew ? 'מספר טלפון לקבלת התרעות' : 'Phone number for receiving notifications'}</li>
                <li>{isHebrew ? 'שם ופרטי תשלום לצורך חיוב' : 'Name and payment details for billing'}</li>
                <li>{isHebrew ? 'כתובת אימייל לקבלות ועדכונים' : 'Email address for receipts and updates'}</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="bg-green-100 rounded-lg p-2">
                <Database className="h-6 w-6 text-green-600" />
              </div>
              <h2 className={`text-2xl font-bold text-gray-900 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew ? '2. עיבוד תוכן' : '2. Content Processing'}
              </h2>
            </div>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              <p>
                {isHebrew 
                  ? 'המערכת מנתחת תוכן בקבוצות הוואטסאפ בזמן אמת:'
                  : 'The system analyzes content in WhatsApp groups in real-time:'
                }
              </p>
              <ul className="list-disc list-inside space-y-2 mr-6 rtl:mr-0 rtl:ml-6">
                <li>{isHebrew ? 'הודעות טקסט - לזיהוי שפה פוגענית' : 'Text messages - to identify offensive language'}</li>
                <li>{isHebrew ? 'הקלטות קוליות - לזיהוי תוכן בעייתי' : 'Voice recordings - to identify problematic content'}</li>
                <li>{isHebrew ? 'תמונות - לזיהוי תוכן ויזואלי לא מתאים' : 'Images - to identify inappropriate visual content'}</li>
                <li>{isHebrew ? 'קישורים - לבדיקת בטיחות ומתאימות' : 'Links - to check safety and appropriateness'}</li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 font-semibold">
                  {isHebrew 
                    ? '⚠️ חשוב: התוכן מנותח באופן אוטומטי ולא נשמר במערכת. אין גישה אנושית לתוכן הקבוצות.'
                    : '⚠️ Important: Content is analyzed automatically and not stored in the system. There is no human access to group content.'
                  }
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="bg-purple-100 rounded-lg p-2">
                <UserCheck className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className={`text-2xl font-bold text-gray-900 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew ? '3. דיווח לאחראי הקבוצה' : '3. Reporting to Group Administrator'}
              </h2>
            </div>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              <p>
                {isHebrew 
                  ? 'כאשר תוכן בעייתי מזוהה ונמחק, המערכת מעבירה דיווח לאחראי הקבוצה:'
                  : 'When problematic content is identified and deleted, the system forwards a report to the group administrator:'
                }
              </p>
              <ul className="list-disc list-inside space-y-2 mr-6 rtl:mr-0 rtl:ml-6">
                <li>{isHebrew ? 'סוג התוכן שנמחק (טקסט/קול/תמונה/קישור)' : 'Type of deleted content (text/voice/image/link)'}</li>
                <li>{isHebrew ? 'זמן המחיקה' : 'Time of deletion'}</li>
                <li>{isHebrew ? 'סיבת המחיקה (ללא פרטי התוכן עצמו)' : 'Reason for deletion (without the content details themselves)'}</li>
                <li>{isHebrew ? 'מספר הטלפון של השולח (אם זמין)' : 'Sender\'s phone number (if available)'}</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="bg-red-100 rounded-lg p-2">
                <Lock className="h-6 w-6 text-red-600" />
              </div>
              <h2 className={`text-2xl font-bold text-gray-900 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew ? '4. אבטחת מידע' : '4. Data Security'}
              </h2>
            </div>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              <p>
                {isHebrew 
                  ? 'אנו נוקטים באמצעי אבטחה מתקדמים:'
                  : 'We employ advanced security measures:'
                }
              </p>
              <ul className="list-disc list-inside space-y-2 mr-6 rtl:mr-0 rtl:ml-6">
                <li>{isHebrew ? 'הצפנה מלאה של כל התקשורת' : 'Full encryption of all communications'}</li>
                <li>{isHebrew ? 'שרתים מאובטחים בישראל' : 'Secure servers in Israel'}</li>
                <li>{isHebrew ? 'גישה מוגבלת לצוות טכני בלבד' : 'Limited access to technical staff only'}</li>
                <li>{isHebrew ? 'מחיקה אוטומטית של נתונים זמניים' : 'Automatic deletion of temporary data'}</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="bg-teal-100 rounded-lg p-2">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className={`text-2xl font-bold text-gray-900 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew ? '5. זכויותיכם' : '5. Your Rights'}
              </h2>
            </div>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              <p>
                {isHebrew 
                  ? 'יש לכם זכות:'
                  : 'You have the right to:'
                }
              </p>
              <ul className="list-disc list-inside space-y-2 mr-6 rtl:mr-0 rtl:ml-6">
                <li>{isHebrew ? 'לבקש מחיקת המידע האישי שלכם' : 'Request deletion of your personal information'}</li>
                <li>{isHebrew ? 'לעדכן את פרטי הקשר' : 'Update your contact details'}</li>
                <li>{isHebrew ? 'להפסיק את השירות בכל עת' : 'Stop the service at any time'}</li>
                <li>{isHebrew ? 'לקבל מידע על השימוש בנתונים שלכם' : 'Receive information about the use of your data'}</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className={`text-xl font-bold text-blue-900 mb-3 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'יצירת קשר' : 'Contact Us'}
            </h3>
            <p className={`text-blue-800 mb-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew 
                ? 'לשאלות או בקשות בנוגע לפרטיות, צרו קשר:'
                : 'For questions or requests regarding privacy, contact us:'
              }
            </p>
            <div className="space-y-2">
              <p className={`text-blue-700 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                📧 johnny.fridburg@gmail.com
              </p>
              <p className={`text-blue-700 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                📧 roi.fridburg@gmail.com
              </p>
              <p className={`text-blue-700 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                📞 052-605-3680
              </p>
              <p className={`text-blue-700 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                📞 054-788-4076
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <button
            onClick={handleBackToHome}
            className={`inline-flex items-center space-x-2 rtl:space-x-reverse bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 ${isHebrew ? 'font-heebo' : 'font-inter'}`}
          >
            <ArrowRight className={`h-5 w-5 ${isHebrew ? 'rotate-180' : ''}`} />
            <span>{isHebrew ? 'חזרה לעמוד הבית' : 'Back to Home'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;