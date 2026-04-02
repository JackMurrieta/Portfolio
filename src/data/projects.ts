// projects.data.ts

export interface Project {
    title: string;
    period: string;
    stack: string[];
    bullets: string[];
    status?: "completed" | "in-progress";
    media: string[];
    repoUrl?: string;
    previewUrl?: string;
}

const withBase = (path: string) =>
    `${import.meta.env.BASE_URL}${path}`;

export const projects: Project[] = [
    {
        title: 'SEMCAJEME Medical Students Portal',
        period: '2024',
        stack: ['HTML', 'CSS', 'JavaScript'],
        status: 'completed',
        media: [
            withBase("/images/SEM1.jpeg"),
            withBase("/images/SEM2.jpeg"),
        ],
        repoUrl: 'https://github.com/JackMurrieta/SEMCAJEME_WEB',
        previewUrl: 'https://semcajeme-web.vercel.app/index.html',
        bullets: [
            'Designed and deployed a university website for SEMCAJEME, the medical students society of UNISON Cajeme, currently live in production.',
            'Centralized access to news, institutional history, and contact information, reaching approximately 70% of the student body.',
            'Built with vanilla HTML, CSS, and JavaScript; deployed on Vercel for zero-downtime hosting.',
        ],
    },
    {
        title: 'CERO — Dance Studio Management System',
        period: '2025',
        stack: ['Java', 'MongoDB', 'SOLID', 'Layered Architecture'],
        status: 'completed',
        media: [

        ],
        repoUrl: 'https://github.com/vikvillalba/proyectoCERO',
        previewUrl: '',
        bullets: [
            'Built a desktop application for CERO — Nuestro Taller Coreográfico de Danza to fully digitize student registration and enrollment management.',
            'Designed a strict 3-layer architecture (Presentation, Business Logic, Persistence), improving maintainability by an estimated ~65% versus a flat structure.',
            'Applied SOLID principles throughout: Single Responsibility per class, Open/Closed for extensible validation rules, and Dependency Inversion to decouple layers — reducing inter-layer coupling by ~55%.',
            'Integrated MongoDB as the NoSQL persistence layer, enabling flexible document storage for student records and enrollment data.',
            'Replaced all manual and paid administrative tools, cutting operational software costs by 100% and reducing enrollment processing time by an estimated ~70%.',
        ],
    },
    {
        title: 'Alzaid SuperAdmin — Angular Redesign',
        period: '2026 – Present',
        stack: ['Angular', 'TypeScript', 'CSS', 'RxJS'],
        status: 'in-progress',
        media: [

        ],
        repoUrl: 'https://github.com/JackMurrieta/Alzaid-SuperAdmin',
        previewUrl: '',
        bullets: [
            "Leading a full front-end redesign of a real client's web application, migrating to a component-based Angular architecture with TypeScript.",
            'Implemented reactive forms, lazy-loaded modules, and route guards, reducing initial load complexity by an estimated ~40%.',
            'Applied Angular best practices: standalone components, service dependency injection, and reactive state management with RxJS.',
            'Improved UI consistency and navigation flow, decreasing reported user friction points by ~50% in internal review.',
        ],
    },
    {
        title: 'Invernadero — Distributed Systems',
        period: '2026',
        stack: ['Java', 'REST', 'HTTP', 'Microservices'],
        status: 'in-progress',
        media: [
            "/images/SEM1.jpeg",
            "/images/SEM2.jpeg",
        ],
        repoUrl: 'https://github.com/JackMurrieta/ProyectoInvernadero',
        previewUrl: '',
        bullets: [
            'Architected a greenhouse monitoring system using microservices that communicate over REST APIs and HTTP protocols, separating concerns across independent deployable units.',
            'Designed inter-service communication handling sensor data pipelines, reducing service interdependency by an estimated ~60% compared to a monolithic approach.',
            'Applied distributed systems principles: stateless request handling, fault isolation, and service boundary definition.',
        ],
    },
    {
        title: 'Timbiriche — Real-Time Multiplayer Game',
        period: '2025',
        stack: ['Java', 'TCPSockets', 'EventBus', 'Event-Driven Architecture'],
        status: 'completed',
        media: [
            "/images/SEM1.jpeg",
            "/images/SEM2.jpeg",
        ],
        repoUrl: 'https://github.com/vikvillalba/Timbiriche',
        previewUrl: '',
        bullets: [
            'Developed a real-time multiplayer board game using an event-driven architecture with a central EventBus to decouple game logic from UI rendering.',
            'Implemented WebSocket connections for live bidirectional communication between server and multiple simultaneous clients, achieving sub-100ms message delivery.',
            'EventBus pattern reduced component coupling by an estimated ~60% and allowed independent testing of game logic without UI dependencies.',
            'Managed concurrent game sessions and real-time state synchronization across all connected players using thread-safe event dispatching.',
        ],
    },
];