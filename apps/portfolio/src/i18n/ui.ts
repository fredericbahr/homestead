export type Language = "de" | "en";

export type LanguageProp = {
  lang?: Language;
};

export const languages: Record<Language, string> = {
  de: "Deutsch",
  en: "English",
};

export const defaultLang: Language = "de";

export const showDefaultLang = false;

export const ui: Record<Language, Record<string, string>> = {
  de: {
    "nav.about": "Über mich",
    "nav.experience": "Erfahrung",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",

    "hero.intro": "Hey, ich bin",
    "hero.description":
      "Ich entwickle leidenschaftlich innovative Lösungen zur Optimierung von Arbeitsabläufen und Steigerung der Produktivität der Nutzer durch benutzerfreundliche Webanwendungen.",
    "hero.contact": "Kontakt",

    "about.heading": "Über mich",
    "about.sectionOne":
      "Ich bin Frederic Bahr, ein leidenschaftlicher Softwareentwickler aus Leipzig, Deutschland. Seit meiner ersten Berührung im Jahr 2017 während eines Schulprojektes entdeckte ich meine Leidenschaft für die Webentwicklung. Seither verbessere und vertiefe ich kontinuierlich meine Fähigkeiten und Kenntnisse. Darüberhinaus bietet mir ein akademischer Hintergrund in Medieninformatik ein solides Fundament und untermauert meine Expertise.",
    "about.sectionTwo":
      "Besonders fasziniert bin ich von der Entwicklung hochwertiger User Interfaces, die durch eine intuitive Benutzeroberfläche Prozesse für Nutzer vereinfachen. Meine Begeisterung für dieses Feld treibt mich dazu an, stets neue Technologien und Frameworks zu erforschen und mich weiterzuentwickeln. Dabei lege ich großen Wert auf eine saubere und strukturierte Codebasis, die eine Wartbarkeit und Skalierbarkeit gewährleistet.",
    "about.sectionThree":
      "Neben meiner beruflichen Tätigkeit entwickel ich in meiner Freizeit eine cloudbasierte Anwendung zur Verwaltung von Terminen für kleine Vereine in meiner Heimat.",
    "about.sectionFour":
      "Mit einem klaren Fokus auf Qualität und Benutzerfreundlichkeit strebe ich danach, innovative Lösungen zu entwickeln, die einen echten Mehrwert bieten. Dafür verwende ich meistens:",

    "experience.heading": "Erfahrung",
    "experience.subheading": "Mein bisheriger Werdegang",
    "experience.cv": "Lebenslauf",

    "projects.heading": "Projekte",
    "projects.tab": "Auswahl",
    "projects.tooltip.website": "Webseite",
    "projects.tooltip.github": "GitHub",
    "projects.breadcrumb.home": "Start",
    "projects.detail.time-range": "Zeitraum",
    "projects.detail.focus": "Fokus",
    "projects.detail.goal": "Ziel",
    "projects.detail.implementation": "Umsetzung",
    "projects.detail.technologie": "Technologien",
    "projects.detail.screenshots": "Screenshots",

    "footer.developedBy": " Entwickelt von Frederic Bahr mit ",
    "footer.rights": ". Alle Rechte vorbehalten. ",

    "theme.light": "Helles Design",
    "theme.dark": "Dunkles Design",
    "theme.system": "System",
  },
  en: {
    "nav.about": "About me",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.intro": "Hey, I am",
    "hero.description":
      "I specialize in creating innovative solutions designed to streamline processes, drive digital transformation, and enhance the customer experience.",
    "hero.contact": "Contact me",

    "about.heading": "About me",
    "about.sectionOne":
      "I'm Frederic Bahr, an enthusiastic software developer hailing from Leipzig, Germany. My journey into the world of web development began with a school project back in 2017, igniting a passion that has only grown since. Over time, I've honed and expanded my skills, delving deeper into the intricacies of the field. Moreover, my academic background in media informatics not only lays a strong foundation but also reinforces my expertise in the domain.",
    "about.sectionTwo":
      "I'm particularly fascinated by the development of high-quality user interfaces that streamline processes for users through an intuitive interface. My enthusiasm for this field drives me to constantly explore new technologies and frameworks and to continue evolving. I place great emphasis on maintaining a clean and structured codebase that ensures maintainability and scalability.",
    "about.sectionThree":
      "In addition to my professional work, I develop a cloud-based application in my free time for managing appointments for small local clubs based in my hometown.",
    "about.sectionFour":
      "With a clear focus on quality and user-friendliness, I strive to develop innovative solutions that provide real value. For this, I mainly use:",

    "experience.heading": "Experience",
    "experience.subheading": "My professional journey",
    "experience.cv": "Curriculum Vitae",

    "projects.heading": "Projects",
    "projects.tab": "Featured",
    "projects.tooltip.website": "Website",
    "projects.tooltip.github": "GitHub",
    "projects.breadcrumb.home": "Home",
    "projects.detail.time-range": "Time range",
    "projects.detail.focus": "Focus",
    "projects.detail.goal": "Goals",
    "projects.detail.implementation": "Implementation",
    "projects.detail.technologie": "Technlogies",
    "projects.detail.screenshots": "Screenshots",

    "footer.developedBy": " Developed by Frederic Bahr with ",
    "footer.rights": ". All rights reserved. ",

    "theme.light": "Light theme",
    "theme.dark": "Dark theme",
    "theme.system": "System",
  },
} as const;
