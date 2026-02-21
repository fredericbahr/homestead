/*
 * COPYRIGHT (C) 2026 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

export type ProjectBackgroundType = "none" | "lines" | "contour";

export type ProjectLinks = {
  github?: string;
  website?: string;
};

export type Project = {
  title: string;
  description?: string;
  url: string;
  focus: string;
  period: string;
  goal: string;
  realization: string;
  technologies: string[];
  backgroundType?: ProjectBackgroundType;
  links?: ProjectLinks;
};

/**
 * Project data to be displayed in the projects section
 * Null indicates a placeholder for the layout
 * Title are the keys for the translation
 */
export const projects: (Project | null)[] = [
  {
    title: "QR-Sight",
    description:
      "Erstelle digitale Infotafeln für Sehenswürdigkeiten und verbreite diese per QR-Code.",
    url: "/qr-sight",
    backgroundType: "contour",
    period: "Jul. 22 - Heute",
    goal: "Die QR-Sight-Anwendung wurde entwickelt, um Sehenswürdigkeiten, Denkmäler und besondere Orte in Gemeinden digital erlebbar zu machen. Ziel war es, eine Plattform zu schaffen, mit der unkompliziert digitale Infotafeln erstellt werden können. Besucher können über QR-Codes auf individuelle Landingpages zugreifen, die weiterführende Informationen, Bilder und Dokumente zu einem Ort bereitstellen. Die Anwendung soll Gemeinden dabei unterstützen, kulturelle und historische Inhalte modern, informativ und leicht zugänglich zu präsentieren.",
    realization:
      "Die QR-Sight-Anwendung wurde mit React und Mantine für das Frontend sowie Node.js und Express für das Backend entwickelt. Zur Authentifizierung und Autorisierung der Nutzer kommt Better-Auth zum Einsatz. Die Datenhaltung erfolgt in einer MongoDB-Datenbank, deren Zugriff über Prisma ORM abstrahiert wird. Die Plattform ist in zwei Bereiche unterteilt: das Studio zur Erstellung und Verwaltung von digitalen Infotafeln sowie den Viewer zur öffentlichen Anzeige der Inhalte. Der Viewer wurde mit Astro umgesetzt, um besonders schnelle Ladezeiten und eine optimale Nutzererfahrung auf mobilen Geräten zu gewährleisten. Zur Analyse des Nutzerverhaltens und zur Optimierung der Anwendung wird PostHog integriert.",
    focus: "Webentwicklung",
    technologies: [
      "TypeScript",
      "React",
      "Astro",
      "Mantine",
      "Tailwind CSS",
      "Express",
      "Prisma",
      "MongoDB",
    ],
    links: {
      website: "https://qr-sight.de",
    },
  },
  {
    title: "Kirmize",
    description:
      "Die mobile Webanwendung für die Kirmes zur Planung von Terminen.",
    url: "/kirmize",
    backgroundType: "lines",
    period: "Apr. 22 - Heute",
    realization:
      "Die Kirmize-App wurde mit React und ChakraUI entwickelt. Die Anwendung wurde als Progressive Web App (PWA) konzipiert, um eine optimale Performance und Benutzererfahrung auf verschiedenen Geräten zu gewährleisten. Die Implementierung erfolgte in enger Zusammenarbeit mit einem lokalen Vereinen, um die Anforderungen und Wünsche der Nutzer zu berücksichtigen. Zur Datenhaltung wird eine MongoDB-Datenbank verwendet, dessen Zugriff mittels Prisma ORM abstrahiert wird. Die Business-Logik der Anwedung wird in einem Express-Backend realisiert, welches die Kommunikation mit der Datenbank und die Bereitstellung der Daten für die Frontend-Anwendung übernimmt. Die Authentifizierung und Autorisierung der Nutzer erfolgt über JSON Web Tokens (JWT).",
    goal: "Die Kirmize-App wurde entwickelt, um die Organisation und Planung von Terminen von lokalen Vereinen zu erleichtern. Das Ziel war es, eine benutzerfreundliche und intuitive Anwendung zu schaffen, die es den Nutzern ermöglicht, sich über die verschiedenen Veranstaltungen zu informieren und ihre Teilnahme an den Terminen zu planen. Die App sollte eine klare Struktur und ein ansprechendes Design aufweisen, um die Nutzererfahrung zu verbessern und die Interaktion mit der Anwendung zu erleichtern. Darüber hinaus sollte die Anwendung es ermöglichen Fotos und Videos von den Veranstaltungen hochzuladen und zu teilen. Zusätzlich sollen Umfragen und Abstimmungen duchgeführt werden können, um die Meinung der Nutzer zu verschiedenen Themen zu erfassen.",
    focus: "Webentwicklung",
    technologies: [
      "TypeScript",
      "React",
      "ChakraUI",
      "Express",
      "Prisma",
      "MongoDB",
    ],
    links: {
      website: "https://kirmize.de",
    },
  },
  {
    title: "Portfolio",
    description: "Implementierung meiner persönlichen Portfolio-Webseite.",
    url: "/personal-portfolio",
    backgroundType: "none",
    period: "Mar. 24 - Heute",
    goal: "Das Ziel der Entwicklug meines eigenen Portfolios war es, meine bisherigen Projekte und Erfahrungen hervorzuheben, um so meine Fähigkeiten und Kenntnisse zu präsentieren. Zusätzlich diente es als Übung, um meine Fähigkeiten in Bereichen wie Design und Animation zu verbessern. Schließlich erhöht ein Portfolio die Online-Präsenz und erleichtert die Kontaktaufnahme mit potenziellen Arbeitgebern oder Kunden.",
    realization:
      "Zunächst habe ich recherchiert, welche Merkmale in gutes Portfolio erfüllt und dazu Inspirationen gesammelt. Anschließend habe ich die Struktur meiner Webseite geplant und ein Konzept erstellt. Anschließend wurde das Portfolio mit React, ChakraUI und Framer Motion umgesetzt. Das Deployment erfolgt über GitHub Pages.",
    focus: "Webentwicklung",
    technologies: ["TypeScript", "Astro", "Tailwind CSS"],
    links: {
      github: "https://github.com/fredericbahr/portfolio",
    },
  },
  {
    title: "QUAtsCh Chatbot ´22",
    description:
      "Ein Projekt zur Entwicklung eines Chatbots für die Landesanstalt für Umwelt Baden-Württemberg.",
    url: "/quatsch-chatbot-2022",
    backgroundType: "contour",
    period: "Jan. 23 - Mar. 23",
    goal: "Die Landesanstalt für Umwelt Baden-Württemberg erfasst in einem Netz aus Messstationen Umweltdaten. Aus diesen Daten können Beobachtungen abgeleitet werden, um Aussagen über den Zustand der Ökosysteme zu treffen. Der öffentliche Zugang ermöglicht sowohl Forscher:innen als auch Privatpersonen eine Exploration der beobachteten Biotope. Die Menge und Komplexität der erfassten Daten erfordert neben einem vereinfachten Zugang für die diversen Benutzergruppen auch eine nachvollziehbare Aufbereitung der Informationen. Das Ziel dieses Projekts war es, die Umweltdaten über ein Frage-Antwort-System zugänglich zu machen und die korrekte Eingabe mithilfe von Chatbot-Funktionen zu stützen. Wesentlich hierbei war die Erzeugung eines Kontexts, in welchem eine Frage gestellt werden kann, sodass sie den Anforderungen der Datenquellen entspricht. Des Weiteren war eine Präzisierung der Frage, die Verarbeitung der Datensätze und dessen Darstellung relevant, um die Zugänglichkeit für den jeweiligen Benutzer zu gewährleisten.",
    realization: `Um die Projektziele zu erfüllen, wurde eine webbasierte Anwendung entwickelt, welche die jeweiligen Anforderungen bedienen kann. Zur Bearbeitung der Chatbot-Funktionalität wurde der Rasa-Technologie-Stack* benutzt, welcher sowohl die Eingabe in einer webbasierten Oberflächen, die Zuweisung von natürlichsprachigen Anfragen zu Computer-Befehlen als auch die Ausführung der Befehle möglich macht. Das Frage-Antwort-System wurde mithilfe des Qanary-Technologie-Stack** umgesetzt. Diese Technologie ermöglicht es, einzelne Wissensfragmente aus der an das System gestellten Frage zu extrahieren und den Kontext der Frage herzustellen, sodass die Datenquellen abgefragt werden können. Die Präzisierung der Frage, die Verarbeitung und Darstellung der Datensätze konnte ebenfalls über diesen Mechanismus integriert werden.

* Der Rasa-Technologie-Stack besteht aus Rasa-Chat, Rasa Open Source und Rasa Action Server: Rasa

** Der Qanary-Technologie-Stack besteht aus einer Referenzimplementierung zur Erstellung von Fragebeantwortunssystemen nach der Qanary-Methodik: Qanary`,
    focus: "Question Answering Systeme",
    technologies: ["TypeScript", "Qanary", "Rada", "RDF", "Docker"],
    links: {
      github: "https://github.com/fredericbahr/quatsch-project-22",
    },
  },
  {
    title: "Multimedia Datenbank Tierarztpraxis",
    description:
      "Eine Implementierung einer Software zur Verwendung einer Multimedia Datenbank in einer Tierartztpraxis.",
    url: "/multimedia-database-veterinary-practice",
    backgroundType: "none",
    period: "Mai. 22 - Jul. 22",
    goal: "Das Ziel dieses Universitätsprojekts war es, die Verwendung einer Multimediadatenbank, insbesondere PostgreSQL, in einem nahezu realen Kontext zu präsentieren und zu erlernen. Letztendlich sollte eine erweiterte Suchfunktionalität basierend auf einem der vielfältigen Medientypen implementiert werden. Das Projekt wurde von einem Team aus zwei Studenten durchgeführt und von einem Professor betreut. Es war Teil des Kurses Multimediadatenbanksysteme und wurde in etwa 6 Wochen umgesetzt.",
    realization:
      "Um das definierte Ziel zu erreichen, wurde ein auf die Bedürfnisse von Tierarztpraxen zugeschnittenes System entwickelt, das die Speicherung von Kunden-, Tier- und Medikamentendaten ermöglicht. Die Implementierung verschiedene Suchtechniken bezieht sich auf eine erweiterte Filterung von Medikamentendaten, eine datenbankbasierte Volltextsuche und das Finden von Tieren auf Basis von Bildvergleichen. Die Einführung dieser Suchtechniken soll die Benutzerfreundlichkeit und Funktionalität des Systems im veterinärmedizinischen Bereich verbessern. In diesem Projekt lernten wir erste praktische Erfahrungen in der Datenbankgestaltung und -implementierung sowie der Nutzung von Multimediadaten in spezialisierten Anwendungen sammeln.",
    focus: "Multimedia Datenbanken, Fortgeschrittene Suchalgorithmen",
    technologies: [
      "TypeScript",
      "React",
      "Chakra UI",
      "Express",
      "Prisma",
      " Postgres",
    ],
    links: {
      github: "https://github.com/fredericbahr/mmdba_tierarztpraxis",
    },
  },
  {
    title: "EA Flow Shop Optimierung",
    description:
      "Ein evolutionärer Algorithmus (GA) zur Optimierung von Flow-Shop Problemen.",
    url: "/ea-flow-shop-optimizer",
    backgroundType: "contour",
    period: "Jun. 22 - Jul. 22",
    goal: "Das Fließbandproblem ist eine klassische Optimierungsherausforderung in Operations Research und Fertigung, bei der eine Reihe von Aufgaben über eine Folge von Maschinen geplant werden müssen, wobei die Gesamtfertigstellungszeit minimiert wird. In diesem Universitätsprojekt bin ich dieses Problem angegangen, indem ich evolutionäre Algorithmen, voranging den Hillclimber und den genetischen Algorithmus, eingesetzt habe, um ihre Wirksamkeit bei der Suche nach optimalen Lösungen zu untersuchen. Das Projekt hatte zusätzlich zum Ziel, ein Rahmen für das Testen verschiedener Methoden evolutionärer Algorithmen zu spannen.",
    realization: "Das Fließbandproblem ist eine klassische Optimierungsherausforderung in Operations Research und Fertigung, bei der eine Reihe von Aufgaben über eine Folge von Maschinen geplant werden müssen, wobei die Gesamtfertigstellungszeit minimiert wird. In diesem Universitätsprojekt bin ich dieses Problem angegangen, indem ich evolutionäre Algorithmen, voranging den Hillclimber und den genetischen Algorithmus, eingesetzt habe, um ihre Wirksamkeit bei der Suche nach optimalen Lösungen zu untersuchen. Das Projekt hatte zusätzlich zum Ziel, ein Rahmen für das Testen verschiedener Methoden evolutionärer Algorithmen zu spannen.",
    focus: "Optimierung, Evolutionäre Algorithmen",
    technologies: ["TypeScript"],
    links: {
      github: "https://github.com/fredericbahr/ea-flow-shop",
      website: "https://stackblitz.com/edit/node-fvbjbs",
    },
  },
  {
    title: "XML Wetterdaten Visualisierung",
    description: "Projekt zur Visualisierung von Wetterdaten aus einer XML-Datei.",
    url: "/xml-weather-visualization",
    backgroundType: "lines",
    period: "-",
    goal: "Das Hauptziel dieses Universitätsprojekts bestand darin, ein visuelles Verarbeitungssystem für Wetterdaten zu entwickeln, die aus XML-Dateien stammen. Dabei sollten Techniken von Dokumentenbeschreibungssprachen wie XML-Schema-Definition und XSL-Transformation verwendet werden.",
    realization: "Das definierte Ziel wurde erreicht, indem ein XML-Schema mit XML-Schema-Definition etabliert wurde, um die Daten effektiv zu strukturieren. Anschließend habe ich die XML-Daten mithilfe eigener XSL-Transformationen transformiert, um eine HTML-Struktur zur Darstellung der Daten zu generieren. Unter Nutzung von D3.js, einer leistungsfähigen JavaScript-Bibliothek für Datenvisualisierung, habe ich eine interaktive Website erstellt, um die verarbeiteten Wetterdaten anzuzeigen. Dieses Projekt demonstrierte nicht nur die Integration von XML-Technologien zur Datenstrukturierung und Transformation, sondern zeigte auch die Fähigkeiten von D3.js bei der Erstellung dynamischer und informativer Visualisierungen im Web.",
    focus: "Data Visualization",
    technologies: ["XMl", "XML Schema Definition", "XLS Transformation", "D3.js"],
    links: {
      github: "https://github.com/fredericbahr/dbs_weatherdata",
    },
  },
  null,
];
