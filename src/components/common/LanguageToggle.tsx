import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <Languages className="h-4 w-4 text-gray-600" />
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setLanguage('he')}
          className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
            language === 'he'
              ? 'bg-white text-blue-600 shadow-sm font-medium'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          עב
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
            language === 'en'
              ? 'bg-white text-blue-600 shadow-sm font-medium'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          En
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;