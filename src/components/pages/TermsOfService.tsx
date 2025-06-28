import React from 'react';
import { ArrowRight, FileText, AlertTriangle, CreditCard, Shield, Users, Gavel } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface TermsOfServiceProps {
  onNavigate?: (page: 'home' | 'privacy' | 'terms') => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
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
            <FileText className="h-10 w-10 text-blue-600" />
            <h1 className={`text-4xl font-bold text-gray-900 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'תנאי שימוש' : 'Terms of Service'}
            </h1>
          </div>
          <p className={`text-lg text-gray-600 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
            {isHebrew 
              ? 'תנאי השימוש בשירות מגןצ\'אט'
              : 'Terms of use for MagenChat service'
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
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className={`text-2xl font-bold text-gray-900 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew ? '1. הגדרת השירות' : '1. Service Definition'}
              </h2>
            </div>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              <p>
                {isHebrew 
                  ? 'מגןצ\'אט הוא שירות אוטומטי לסינון תוכן בקבוצות וואטסאפ, המיועד להגן על ילדים מתוכן לא מתאים.'
                  : 'MagenChat is an automated content filtering service for WhatsApp groups, designed to protect children from inappropriate content.'
                }
              </p>
              <p>
                {isHebrew 
                  ? 'השירות כולל:'
                  : 'The service includes:'
                }
              </p>
              <ul className="list-disc list-inside space-y-2 mr-6 rtl:mr-0 rtl:ml-6">
                <li>{isHebrew ? 'זיהוי אוטומטי של תוכן בעייתי בטקסט, קול, תמונות וקישורים' : 'Automatic detection of problematic content in text, voice, images and links'}</li>
                <li>{isHebrew ? 'מחיקה מיידית של תוכן לא מתאים' : 'Immediate deletion of inappropriate content'}</li>
                <li>{isHebrew ? 'דיווח לאחראי הקבוצה על פעילות חשודה' : 'Reporting to group administrator about suspicious activity'}</li>
                <li>{isHebrew ? 'תגובה חינוכית לעידוד התנהגות נאותה' : 'Educational response to encourage appropriate behavior'}</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="bg-green-100 rounded-lg p-2">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h2 className={`text-2xl font-bold text-gray-900 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew ? '2. זכויות וחובות המשתמש' : '2. User Rights and Obligations'}
              </h2>
            </div>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              <h3 className="font-semibold text-lg">
                {isHebrew ? 'זכויות המשתמש:' : 'User Rights:'}
              </h3>
              <ul className="list-disc list-inside space-y-2 mr-6 rtl:mr-0 rtl:ml-6">
                <li>{isHebrew ? 'לקבל שירות איכותי ורציף' : 'To receive quality and continuous service'}</li>
                <li>{isHebrew ? 'לעדכן הגדרות השירות' : 'To update service settings'}</li>
                <li>{isHebrew ? 'לקבל תמיכה טכנית' : 'To receive technical support'}</li>
                <li>{isHebrew ? 'להפסיק את השירות בכל עת' : 'To stop the service at any time'}</li>
              </ul>
              
              <h3 className="font-semibold text-lg mt-6">
                {isHebrew ? 'חובות המשתמש:' : 'User Obligations:'}
              </h3>
              <ul className="list-disc list-inside space-y-2 mr-6 rtl:mr-0 rtl:ml-6">
                <li>{isHebrew ? 'לשלם עבור השירות בזמן' : 'To pay for the service on time'}</li>
                <li>{isHebrew ? 'לספק מידע נכון ומעודכן' : 'To provide accurate and updated information'}</li>
                <li>{isHebrew ? 'לא להשתמש בשירות למטרות בלתי חוקיות' : 'Not to use the service for illegal purposes'}</li>
                <li>{isHebrew ? 'לכבד את פרטיות חברי הקבוצה' : 'To respect the privacy of group members'}</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="bg-purple-100 rounded-lg p-2">
                <CreditCard className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className={`text-2xl font-bold text-gray-900 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew ? '3. תשלומים ותמחור' : '3. Payments and Pricing'}
              </h2>
            </div>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              <ul className="list-disc list-inside space-y-2 mr-6 rtl:mr-0 rtl:ml-6">
                <li>{isHebrew ? 'עלות השירות: 100 ש"ח לחודש לקבוצה אחת' : 'Service cost: 100 NIS per month for one group'}</li>
                <li>{isHebrew ? 'קבוצות נוספות: 90 ש"ח לחודש לכל קבוצה' : 'Additional groups: 90 NIS per month per group'}</li>
                <li>{isHebrew ? 'חודש ראשון חינם לכל לקוח חדש' : 'First month free for every new customer'}</li>
                <li>{isHebrew ? 'התשלום מתבצע מראש לחודש הבא' : 'Payment is made in advance for the next month'}</li>
                <li>{isHebrew ? 'ללא התחייבות לתקופה מינימלית' : 'No commitment to minimum period'}</li>
                <li>{isHebrew ? 'ביטול השירות יכול להתבצע בכל עת' : 'Service cancellation can be done at any time'}</li>
              </ul>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 font-semibold">
                  {isHebrew 
                    ? '💳 התשלומים מתבצעים באמצעות כרטיס אשראי או העברה בנקאית'
                    : '💳 Payments are made via credit card or bank transfer'
                  }
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="bg-red-100 rounded-lg p-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h2 className={`text-2xl font-bold text-gray-900 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew ? '4. הגבלות ואחריות' : '4. Limitations and Liability'}
              </h2>
            </div>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              <h3 className="font-semibold text-lg">
                {isHebrew ? 'הגבלות השירות:' : 'Service Limitations:'}
              </h3>
              <ul className="list-disc list-inside space-y-2 mr-6 rtl:mr-0 rtl:ml-6">
                <li>{isHebrew ? 'השירות אינו מבטיח זיהוי של 100% מהתוכן הבעייתי' : 'The service does not guarantee 100% detection of problematic content'}</li>
                <li>{isHebrew ? 'יתכנו תקלות טכניות זמניות' : 'Temporary technical malfunctions may occur'}</li>
                <li>{isHebrew ? 'השירות תלוי בתקינות שרתי וואטסאפ' : 'The service depends on WhatsApp servers functioning'}</li>
                <li>{isHebrew ? 'לא מתאים לקבוצות עם תוכן רגיש או סודי' : 'Not suitable for groups with sensitive or confidential content'}</li>
              </ul>
              
              <h3 className="font-semibold text-lg mt-6">
                {isHebrew ? 'הגבלת אחריות:' : 'Liability Limitation:'}
              </h3>
              <ul className="list-disc list-inside space-y-2 mr-6 rtl:mr-0 rtl:ml-6">
                <li>{isHebrew ? 'החברה אינה אחראית לנזקים עקיפים' : 'The company is not responsible for indirect damages'}</li>
                <li>{isHebrew ? 'האחריות מוגבלת לסכום התשלום החודשי' : 'Liability is limited to the monthly payment amount'}</li>
                <li>{isHebrew ? 'המשתמש אחראי לשימוש נאות בשירות' : 'The user is responsible for proper use of the service'}</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="bg-teal-100 rounded-lg p-2">
                <Gavel className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className={`text-2xl font-bold text-gray-900 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew ? '5. ביטול והפסקת שירות' : '5. Cancellation and Service Termination'}
              </h2>
            </div>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              <h3 className="font-semibold text-lg">
                {isHebrew ? 'ביטול על ידי המשתמש:' : 'Cancellation by User:'}
              </h3>
              <ul className="list-disc list-inside space-y-2 mr-6 rtl:mr-0 rtl:ml-6">
                <li>{isHebrew ? 'ניתן לבטל בכל עת ללא עלות נוספת' : 'Can be cancelled at any time without additional cost'}</li>
                <li>{isHebrew ? 'השירות יופסק בסוף התקופה המשולמת' : 'Service will stop at the end of the paid period'}</li>
                <li>{isHebrew ? 'לא יינתן החזר כספי עבור תקופה שכבר שולמה' : 'No refund will be given for a period already paid'}</li>
              </ul>
              
              <h3 className="font-semibold text-lg mt-6">
                {isHebrew ? 'הפסקה על ידי החברה:' : 'Termination by Company:'}
              </h3>
              <ul className="list-disc list-inside space-y-2 mr-6 rtl:mr-0 rtl:ml-6">
                <li>{isHebrew ? 'בגין אי תשלום - לאחר התראה של 7 ימים' : 'Due to non-payment - after 7 days notice'}</li>
                <li>{isHebrew ? 'בגין הפרת תנאי השימוש' : 'Due to violation of terms of use'}</li>
                <li>{isHebrew ? 'בגין שימוש לא חוקי בשירות' : 'Due to illegal use of the service'}</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="bg-orange-100 rounded-lg p-2">
                <FileText className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className={`text-2xl font-bold text-gray-900 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew ? '6. שינויים בתנאים' : '6. Changes to Terms'}
              </h2>
            </div>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              <ul className="list-disc list-inside space-y-2 mr-6 rtl:mr-0 rtl:ml-6">
                <li>{isHebrew ? 'החברה רשאית לעדכן את תנאי השימוש' : 'The company may update the terms of use'}</li>
                <li>{isHebrew ? 'עדכונים יפורסמו באתר ויישלחו למשתמשים' : 'Updates will be published on the website and sent to users'}</li>
                <li>{isHebrew ? 'המשך השימוש מהווה הסכמה לתנאים החדשים' : 'Continued use constitutes agreement to the new terms'}</li>
                <li>{isHebrew ? 'שינויי מחיר יכנסו לתוקף רק בחודש הבא' : 'Price changes will only take effect next month'}</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className={`text-xl font-bold text-blue-900 mb-3 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'יצירת קשר ותמיכה' : 'Contact and Support'}
            </h3>
            <p className={`text-blue-800 mb-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew 
                ? 'לשאלות, תמיכה או בעיות טכניות:'
                : 'For questions, support or technical issues:'
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
                📞 052-605-3680 - יהונתן פרידבורג
              </p>
              <p className={`text-blue-700 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                📞 054-788-4076 - רועי פרידבורג
              </p>
            </div>
          </section>

          {/* Legal */}
          <section className="bg-gray-100 border border-gray-300 rounded-lg p-6">
            <h3 className={`text-lg font-bold text-gray-900 mb-3 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'סמכות שיפוט' : 'Jurisdiction'}
            </h3>
            <p className={`text-gray-700 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew 
                ? 'תנאי השימוש כפופים לדיני מדינת ישראל. סמכות השיפוט הבלעדית נתונה לבתי המשפט בישראל.'
                : 'These terms of use are subject to the laws of the State of Israel. Exclusive jurisdiction is given to the courts in Israel.'
              }
            </p>
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

export default TermsOfService;