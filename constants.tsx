
import { Language, Service, TranslationsMap } from './types';

export const DOCTOR_INFO = {
  name: "Dr. Chiguer Redouane",
  phones: ["0663073426", "0538887104"],
  whatsappNumber: "212663073426",
  instagram: "https://www.instagram.com/chiguerdentalclinic/",
  mapsUrl: "https://maps.app.goo.gl/GW2vmAGGMvu5TqVh7",
  mapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415366.0815404573!2d-5.966279110937446!3d35.57721909999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b43c925b23cd3%3A0x55f439598c40cfda!2sDoctor%20Chiguer%20Redouane%20-%20Dentist!5e0!3m2!1sen!2sma!4v1769639681254!5m2!1sen!2sma",
  reviews: 105
};

export const SERVICES: Service[] = [
  {
    id: "blanchiment",
    title: "تبييض الأسنان",
    description: "تبييض احترافي للحصول على ابتسامة مشرقة وطبيعية بأحدث التقنيات.",
    image: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "✨"
  },
  {
    id: "implants",
    title: "زراعة الأسنان",
    description: "استعادة الأسنان المفقودة بشكل دائم وجمالي يضمن لك الراحة والثقة.",
    image: "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp",
    icon: "🦷"
  },
  {
    id: "orthodontie",
    title: "تقويم الأسنان",
    description: "تصحيح اصطفاف الأسنان للأطفال والكبار للحصول على مظهر متناسق وصحي.",
    image: "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "📏"
  },
  {
    id: "soins",
    title: "علاج التسوس",
    description: "علاج سريع وبدون ألم لحساسية وتسوس الأسنان مع الحفاظ على بنية السن.",
    image: "https://i.postimg.cc/T3SsxfVR/imgi-24-Dental-Caries-Cavity-2.jpg",
    icon: "🛡️"
  },
  {
    id: "detartrage",
    title: "تنظيف الأسنان وإزالة الجير",
    description: "إزالة الجير والبلاك للحفاظ على صحة اللثة وانتعاش الفم.",
    image: "https://i.postimg.cc/MHVYxqgY/Detartrage-polissage.webp",
    icon: "🧼"
  },
  {
    id: "extraction",
    title: "خلع الأسنان",
    description: "خلع آمن للأسنان المتضررة مع عناية خاصة لتخفيف الألم وتسريع الشفاء.",
    image: "https://i.postimg.cc/kgBBtfgm/Extraction-dentaire.jpg",
    icon: "🗜️"
  }
];

export const TRANSLATIONS: TranslationsMap = {
  FR: {
    home: "Accueil",
    services: "Services",
    contact: "Contact",
    appointment: "Rendez-vous",
    heroTitle: "Votre Sourire est Notre Priorité",
    heroSub: "Soins dentaires d'exception avec le Dr. Chiguer Redouane. Technologie de pointe et confort absolu.",
    bookNow: "Prendre Rendez-vous",
    ourServices: "Nos Services",
    location: "Emplacement",
    phone: "Téléphone",
    followUs: "Suivez-nous",
    name: "Nom complet",
    email: "E-mail",
    date: "Date souhaitée",
    time: "Heure souhaitée",
    message: "Votre message",
    submit: "Envoyer la demande",
    success: "Votre demande a été envoyée avec succès !",
    serviceLabel: "Service souhaité"
  },
  AR: {
    home: "الرئيسية",
    services: "خدماتنا",
    contact: "اتصل بنا",
    appointment: "حجز موعد",
    heroTitle: "ابتسامتك هي أولويتنا",
    heroSub: "رعاية أسنان استثنائية مع الدكتور شقير رضوان. أحدث التقنيات وراحة تامة.",
    bookNow: "احجز موعدك الآن",
    ourServices: "خدماتنا المتميزة",
    location: "الموقع",
    phone: "الهاتف",
    followUs: "تابعونا",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    date: "التاريخ المطلوب",
    time: "الوقت المطلوب",
    message: "رسالتك",
    submit: "إرسال الطلب",
    success: "تم إرسال طلبك بنجاح!",
    serviceLabel: "الخدمة المطلوبة"
  },
  EN: {
    home: "Home",
    services: "Services",
    contact: "Contact",
    appointment: "Appointment",
    heroTitle: "Your Smile is Our Priority",
    heroSub: "Exceptional dental care with Dr. Chiguer Redouane. State-of-the-art technology and absolute comfort.",
    bookNow: "Book Appointment",
    ourServices: "Our Services",
    location: "Location",
    phone: "Phone",
    followUs: "Follow Us",
    name: "Full Name",
    email: "Email",
    date: "Preferred Date",
    time: "Preferred Time",
    message: "Your message",
    submit: "Send Request",
    success: "Your request has been sent successfully!",
    serviceLabel: "Desired Service"
  },
  ES: {
    home: "Inicio",
    services: "Servicios",
    contact: "Contacto",
    appointment: "Cita",
    heroTitle: "Su Sonrisa es Nuestra Prioridad",
    heroSub: "Cuidado dental excepcional con el Dr. Chiguer Redouane. Tecnología de punta y confort absoluto.",
    bookNow: "Reservar Cita",
    ourServices: "Nuestros Servicios",
    location: "Ubicación",
    phone: "Teléfono",
    followUs: "Síguenos",
    name: "Nombre completo",
    email: "Correo electrónico",
    date: "Fecha deseada",
    time: "Hora deseada",
    message: "Tu message",
    submit: "Enviar solicitud",
    success: "¡Su solicitud ha sido enviada con éxito!",
    serviceLabel: "Servicio deseado"
  }
};
