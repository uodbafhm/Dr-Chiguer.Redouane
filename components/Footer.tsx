
import React from 'react';
import { Link } from 'react-router-dom';
import { Translation, Language } from '../types';
import { DOCTOR_INFO } from '../constants';

interface FooterProps {
  t: Translation;
  currentLang: Language;
}

const Footer: React.FC<FooterProps> = ({ t, currentLang }) => {
  const isRtl = currentLang === 'AR';

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 ${isRtl ? 'text-right' : 'text-left'}`}>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">{DOCTOR_INFO.name}</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {isRtl 
                ? "عيادة متخصصة في طب وجراحة الأسنان، نسعى دائماً لتقديم الأفضل لمرضانا بأحدث الوسائل والتقنيات."
                : "Specialized clinic in dentistry and dental surgery, we always strive to provide the best for our patients with the latest tools and techniques."}
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href={DOCTOR_INFO.instagram} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.247 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.247-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.247-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.247 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.28.058-2.152.26-2.917.557-.792.307-1.463.718-2.132 1.387-.669.669-1.08 1.34-1.387 2.132-.297.765-.499 1.637-.557 2.917-.058 1.28-.072 1.688-.072 4.947s.014 3.668.072 4.948c.058 1.28.26 2.151.557 2.917.307.792.718 1.463 1.387 2.132.669.669 1.34 1.08 2.132 1.387.765.297 1.637.499 2.917.557 1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072c1.28-.058 2.151-.26 2.917-.557.792-.307 1.463-.718 2.132-1.387.669-.669 1.08-1.34 1.387-2.132.297-.765.499-1.637.557-2.917.058-1.28.072-1.688.072-4.947s-.014-3.668-.072-4.948c-.058-1.28-.26-2.151-.557-2.917-.307-.792-.718-1.463-1.387-2.132-.669-.669-1.34-1.08-2.132-1.387-.765-.297-1.637-.499-2.917-.557-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">{t.services}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">{t.ourServices}</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">{t.appointment}</Link></li>
              <li><Link to="/" className="hover:text-blue-400 transition-colors">{t.home}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">{t.contact}</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>{DOCTOR_INFO.phones[0]}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Tanger, Maroc</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {DOCTOR_INFO.name}. {isRtl ? "جميع الحقوق محفوظة." : "All rights reserved."}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
