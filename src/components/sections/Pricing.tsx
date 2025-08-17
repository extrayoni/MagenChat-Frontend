import React, { useState } from 'react';
import { CreditCard, Check, MessageSquare, Shield } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';

const Pricing: React.FC = () => {
  const { language, isHebrew } = useLanguage();
  const t = translations[language];
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium' | null>(null);
  const [formData, setFormData] = useState({
    whatsappLink: '',
    notificationPhone: '',
    payerName: '',
    email: '',
    contactPhone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) {
      alert(isHebrew ? 'אנא בחרו חבילה' : 'Please select a plan');
      return;
    }

    // Prepare WhatsApp message
    const planName = selectedPlan === 'basic' 
      ? (isHebrew ? 'חבילה בסיסית (חינם)' : 'Basic Plan (Free)')
      : (isHebrew ? 'חבילה מלאה (100 ש"ח)' : 'Premium Plan (100 NIS)');

    const message = isHebrew 
      ? `🔰 הרשמה חדשה למגןצ'אט

📋 פרטי הרשמה:
👤 שם: ${formData.payerName}
📞 טלפון ליצירת קשר: ${formData.contactPhone}
📧 אימייל: ${formData.email}
🔔 טלפון להתראות: ${formData.notificationPhone}
🔗 קישור קבוצת וואטסאפ: ${formData.whatsappLink}

📦 חבילה נבחרת: ${planName}

תאריך הרשמה: ${new Date().toLocaleString('he-IL')}`
      : `🔰 New MagenChat Registration

📋 Registration Details:
👤 Name: ${formData.payerName}
📞 Contact Phone: ${formData.contactPhone}
📧 Email: ${formData.email}
🔔 Notification Phone: ${formData.notificationPhone}
🔗 WhatsApp Group Link: ${formData.whatsappLink}

📦 Selected Plan: ${planName}

Registration Date: ${new Date().toLocaleString('en-US')}`;

    // Create WhatsApp URL
    const phoneNumber = '972526053680';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Show confirmation
    if (selectedPlan === 'premium') {
      alert(isHebrew ? 'פותח וואטסאפ לשליחת הפרטים. לאחר מכן תועברו לעמוד התשלום.' : 'Opening WhatsApp to send details. You will then be redirected to payment page.');
    } else {
      alert(isHebrew ? 'פותח וואטסאפ לשליחת הפרטים. נחזור אליכם בהקדם!' : 'Opening WhatsApp to send details. We will get back to you soon!');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const basicFeatures = t.basicFeatures;
  const premiumFeatures = t.premiumFeatures;

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

        {/* Plan Selection */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Basic Plan */}
            <div 
              className={`bg-white rounded-2xl shadow-xl border-2 cursor-pointer transition-all duration-300 overflow-hidden ${
                selectedPlan === 'basic' ? 'border-green-500 ring-4 ring-green-100' : 'border-gray-100 hover:border-green-300'
              }`}
              onClick={() => setSelectedPlan('basic')}
            >
              <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 text-center">
                <MessageSquare className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className={`text-2xl font-bold text-white mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                  {t.basicPlanTitle}
                </h3>
                <p className={`text-green-100 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                  {t.basicPlanSubtitle}
                </p>
              </div>

              <div className="p-6">
                <div className="text-center mb-6">
                  <div className={`text-4xl font-bold text-green-600 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {t.basicPlanPrice}
                  </div>
                  <div className={`text-sm text-gray-600 mb-3 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {t.basicPlanDescription}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {basicFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className={`text-gray-700 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => setSelectedPlan('basic')}
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-200 ${
                    selectedPlan === 'basic'
                      ? 'bg-green-600 text-white'
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  } ${isHebrew ? 'font-heebo' : 'font-inter'}`}
                >
                  {selectedPlan === 'basic' ? '✓ ' : ''}{t.selectBasic}
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div 
              className={`bg-white rounded-2xl shadow-xl border-2 cursor-pointer transition-all duration-300 overflow-hidden ${
                selectedPlan === 'premium' ? 'border-blue-500 ring-4 ring-blue-100' : 'border-gray-100 hover:border-blue-300'
              }`}
              onClick={() => setSelectedPlan('premium')}
            >
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-center relative">
                <div className="absolute top-2 right-2">
                  <span className={`bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {t.firstMonthFree}
                  </span>
                </div>
                <Shield className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className={`text-2xl font-bold text-white mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                  {t.premiumPlanTitle}
                </h3>
                <p className={`text-blue-100 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                  {t.premiumPlanSubtitle}
                </p>
              </div>

              <div className="p-6">
                <div className="text-center mb-6">
                  <div className={`text-4xl font-bold text-blue-600 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {t.monthlyPrice}
                  </div>
                  <div className={`text-sm text-gray-600 mb-3 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {isHebrew ? 'לקבוצה אחת' : 'Per group'}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {premiumFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className={`text-gray-700 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => setSelectedPlan('premium')}
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-200 ${
                    selectedPlan === 'premium'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  } ${isHebrew ? 'font-heebo' : 'font-inter'}`}
                >
                  {selectedPlan === 'premium' ? '✓ ' : ''}{t.selectPremium}
                </button>
              </div>
            </div>
          </div>

          {/* Additional Groups Note */}
          {selectedPlan && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8 max-w-4xl mx-auto">
              <p className={`text-blue-800 text-sm text-center ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew 
                  ? '💡 רוצים להגן על קבוצות נוספות? כל קבוצה נוספת עולה 90 ש"ח בחודש'
                  : '💡 Want to protect additional groups? Each additional group costs 90 NIS per month'
                }
              </p>
            </div>
          )}
        </div>

        {/* Registration Form */}
        {selectedPlan && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-start">

            {/* Registration Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className={`text-2xl font-bold text-gray-900 mb-2 text-center ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew ? 'הרשמה לשירות' : 'Service Registration'}
              </h3>
              <p className={`text-center text-gray-600 mb-6 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {selectedPlan === 'basic' 
                  ? (isHebrew ? 'נבחרה חבילה בסיסית - הגנה על טקסט' : 'Basic Plan Selected - Text Protection')
                  : (isHebrew ? 'נבחרה חבילה מלאה - הגנה מתקדמת' : 'Premium Plan Selected - Full Protection')
                }
              </p>

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
                  className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse transform hover:scale-105 ${
                    selectedPlan === 'basic'
                      ? 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700'
                      : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700'
                  } text-white ${isHebrew ? 'font-heebo' : 'font-inter'}`}
                >
                  {selectedPlan === 'premium' && <CreditCard className="h-5 w-5" />}
                  {selectedPlan === 'basic' && <MessageSquare className="h-5 w-5" />}
                  <span>
                    {selectedPlan === 'basic' 
                      ? (isHebrew ? 'הרשמה חינם' : 'Register Free')
                      : t.payNow
                    }
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        )}
        {!selectedPlan && (
          <div className="text-center">
            <p className={`text-gray-600 text-lg ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'אנא בחרו חבילה כדי להמשיך' : 'Please select a plan to continue'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;