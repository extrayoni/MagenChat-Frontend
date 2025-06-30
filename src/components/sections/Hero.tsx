import React from 'react';
import { Play, ArrowDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';

const Hero: React.FC = () => {
  const { language, isHebrew } = useLanguage();
  const t = translations[language];

  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
            {t.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className={`text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
            {t.heroSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToDemo}
              className={`group flex items-center space-x-3 rtl:space-x-reverse bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${isHebrew ? 'font-heebo' : 'font-inter'}`}
            >
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>{t.watchDemo}</span>
            </button>
            
            <button
              onClick={scrollToPricing}
              className={`flex items-center space-x-3 rtl:space-x-reverse bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${isHebrew ? 'font-heebo' : 'font-inter'}`}
            >
              <span>{t.getStarted}</span>
              <ArrowDown className="h-5 w-5" />
            </button>
          </div>

          {/* Hero Illustration */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-4">
                {/* WhatsApp Group Simulation */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse mb-3">
                    <img 
                      src="/MagenChat-Frontend//whatsapp.svg" 
                      alt="WhatsApp" 
                      className="w-8 h-8"
                    />
                    <span className={`font-semibold text-green-800 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                      {isHebrew ? 'קבוצת הכיתה' : 'Class Group'}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <span className={`text-gray-800 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                        {isHebrew ? 'הודעה רגילה...' : 'Regular message...'}
                      </span>
                    </div>
                    
                    <div className="bg-red-100 border border-red-300 rounded-lg p-3">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="bg-red-500 text-white text-xs px-2 py-1 rounded flex items-center space-x-1 rtl:space-x-reverse">
                          <span className="text-xs">🗑️</span>
                          <span>{isHebrew ? 'נמחק' : 'Deleted'}</span>
                        </div>
                        <span className="text-xl">💬</span>
                        <span className={`text-red-800 line-through ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                          {isHebrew ? 'שיח לא הולם, תוכן פוגעני או קריאה לחרם' : 'Inappropriate chat, offensive content or boycott call'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-red-100 border border-red-300 rounded-lg p-3">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="bg-red-500 text-white text-xs px-2 py-1 rounded flex items-center space-x-1 rtl:space-x-reverse">
                          <span className="text-xs">🗑️</span>
                          <span>{isHebrew ? 'נמחק' : 'Deleted'}</span>
                        </div>
                        <span className="text-xl">🎤</span>
                        <span className={`text-red-800 line-through ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                          {isHebrew ? 'הקלטה לא מתאימה' : 'Inappropriate recording'}
                        </span>
                      </div>
                    </div>

                    <div className="bg-red-100 border border-red-300 rounded-lg p-3">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="bg-red-500 text-white text-xs px-2 py-1 rounded flex items-center space-x-1 rtl:space-x-reverse">
                          <span className="text-xs">🗑️</span>
                          <span>{isHebrew ? 'נמחק' : 'Deleted'}</span>
                        </div>
                        <span className="text-xl">🖼️</span>
                        <span className={`text-red-800 line-through ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                          {isHebrew ? 'תמונה לא מתאימה' : 'Inappropriate image'}
                        </span>
                      </div>
                    </div>

                    <div className="bg-red-100 border border-red-300 rounded-lg p-3">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="bg-red-500 text-white text-xs px-2 py-1 rounded flex items-center space-x-1 rtl:space-x-reverse">
                          <span className="text-xs">🗑️</span>
                          <span>{isHebrew ? 'נמחק' : 'Deleted'}</span>
                        </div>
                        <span className="text-xl">🔗</span>
                        <span className={`text-red-800 line-through ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                          {isHebrew ? 'קישור לא מתאים' : 'Inappropriate link'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <span className={`text-blue-800 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                        🤖 {isHebrew ? 'מגןצ\'אט: בואו נשמור על שיחה נעימה ומכבדת' : 'MagenChat: Let\'s keep our conversation pleasant and respectful'}
                      </span>
                    </div>

                    <div className="bg-violet-50 border border-violet-200 rounded-lg p-3">
                      <span className={`text-violet-800 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                        📋 {isHebrew ? 'דיווח נשלח לאחראי הקבוצה' : 'Report sent to group administrator'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <span className={`text-sm text-gray-500 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {isHebrew ? '⚡ הגנה בזמן אמת על טקסט, קול, תמונות וקישורים + דיווח לאחראי' : '⚡ Real-time protection for text, voice, images and links + admin reporting'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;