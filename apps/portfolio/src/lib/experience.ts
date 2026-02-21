/*
 * COPYRIGHT (C) 2024 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

const JobTitle = {
  SoftwareDeveloper: "Software Developer",
  JuniorSoftwareDeveloper: "Junior Software Developer",
  WorkingStudent: "Werkstudent",
  Intern: "Praktikant",
  BachelorStudent: "Bachelorand",
  MasterStudent: "Masterand",
} as const;

/** shape of the experience data */
export type IExperience = {
  /** the title of the position */
  title: string;
  /** the company */
  company: string;
  /** the companies url */
  companyUrl: string;
  /** the start date of the experience formatted as YYYY-MM-DD*/
  startDate: string;
  /** the end date of the experience formatted as YYYY-MM-DD or present */
  endDate: string;
  /** the location of the expereince */
  location: string;
  /** description items */
  description: string[];
  /** aquired skills */
  skills: string[];
};

export const experiences: IExperience[] = [
  {
    title: JobTitle.SoftwareDeveloper,
    company: "ipoque GmbH",
    companyUrl: "https://www.ipoque.com/",
    startDate: "2024-12-01",
    endDate: "present",
    location: "Leipzig, Deutschland",
    description: [
      "Entwicklung von UI-Logik  im Core-Team",
      "Implementierung und Wartung von Komponenten für ein internes Designsystem",
      "Implementierung von Features in einer Micro Frontend Architektur",
      "Implementierung von Plugins für IDEs zur Unterstützung einer domänenspezifischen Sprache",
    ],
    skills: ["TypeScript", "Micro Frontends", "Web Components", "Lit", "React", "Angular"],
  },
  {
    title: JobTitle.JuniorSoftwareDeveloper,
    company: "ipoque GmbH",
    companyUrl: "https://www.ipoque.com/",
    startDate: "2024-02-01",
    endDate: "2024-11-31",
    location: "Leipzig, Deutschland",
    description: [
      "Entwicklung von UI-Logik  im Core-Team",
      "Implementierung und Wartung von Komponenten für ein internes Designsystem",
      "Implementierung von Features in einer Micro Frontend Architektur",
      "Implementierung von Plugins für IDEs zur Unterstützung einer domänenspezifischen Sprache",
    ],
    skills: ["TypeScript", "Micro Frontends", "Web Components", "Lit", "React", "Angular"],
  },
  {
    title: JobTitle.WorkingStudent,
    company: "ipoque GmbH",
    companyUrl: "https://www.ipoque.com/",
    startDate: "2021-01-01",
    endDate: "2023-12-31",
    location: "Leipzig, Deutschland",
    description: [
      "Weiterentwicklung der DSL und des dazugehörigen Compilers",
      "Implementierung von Plugins für IDEs zur Unterstützung der DSL",
      "Migration der bestehenden Frontend-Tests auf modernere Technologien (Unit- und E2E-Tests)",
      "Implementierung und Wartung von Komponenten in das interne Designsystem",
      "Implementierung und Wartung eines internen Frontend Frameworks für Micro Frontends",
      "Entwicklung von Features in einer Micro Frontend Architektur",
    ],
    skills: ["TypeScript", "Micro Frontends", "Web Components", "Lit", "React", "Angular"],
  },
  {
    title: JobTitle.MasterStudent,
    company: "ipoque GmbH",
    companyUrl: "https://www.ipoque.com/",
    startDate: "2023-05-15",
    endDate: "2023-11-15",
    location: "Leipzig, Deutschland",
    description: [
      "Konzeption, Implementierung und Evaluation framework-agnostischer Lösungen für das Scoping von Web Components in Micro-Frontends zur Vermeidung von Versionskonflikten",
      "Prototypische Implementierung der Lösungen in einer Micro-Frontend-Architektur und Evaluation der Ergebnisse",
      "Untersuchung einer möglichen Lösung zum Scoping von Web Components in Micro-Frontends mit unterschiedlichen Frameworks",
    ],
    skills: ["TypeScript", "Micro Frontends", "Web Components", "Lit", "React", "Angular", "DOM-Spezifikation"],
  },
  {
    title: JobTitle.BachelorStudent,
    company: "ipoque GmbH",
    companyUrl: "https://www.ipoque.com/",
    startDate: "2021-07-01",
    endDate: "2021-09-31",
    location: "Leipzig, Deutschland",
    description: [
      "Konzeption, Entwurf und Implementierung einer domänenspezifischen Sprache für die Generierung von Komponentenquellcode",
      "Entwurf und Implementierung eines Compilers für die Realisierung der domänenspezifischen Sprache",
      "Generierung von Angular-Komponentenquellcode auf Basis des definierten DSL-Modells",
    ],
    skills: ["TypeScript", "Angular", "Compilerbau", "DSL"],
  },
  {
    title: JobTitle.Intern,
    company: "ipoque GmbH",
    companyUrl: "https://www.ipoque.com/",
    startDate: "2021-01-01",
    endDate: "2021-02-28",
    location: "Leipzig, Deutschland",
    description: [
      "Erstellung generischer Angularkomponenten zur Darstellung von UI-Komponenten in internem Showcase",
      "Automatisiertes Rendern verschiedener Formularelemente aufgrundlage einer benutzerdefinierten Konfiguration",
      "Reaktive Implementierung der Businesslogik mittels RxJS",
    ],
    skills: ["TypeScript", "Angular", "RxJS"],
  },
  {
    title: JobTitle.WorkingStudent,
    company: "GDMcom GmbH",
    companyUrl: "https://gdmcom.de/",
    startDate: "2019-06-01",
    endDate: "2020-12-01",
    location: "Leipzig, Deutschland",
    description: [
      "Werkstudent in der Abteilung Service ITK",
      "Automatisierung von wiederkehrenden Aufgaben im Bereich der Microsoft Office Suite und Dateisystemen",
      "Prototypische Implementierung einer Automatisierung der Standortdatenpflege basierend auf diversen Dateien",
    ],
    skills: ["Shell-Scription", "VBA", "Microsoft Office"],
  },
];
