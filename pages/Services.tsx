
import React from 'react';
import { Translation } from '../types';
import { SERVICES, DOCTOR_INFO } from '../constants';

interface ServicesProps {
  t: Translation;
  isRtl: boolean;
}

const Services: React.FC<ServicesProps> = ({ t, isRtl }) => {
  const getWhatsAppLink = (serviceTitle: string) => {
    const message = isRtl 
      ? `السلام عليكم دكتور شقير، أود حجز موعد لـ: ${serviceTitle}` 
      : `Bonjour Dr. Chiguer, je souhaite prendre rendez-vous pour : ${serviceTitle}`;
    return `https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="py-32 lg:py-48 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-sm font-black text-blue-600 uppercase tracking-[0.4em] mb-4 inline-block">NOS EXPERTISES</span>
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight">{t.ourServices}</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            {isRtl ? "نستخدم أحدث التقنيات العالمية لضمان نتائج مثالية تدوم طويلاً." : "Une approche moderne et personnalisée pour chaque patient."}
          </p>
          <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mt-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SERVICES.map((service) => (
            <a
              key={service.id}
              href={getWhatsAppLink(isRtl ? service.title : service.id.toUpperCase())}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 text-4xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {service.icon}
                </div>
              </div>
              <div className={`p-10 flex-grow flex flex-col ${isRtl ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {isRtl ? service.title : service.id.toUpperCase()}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium text-lg mb-10">
                  {isRtl ? service.description : `Soins dentaires spécialisés utilisant les standards internationaux les plus rigoureux.`}
                </p>
                <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-blue-600 font-black text-sm uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-block">
                    {isRtl ? 'احجز الآن' : 'Réserver maintenant'}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <span className={isRtl ? 'rotate-180' : ''}>→</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
