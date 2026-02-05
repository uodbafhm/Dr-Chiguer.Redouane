
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Translation } from '../types';
import { DOCTOR_INFO, SERVICES } from '../constants';

interface ContactProps {
  t: Translation;
  isRtl: boolean;
}

const Contact: React.FC<ContactProps> = ({ t, isRtl }) => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if we have a prefilled message or specific service from clicking a service card
    if (location.state) {
      const state = location.state as any;
      if (state.prefillMessage) {
        setFormData(prev => ({
          ...prev,
          message: state.prefillMessage
        }));
      }
      // If the service title was passed directly
      if (state.selectedService) {
        setFormData(prev => ({
          ...prev,
          service: state.selectedService
        }));
      }
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="py-32 lg:py-48 bg-[#fcfcfd] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`mb-16 ${isRtl ? 'text-right' : 'text-left'}`}>
          <span className="text-sm font-black text-blue-600 uppercase tracking-[0.4em] mb-4 inline-block">
            {isRtl ? 'تواصل معنا' : 'PRENDRE CONTACT'}
          </span>
          <h1 className="text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-none">
            {t.appointment}
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Appointment Form Column */}
          <div className={`lg:col-span-7 h-full ${isRtl ? 'order-1' : 'order-1'}`}>
            <div className="bg-gray-900 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl h-full flex flex-col relative overflow-hidden group">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-blue-600/20 transition-colors duration-700"></div>
              
              <div className={`relative z-10 mb-10 ${isRtl ? 'text-right' : 'text-left'}`}>
                <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-md">
                  {isRtl ? 'احجز موعدك في دقائق وسنقوم بالرد عليك لتأكيده.' : 'Planifiez votre visite en quelques clics. Notre équipe vous répondra rapidement.'}
                </p>
              </div>

              {submitted ? (
                <div className="relative z-10 flex-grow flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <span className="text-5xl">✨</span>
                  </div>
                  <h4 className="text-3xl font-black text-white mb-4">{t.success}</h4>
                  <p className="text-gray-400 mb-10 font-medium">Nous vous contacterons très bientôt.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-10 py-4 bg-white text-gray-900 rounded-2xl font-black hover:bg-blue-50 transition-all shadow-xl active:scale-95"
                  >
                    {isRtl ? "إرسال طلب آخر" : "Nouvelle demande"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 flex-grow space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={`block text-[10px] font-black text-gray-500 uppercase tracking-widest ${isRtl ? 'text-right' : 'text-left'}`}>
                        {t.name}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-700 focus:border-blue-500 focus:bg-white/10 outline-none transition-all ${isRtl ? 'text-right' : 'text-left'}`}
                        placeholder={isRtl ? "الاسم الكامل" : "Ex: Adam Smith"}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className={`block text-[10px] font-black text-gray-500 uppercase tracking-widest ${isRtl ? 'text-right' : 'text-left'}`}>
                        {t.phone}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className={`w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-700 focus:border-blue-500 focus:bg-white/10 outline-none transition-all ${isRtl ? 'text-right' : 'text-left'}`}
                        placeholder="06 -- -- -- --"
                      />
                    </div>
                  </div>

                  {/* Service Selection Field */}
                  <div className="space-y-2">
                    <label className={`block text-[10px] font-black text-gray-500 uppercase tracking-widest ${isRtl ? 'text-right' : 'text-left'}`}>
                      {t.serviceLabel}
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className={`w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer ${isRtl ? 'text-right' : 'text-left'}`}
                    >
                      <option value="" className="bg-gray-900 text-gray-500">{isRtl ? '-- اختر الخدمة --' : '-- Choisir le service --'}</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={isRtl ? s.title : s.id.toUpperCase()} className="bg-gray-900 text-white">
                          {isRtl ? s.title : s.id.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={`block text-[10px] font-black text-gray-500 uppercase tracking-widest ${isRtl ? 'text-right' : 'text-left'}`}>
                        {t.date}
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className={`block text-[10px] font-black text-gray-500 uppercase tracking-widest ${isRtl ? 'text-right' : 'text-left'}`}>
                        {t.time}
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className={`block text-[10px] font-black text-gray-500 uppercase tracking-widest ${isRtl ? 'text-right' : 'text-left'}`}>
                      {t.message}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className={`w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-700 focus:border-blue-500 focus:bg-white/10 outline-none transition-all resize-none ${isRtl ? 'text-right' : 'text-left'}`}
                      placeholder={isRtl ? "رسالتك..." : "Comment pouvons-nous vous aider ?"}
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 py-5 rounded-2xl text-white text-xl font-black shadow-2xl shadow-blue-900/40 hover:bg-blue-500 transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-3"
                    >
                      <span>{t.submit}</span>
                      <span className={isRtl ? 'rotate-180' : ''}>→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info & Map Column */}
          <div className={`lg:col-span-5 flex flex-col gap-8 ${isRtl ? 'order-2' : 'order-2'}`}>
            <div className="grid grid-cols-1 gap-4">
              <div className={`group flex items-center gap-5 p-6 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-xl transition-all duration-300 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  📞
                </div>
                <div className={isRtl ? 'text-right' : 'text-left'}>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t.phone}</p>
                  <p className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{DOCTOR_INFO.phones[0]}</p>
                </div>
              </div>

              <a 
                href={DOCTOR_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 p-6 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:border-pink-200 hover:shadow-xl transition-all duration-300 ${isRtl ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600 text-xl group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                  📸
                </div>
                <div className={isRtl ? 'text-right' : 'text-left'}>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Instagram</p>
                  <p className="text-lg font-bold text-gray-900">@chiguerdentalclinic</p>
                </div>
              </a>
            </div>

            <div className="flex-grow bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group relative">
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg border border-gray-100 text-[10px] font-black text-gray-900 uppercase tracking-widest">
                  {t.location}
                </div>
              </div>
              <iframe
                src={DOCTOR_INFO.mapsIframe}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                className="grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 scale-[1.01] group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-[2.5rem]"></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
