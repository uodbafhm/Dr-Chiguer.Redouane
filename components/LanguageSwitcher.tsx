
import React, { useState } from 'react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const languages: Language[] = ['FR', 'AR', 'EN', 'ES'];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-sm hover:bg-blue-100 transition-all border border-blue-200"
      >
        <span className="w-5 h-5 flex items-center justify-center bg-white rounded-full text-[10px] shadow-sm">
          🌐
        </span>
        {currentLang}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-32 rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-100 shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
          <div className="p-1">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  onLanguageChange(lang);
                  setIsOpen(false);
                }}
                className={`flex items-center w-full px-4 py-3 text-sm font-semibold transition-all rounded-xl ${
                  currentLang === lang 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                {lang === 'AR' ? 'العربية' : lang === 'FR' ? 'Français' : lang === 'EN' ? 'English' : 'Español'}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
