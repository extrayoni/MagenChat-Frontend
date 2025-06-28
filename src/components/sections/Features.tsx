import React from 'react';
import { Shield, Zap, Bell, Heart, Download, Lock as Lock2, Mic, Image, Link } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';

const Features: React.FC = () => {
  const { language, isHebrew } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: Zap,
      title: t.feature1Title,
      description: t.feature1Description,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: t.feature2Title,
      description: t.feature2Description,
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Bell,
      title: t.feature3Title,
      description: t.feature3Description,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Heart,
      title: t.feature4Title,
      description: t.feature4Description,
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: Download,
      title: t.feature5Title,
      description: t.feature5Description,
      color: 'from-purple-400 to-indigo-500'
    },
    {
      icon: Lock2,
      title: t.feature6Title,
      description: t.feature6Description,
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Mic,
      title: t.feature7Title,
      description: t.feature7Description,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Image,
      title: t.feature8Title,
      description: t.feature8Description,
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: Link,
      title: t.feature9Title,
      description: t.feature9Description,
      color: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
            {t.featuresTitle}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
            {t.featuresSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                <h3 className={`text-xl font-semibold text-gray-900 mb-3 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                  {feature.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Admin Reporting Feature */}
        <div className="mt-16 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-xl p-8">
          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <div className="bg-violet-100 rounded-full p-3 flex-shrink-0">
              <Bell className="h-8 w-8 text-violet-600" />
            </div>
            <div className="flex-1">
              <h4 className={`text-xl font-semibold text-violet-900 mb-3 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew ? 'דיווח מלא לאחראי הקבוצה' : 'Complete Reporting to Group Administrator'}
              </h4>
              <p className={`text-violet-800 leading-relaxed mb-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew 
                  ? 'כל תוכן שמסונן ונמחק מועבר באופן אוטומטי לאחראי הקבוצה. כך המורה או ההורה האחראי יכול לעקוב אחר הפעילות, לזהות דפוסים ולנקוט פעולה חינוכית מתאימה.'
                  : 'All filtered and deleted content is automatically forwarded to the group administrator. This way the teacher or responsible parent can track activity, identify patterns and take appropriate educational action.'
                }
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  <span className={`text-violet-700 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {isHebrew ? 'דיווח מיידי על תוכן שנמחק' : 'Immediate reporting of deleted content'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  <span className={`text-violet-700 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {isHebrew ? 'זיהוי דפוסי התנהגות' : 'Behavior pattern identification'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  <span className={`text-violet-700 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {isHebrew ? 'מעקב אחר פעילות חשודה' : 'Tracking suspicious activity'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  <span className={`text-violet-700 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                    {isHebrew ? 'תמיכה בפעולה חינוכית' : 'Support for educational action'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-4xl mx-auto">
          <div className="flex items-start space-x-3 rtl:space-x-reverse">
            <Lock2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className={`font-semibold text-blue-900 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {isHebrew ? 'הבטחת פרטיות' : 'Privacy Guarantee'}
              </h4>
              <p className={`text-blue-800 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {t.privacyNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;