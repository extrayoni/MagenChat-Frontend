import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';

interface FooterProps {
  onNavigate?: (page: 'home' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, isHebrew } = useLanguage();
  const t = translations[language];

  const contactInfo = [
    {
      icon: Mail,
      text: 'johnny.fridburg@gmail.com',
      href: 'mailto:johnny.fridburg@gmail.com'
    },
    {
      icon: Mail,
      text: 'roi.fridburg@gmail.com',
      href: 'mailto:roi.fridburg@gmail.com'
    },
    {
      icon: Phone,
      text: '052-605-3680 - יהונתן פרידבורג',
      href: 'tel:0526053680'
    },
    {
      icon: Phone,
      text: '054-788-4076 - רועי פרידבורג',
      href: 'tel:0547884076'
    },
    {
      icon: MessageCircle,
      text: 'WhatsApp',
      href: 'https://wa.me/972526053680'
    }
  ];

  const handleLinkClick = (page: 'privacy' | 'terms') => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <img 
                src="/copped LOGO.jpg" 
                alt="MagenChat Logo" 
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className={`text-xl font-bold ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                {t.footerTitle}
              </span>
            </div>
            <p className={`text-gray-300 leading-relaxed ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {t.footerDescription}
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {t.contact}
            </h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <IconComponent className="h-4 w-4 flex-shrink-0" />
                    <span className={`text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
                      {contact.text}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
              {isHebrew ? 'קישורים' : 'Links'}
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => handleLinkClick('privacy')}
                className={`block text-gray-300 hover:text-white transition-colors duration-200 text-left ${isHebrew ? 'font-heebo' : 'font-inter'}`}
              >
                {t.privacyPolicy}
              </button>
              <button
                onClick={() => handleLinkClick('terms')}
                className={`block text-gray-300 hover:text-white transition-colors duration-200 text-left ${isHebrew ? 'font-heebo' : 'font-inter'}`}
              >
                {t.terms}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className={`text-gray-400 text-sm ${isHebrew ? 'font-heebo' : 'font-inter'}`}>
            © 2025 מגןצ'אט. {t.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;