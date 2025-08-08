import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About", 
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.contact": "Contact",
      "hero.title": "Ahmed Osama",
      "hero.subtitle": "Full Stack Developer & Odoo Specialist",
      "hero.description": "Passionate software engineer with expertise in web development and Odoo customization. I build scalable web applications and implement robust ERP solutions that drive business growth.",
      "hero.viewWork": "View My Work",
      "hero.downloadCV": "Download CV",
      "about.title": "About Me",
      "about.subtitle": "Experienced software engineer specializing in web development and Odoo ERP solutions",
      "projects.title": "Featured Projects",
      "projects.subtitle": "A showcase of my recent work in web development and Odoo customization",
      "projects.all": "All Projects",
      "projects.web": "Web Development", 
      "projects.odoo": "Odoo Development",
      "skills.title": "Technical Skills",
      "skills.subtitle": "Technologies and tools I use to bring ideas to life",
      "contact.title": "Get In Touch",
      "contact.subtitle": "Ready to work together? Let's discuss your next project",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.location": "Location",
      "contact.follow": "Follow Me",
      "contact.firstName": "First Name",
      "contact.lastName": "Last Name",
      "contact.subject": "Subject",
      "contact.message": "Message",
      "contact.send": "Send Message"
    },
    ar: {
      "nav.home": "الرئيسية",
      "nav.about": "نبذة عني",
      "nav.projects": "المشاريع",
      "nav.skills": "المهارات",
      "nav.contact": "التواصل",
      "hero.title": "أحمد أسامة",
      "hero.subtitle": "مطور ويب متكامل ومتخصص أودو",
      "hero.description": "مهندس برمجيات متحمس بخبرة في تطوير الويب وتخصيص أودو. أقوم ببناء تطبيقات ويب قابلة للتوسع وتنفيذ حلول ERP قوية تحفز نمو الأعمال.",
      "hero.viewWork": "شاهد أعمالي",
      "hero.downloadCV": "تحميل السيرة الذاتية",
      "about.title": "نبذة عني",
      "about.subtitle": "مهندس برمجيات ذو خبرة متخصص في تطوير الويب وحلول أودو ERP",
      "projects.title": "المشاريع المميزة",
      "projects.subtitle": "عرض لأحدث أعمالي في تطوير الويب وتخصيص أودو",
      "projects.all": "جميع المشاريع",
      "projects.web": "تطوير الويب",
      "projects.odoo": "تطوير أودو",
      "skills.title": "المهارات التقنية",
      "skills.subtitle": "التقنيات والأدوات التي أستخدمها لتحقيق الأفكار",
      "contact.title": "تواصل معي",
      "contact.subtitle": "مستعد للعمل معًا؟ دعنا نناقش مشروعك القادم",
      "contact.email": "البريد الإلكتروني",
      "contact.phone": "الهاتف",
      "contact.location": "الموقع",
      "contact.follow": "تابعني",
      "contact.firstName": "الاسم الأول",
      "contact.lastName": "اسم العائلة",
      "contact.subject": "الموضوع",
      "contact.message": "الرسالة",
      "contact.send": "إرسال الرسالة"
    }
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
