
import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from '../types';
import { SERVICES, DOCTOR_INFO } from '../constants';

interface HomeProps {
  t: Translation;
  isRtl: boolean;
}

const Home: React.FC<HomeProps> = ({ t, isRtl }) => {
  const getWhatsAppLink = (service?: string) => {
    const message = service 
      ? (isRtl ? `السلام عليكم دكتور شقير، أود حجز موعد لـ: ${service}` : `Bonjour Dr. Chiguer, je souhaite prendre rendez-vous pour : ${service}`)
      : (isRtl ? `السلام عليكم دكتور شقير، أود حجز موعد` : `Bonjour Dr. Chiguer, je souhaite prendre un rendez-vous`);
    return `https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className={`lg:col-span-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-black tracking-widest uppercase mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></span>
                CLINIQUE DENTAIRE À TANGER
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8 tracking-tight">
                {t.heroTitle} <span className="text-blue-600">.</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-500 mb-12 max-w-xl leading-relaxed font-medium">
                {t.heroSub}
              </p>
              <div className={`flex flex-col sm:flex-row gap-5 ${isRtl ? 'justify-end' : ''}`}>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white text-lg font-bold rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-2xl shadow-blue-200 transform hover:-translate-y-1 active:scale-95"
                >
                  {t.bookNow}
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-gray-100 text-gray-900 text-lg font-bold rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  {t.services}
                </Link>
              </div>
              
              <div className="mt-16 flex items-center gap-8 border-t border-gray-100 pt-8">
                <div>
                  <div className="text-3xl font-extrabold text-gray-900">10+</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{isRtl ? 'سنوات خبرة' : 'Ans d\'expérience'}</div>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-extrabold text-gray-900">10k+</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{isRtl ? 'مريض سعيد' : 'Patients Heureux'}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-10 bg-gradient-to-tr from-blue-600/10 via-transparent to-blue-600/5 rounded-full blur-3xl opacity-50"></div>
              <div className="relative group">
                <div className="absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-12 w-48 h-48 sm:w-64 sm:h-64 bg-blue-600 rounded-3xl -z-10 transform rotate-12 transition-transform group-hover:rotate-6 duration-700 shadow-2xl"></div>
                <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <img
                    src="https://i.postimg.cc/4x3tXtYq/425432612-2385365264997940-2491076756268387632-n.jpg"
                    alt="Dr. Chiguer Professional Dental Care"
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -right-6 top-10 sm:-right-10 glass p-6 rounded-[2rem] shadow-2xl border border-white/50 max-w-[180px] hidden sm:block">
                  <div className="flex -space-x-2 mb-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden" index-key={i}>
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-black text-gray-900 uppercase tracking-tight">5-Star Clinical Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
            <div className={isRtl ? 'text-right' : 'text-left'}>
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">TECHNOLOGIE & SOINS</h2>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">{t.ourServices}</h3>
            </div>
            <Link to="/services" className="px-8 py-4 bg-white border border-gray-200 rounded-2xl font-bold text-gray-900 hover:bg-gray-50 transition-all shadow-sm">
              {isRtl ? 'كل الخدمات' : 'Voir tous les services'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <a
                key={service.id}
                href={getWhatsAppLink(isRtl ? service.title : service.id.toUpperCase())}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm flex flex-col items-start group"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className={`text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors ${isRtl ? 'w-full text-right' : ''}`}>
                  {isRtl ? service.title : service.id.charAt(0).toUpperCase() + service.id.slice(1)}
                </h4>
                <p className={`text-gray-500 leading-relaxed font-medium mb-8 ${isRtl ? 'w-full text-right' : ''}`}>
                  {isRtl ? service.description : `Expert dental solutions for a healthier, more confident smile using the latest technologies.`}
                </p>
                <div className={`mt-auto text-blue-600 font-bold hover:gap-3 flex items-center gap-2 transition-all ${isRtl ? 'flex-row-reverse w-full' : ''}`}>
                  {isRtl ? 'احجز الآن' : 'Réserver'} 
                  <span className={isRtl ? 'rotate-180' : ''}>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-2xl shadow-blue-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className={`relative z-10 max-w-lg ${isRtl ? 'text-right' : 'text-left'}`}>
              <h3 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
                {isRtl ? 'مستعد لابتسامة جديدة؟' : 'Prêt pour un nouveau sourire ?'}
              </h3>
              <p className="text-blue-100 text-lg font-medium mb-10 opacity-90">
                {isRtl ? 'فريقنا المتخصص في انتظارك لتقديم أفضل رعاية ممكنة لأسنانك.' : 'Notre équipe spécialisée vous attend pour vous offrir les meilleurs soins dentaires possibles.'}
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 text-xl font-black rounded-2xl shadow-xl hover:bg-gray-50 transition-all"
              >
                {t.bookNow}
              </a>
            </div>

            <div className="relative z-10 mt-12 lg:mt-0 flex flex-col items-center">
              <div className="flex mb-4 text-yellow-300">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-10 w-10 fill-current drop-shadow-lg" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-center">
                <p className="text-5xl font-black text-white mb-2">{DOCTOR_INFO.reviews}+</p>
                <p className="text-blue-100 font-bold uppercase tracking-widest text-sm opacity-80">{isRtl ? 'تقييمات ممتازة' : 'Avis Google 5 Étoiles'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
