
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language, Translation } from '../types';
import LanguageSwitcher from './LanguageSwitcher';
import { DOCTOR_INFO } from '../constants';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translation;
}

const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isRtl = currentLang === 'AR';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: t.home, path: '/' },
    { name: t.services, path: '/services' },
    { name: t.contact, path: '/contact' },
  ];

  const whatsappLink = `https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encodeURIComponent(isRtl ? 'السلام عليكم دكتور شقير، أود حجز موعد' : 'Bonjour Dr. Chiguer, je souhaite prendre un rendez-vous')}`;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass border border-white/20 rounded-3xl shadow-2xl transition-all duration-500 px-6 sm:px-8 h-16 flex items-center justify-between`}>
          <div className="flex items-center">
            <Link to="/" className="group flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-gray-900 leading-none group-hover:text-blue-600 transition-colors">
                {DOCTOR_INFO.name.split(' ').slice(0, 2).join(' ')}
                <span className="text-blue-600 ml-1 font-extrabold">{DOCTOR_INFO.name.split(' ').pop()}</span>
              </span>
              <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase mt-1">
                EXCELLENCE DENTAIRE
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 group ${
                  isActive(link.path) ? 'text-blue-600 bg-blue-50/50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full transition-all duration-300 ${
                  isActive(link.path) ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                }`} />
              </Link>
            ))}
            <div className="w-px h-6 bg-gray-200 mx-4" />
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className={isOpen ? 'hidden' : 'inline-flex'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                <path className={isOpen ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] transition-transform duration-500 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <span className="font-black text-2xl text-blue-600">MENU</span>
            <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-full text-gray-900">
               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-black py-4 border-b border-gray-100 transition-colors ${
                  isActive(link.path) ? 'text-blue-600' : 'text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto pb-10">
            <a 
               href={whatsappLink}
               target="_blank"
               rel="noopener noreferrer"
               onClick={() => setIsOpen(false)}
               className="block w-full text-center py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl shadow-xl"
            >
              {t.appointment}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
