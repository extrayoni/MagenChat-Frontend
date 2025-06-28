import React, { useState } from 'react';
import { Send, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';

const Contact: React.FC = () => {
  const { language, isHebrew } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const message = `שלום, אני ${formData.name}. אשמח לשמוע עוד על מגןצ'אט. הטלפון שלי: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/972526053680?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div>
              <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {t.contactTitle}
              </h2>
              <p className={`text-xl text-gray-600 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {t.contactSubtitle}
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="bg-blue-100 rounded-lg p-3">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className={`font-semibold text-gray-900 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    יהונתן פרידבורג
                  </p>
                  <p className={`text-gray-600 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    052-605-3680
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="bg-teal-100 rounded-lg p-3">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className={`font-semibold text-gray-900 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    רועי פרידבורג
                  </p>
                  <p className={`text-gray-600 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    054-788-4076
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="bg-green-100 rounded-lg p-3">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className={`text-gray-600 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    johnny.fridburg@gmail.com
                  </p>
                  <p className={`text-gray-600 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    roi.fridburg@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium text-gray-700 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${isHebrew ? 'font-heebo text-right' : 'font-inter'}`}
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="phone" className={`block text-sm font-medium text-gray-700 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                  {t.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${isHebrew ? 'font-heebo text-right' : 'font-inter'}`}
                  placeholder={t.phonePlaceholder}
                />
              </div>

              <button
                type="submit"
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse ${isHebrew ? 'font-heebo' : 'font-inter'}`}
              >
                <Send className="h-5 w-5" />
                <span>{t.contactSubmit}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;