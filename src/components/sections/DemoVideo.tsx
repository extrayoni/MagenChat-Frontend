import React from 'react';
import { Play, Shield, Mic, Image, Link, UserCheck } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';

const DemoVideo: React.FC = () => {
  const { language, isHebrew } = useLanguage();
  const t = translations[language];

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
            {t.demoTitle}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
            {t.demoDescription}
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-blue-600 to-teal-600">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-4 mx-auto w-fit">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <h3 className={`text-white text-xl font-semibold mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                  {isHebrew ? 'דמו אינטראקטיבי' : 'Interactive Demo'}
                </h3>
                <p className={`text-white/80 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                  {isHebrew ? 'לחצו לצפייה בפעולה' : 'Click to see it in action'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-16">
          <div className="text-center">
            <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'זיהוי מיידי' : 'Instant Detection'}
            </h3>
            <p className={`text-gray-600 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'המערכת מזהה תוכן לא מתאים תוך שניות' : 'System detects inappropriate content within seconds'}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'הסרה אוטומטית' : 'Automatic Removal'}
            </h3>
            <p className={`text-gray-600 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'הודעות בעייתיות נמחקות באופן אוטומטי' : 'Problematic messages are automatically deleted'}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Mic className="h-8 w-8 text-green-600" />
            </div>
            <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'סינון קולי' : 'Voice Filtering'}
            </h3>
            <p className={`text-gray-600 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'ניתוח הקלטות קוליות לזיהוי תוכן בעייתי' : 'Analysis of voice recordings to detect problematic content'}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Image className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'בדיקת תמונות' : 'Image Checking'}
            </h3>
            <p className={`text-gray-600 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'זיהוי אוטומטי של תמונות לא מתאימות' : 'Automatic detection of inappropriate images'}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Link className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'סינון קישורים' : 'Link Filtering'}
            </h3>
            <p className={`text-gray-600 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'בדיקה וחסימת קישורים מסוכנים' : 'Checking and blocking dangerous links'}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-violet-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <UserCheck className="h-8 w-8 text-violet-600" />
            </div>
            <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'דיווח לאחראי' : 'Admin Reporting'}
            </h3>
            <p className={`text-gray-600 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'העברת התוכן המסונן לאחראי הקבוצה' : 'Forwarding filtered content to group administrator'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;