
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Language } from './types';
import { TRANSLATIONS, DOCTOR_INFO } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('FR');
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'AR';

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen flex flex-col bg-white ${isRtl ? 'rtl' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>
        <Navbar currentLang={lang} onLanguageChange={setLang} t={t} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home t={t} isRtl={isRtl} />} />
            <Route path="/services" element={<Services t={t} isRtl={isRtl} />} />
            <Route path="/contact" element={<Contact t={t} isRtl={isRtl} />} />
          </Routes>
        </main>

        <Footer t={t} currentLang={lang} />
        
        {/* Floating Instagram Button - Fixed to bottom right as requested */}
        <div className="fixed bottom-8 right-8 z-50" dir="ltr">
          <a
            href={DOCTOR_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-pink-500/40 transition-all transform hover:scale-110 active:scale-90"
            aria-label="Instagram"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.247 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.247-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.247-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.247 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.28.058-2.152.26-2.917.557-.792.307-1.463.718-2.132 1.387-.669.669-1.08 1.34-1.387 2.132-.297.765-.499 1.637-.557 2.917-.058 1.28-.072 1.688-.072 4.947s.014 3.668.072 4.948c.058 1.28.26 2.151.557 2.917.307.792.718 1.463 1.387 2.132.669.669 1.34 1.08 2.132 1.387.765.297 1.637.499 2.917.557 1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072c1.28-.058 2.151-.26 2.917-.557.792-.307 1.463-.718 2.132-1.387.669-.669 1.08-1.34 1.387-2.132.297-.765.499-1.637.557-2.917.058-1.28.072-1.688.072-4.947s-.014-3.668-.072-4.948c-.058-1.28-.26-2.151-.557-2.917-.307-.792-.718-1.463-1.387-2.132-.669-.669-1.34-1.08-2.132-1.387-.765-.297-1.637-.499-2.917-.557-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;
