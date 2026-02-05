
export type Language = 'FR' | 'AR' | 'EN' | 'ES';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Translation {
  home: string;
  services: string;
  contact: string;
  appointment: string;
  heroTitle: string;
  heroSub: string;
  bookNow: string;
  ourServices: string;
  location: string;
  phone: string;
  followUs: string;
  name: string;
  email: string;
  date: string;
  time: string;
  message: string;
  submit: string;
  success: string;
  serviceLabel: string;
}

export type TranslationsMap = Record<Language, Translation>;
