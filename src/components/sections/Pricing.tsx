import React, { useState } from 'react';
import { CreditCard, Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';

const Pricing: React.FC = () => {
  const { language, isHebrew } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    whatsappLink: '',
    notificationPhone: '',
    payerName: '',
    email: '',
    contactPhone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment - redirect to payment gateway
    console.log('Payment form submitted:', formData);
    alert(isHebrew ? 'מעביר לעמוד התשלום...' : 'Redirecting to payment page...');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const features = [
    isHebrew ? 'חודש ראשון חינם' : 'First month free',
    isHebrew ? 'זיהוי מיידי של תוכן בעייתי' : 'Instant detection of problematic content',
    isHebrew ? 'מחיקה אוטומטית של הודעות' : 'Automatic message deletion',
    isHebrew ? 'התרעות בזמן אמת' : 'Real-time notifications',
    isHebrew ? 'תמיכה טכנית מלאה' : 'Full technical support',
    isHebrew ? 'הגנה על קבוצה אחת' : 'Protection for one group'
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
            {t.pricingTitle}
          </h2>
          <p className={`text-xl text-gray-600 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
            {t.pricingSubtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Pricing Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-center">
                <img 
                  src="/copped LOGO.jpg" 
                  alt="MagenChat Logo" 
                  className="h-16 w-16 rounded-full object-cover mx-auto mb-4 border-4 border-white/20"
                />
                <h3 className={`text-2xl font-bold text-white mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                  מגןצ'אט
                </h3>
                <p className={`text-blue-100 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                  {isHebrew ? 'הגנה מתקדמת לקבוצות וואטסאפ' : 'Advanced WhatsApp group protection'}
                </p>
              </div>

              <div className="p-6">
                <div className="text-center mb-6">
                  <div className={`text-4xl font-bold text-gray-900 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {t.monthlyPrice}
                  </div>
                  <div className={`text-sm text-gray-600 mb-3 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {isHebrew ? 'לקבוצה אחת' : 'Per group'}
                  </div>
                  <div className={`bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {t.firstMonthFree}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className={`text-gray-700 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Additional Groups Note */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className={`text-blue-800 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {isHebrew 
                      ? '💡 רוצים להגן על קבוצות נוספות? כל קבוצה נוספת עולה 90 ש"ח בחודש'
                      : '💡 Want to protect additional groups? Each additional group costs 90 NIS per month'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className={`text-2xl font-bold text-gray-900 mb-6 text-center ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew ? 'הרשמה לשירות' : 'Service Registration'}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="whatsappLink" className={`block text-sm font-medium text-gray-700 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {t.whatsappLink}
                  </label>
                  <input
                    type="url"
                    id="whatsappLink"
                    name="whatsappLink"
                    value={formData.whatsappLink}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${isHebrew ? 'font-heebo text-right' : 'font-inter'}`}
                    placeholder={t.whatsappLinkPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="notificationPhone" className={`block text-sm font-medium text-gray-700 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {t.notificationPhone}
                  </label>
                  <input
                    type="tel"
                    id="notificationPhone"
                    name="notificationPhone"
                    value={formData.notificationPhone}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${isHebrew ? 'font-heebo text-right' : 'font-inter'}`}
                    placeholder={t.phonePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="payerName" className={`block text-sm font-medium text-gray-700 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {t.payerName}
                  </label>
                  <input
                    type="text"
                    id="payerName"
                    name="payerName"
                    value={formData.payerName}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${isHebrew ? 'font-heebo text-right' : 'font-inter'}`}
                    placeholder={t.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium text-gray-700 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${isHebrew ? 'font-heebo text-right' : 'font-inter'}`}
                    placeholder={t.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="contactPhone" className={`block text-sm font-medium text-gray-700 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {t.contactPhone}
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${isHebrew ? 'font-heebo text-right' : 'font-inter'}`}
                    placeholder={t.phonePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse transform hover:scale-105 ${isHebrew ? 'font-heebo' : 'font-inter'}`}
                >
                  <CreditCard className="h-5 w-5" />
                  <span>{t.payNow}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;