import type { Project } from "../types";

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const projects: Project[] = [
  {
    title: "Alzaid SuperAdmin — Angular Redesign",
    period: "2026 – Present",
    stack: ["Angular", "TypeScript", "CSS", "RxJS"],
    status: "in-progress",
    category: "Frontend",
    featured: true,
    media: [withBase("images/Alzaid/login.png"), withBase("images/Alzaid/Index.png")],
    repoUrl: "https://github.com/JackMurrieta/Alzaid-SuperAdmin",
    bullets: [
      "Leading a full front-end redesign of a real client's web application, migrating to a component-based Angular architecture with TypeScript.",
      "Implemented reactive forms, lazy-loaded modules, and route guards; applied standalone components, service DI, and RxJS state management.",
    ],
    position: 1,
  },
  {
    title: "Invernadero — Distributed Systems",
    period: "2026",
    stack: ["Quarkus", "RabbitMQ", "Docker", "gRPC", "Vue.js", "Microservices"],
    status: "completed",
    category: "Full Stack",
    featured: true,
    media: [],
    repoUrl: "https://github.com/juanpabloheras/Proyecto_invernadero_distribuidos",
    bullets: [
      "Designed and implemented a distributed microservices system with event-driven architecture (AMQP/RabbitMQ) for real-time sensor ingestion, alarm evaluation, and data storage.",
      "Integrated gRPC for low-latency inter-service communication, SSE for browser notifications, and NGINX load balancing across Docker containers.",
    ],
    position: 2,
  },
  {
    title: "Timbiriche — Real-Time Multiplayer Game",
    period: "2025",
    stack: ["Java", "TCP Sockets", "EventBus", "Event-Driven Architecture"],
    status: "completed",
    category: "Systems",
    featured: true,
    media: [withBase("images/Timbiriche/tablero.png"),withBase("images/Timbiriche/Menu.png"), withBase("images/Timbiriche/salaEspera.png")],
    repoUrl: "https://github.com/vikvillalba/Timbiriche",
    bullets: [
      "Developed a real-time multiplayer board game using an event-driven architecture with a central EventBus to decouple game logic from UI rendering.",
      "Implemented TCP socket connections for live bidirectional communication between server and multiple simultaneous clients.",
    ],
    position: 3,
  },
  {
    title: "SEMCAJEME Medical Students Portal",
    period: "2024",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "completed",
    category: "Frontend",
    featured: false,
    media: [withBase("images/SEM1.jpeg"), withBase("images/SEM2.jpeg")],
    repoUrl: "https://github.com/JackMurrieta/SEMCAJEME_WEB",
    previewUrl: "https://semcajeme-web.vercel.app/index.html",
    bullets: [
      "Designed and deployed a university website for SEMCAJEME, the medical students society of UNISON Cajeme, currently live in production.",
      "Centralized access to news, institutional history, and contact information; deployed on Vercel.",
    ],
    position: 4,
  },
  {
    title: "CERO — Dance Studio Management System",
    period: "2025",
    stack: ["Java", "MongoDB", "SOLID", "Layered Architecture"],
    status: "completed",
    category: "Backend",
    featured: false,
    media: [withBase("images/CEROMenu.png")
    ],
    repoUrl: "https://github.com/vikvillalba/proyectoCERO",
    bullets: [
      "Built a desktop application for a dance studio to fully digitize student registration and enrollment management.",
      "Designed a strict 3-layer architecture applying SOLID principles and MongoDB for flexible document storage.",
    ],
    position: 5,
  },
];
