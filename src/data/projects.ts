export interface ArchitectureLayer {
  label: string;
  detail: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  company?: string;
  role: string;
  period: string;
  summary: string;
  website?: string;
  tech: string[];
  impact: string[];
  story: string[];
  challenge: string;
  solution: string[];
  architecture: ArchitectureLayer[];
  lessons: string;
}

export const projects: Project[] = [
  {
    slug: "alat-for-business",
    title: "ALAT for Business",
    subtitle: "Building and scaling a digital business banking platform",
    category: "Digital Business Banking",
    company: "Wema Bank",
    role: "Senior Software Engineer / Technical Lead",
    period: "2021 – 2026",
    summary:
      "I played a significant engineering role in evolving the backend from an initial user module into a broader business banking platform — APIs, microservices, integrations and production engineering at serious scale.",
    website: "https://business.alat.ng/",
    tech: [
      "C#",
      "WCF",
      ".NET Framework",
      ".NET Core",
      "REST",
      "SOAP",
      "Azure Service Bus",
      "Azure API Management",
      "Azure Functions",
      "RabbitMQ",
      "Kubernetes",
      "Jenkins",
      "Azure DevOps",
      "xUnit",
      "NUnit",
      "Moq",
    ],
    impact: [
      "Platform supporting 10,000+ businesses",
      "50+ APIs across enterprise and fintech platforms",
      "Hundreds of millions of transactions handled monthly at platform scale",
      "CI/CD pipelines replacing manual release processes",
    ],
    story: [
      "When I joined the ALAT for Business effort at Wema Bank, the backend was largely organised around the user module. Business banking needed far more: accounts, payments, approvals, integrations with core banking, and the ability to absorb new capabilities without destabilising what was already live.",
      "Over my time on the platform I contributed to its evolution into a full-fledged business banking platform — building and evolving APIs, participating in the migration towards microservices, integrating with financial systems, and helping establish the CI/CD and production engineering practices the team relied on.",
      "This was production banking software. Every change had to respect correctness, auditability and reversibility — a payment must settle once, and a rollout must be safe to ship.",
    ],
    challenge:
      "Growing an initial user-module backend into a multi-service business banking platform without interrupting a live financial product — while raising the engineering bar around testing, deployment and reliability.",
    solution: [
      "Backend and API development across the business banking domain, from REST services to SOAP/WCF integrations with banking systems",
      "Service separation and participation in the migration towards a microservices architecture",
      "Event-driven integration through Azure Service Bus and RabbitMQ",
      "Deployment automation with Azure DevOps, Jenkins and Kubernetes",
      "Automated testing with xUnit, NUnit and Moq as part of the delivery process",
    ],
    architecture: [
      { label: "Business Customers", detail: "Web and mobile business banking clients" },
      { label: "API Management", detail: "Azure API Management — gateway, policies, versioning" },
      { label: "Microservices & Azure Functions", detail: "Business banking services and serverless processing" },
      { label: "Messaging", detail: "Azure Service Bus / RabbitMQ — asynchronous, event-driven flows" },
      { label: "Banking & Financial Systems", detail: "Core banking integrations and financial services" },
    ],
    lessons:
      "Large platforms evolve in stages. The discipline that made the growth safe was treating every step — new service, new API, new pipeline — as something that had to prove itself in production, with tests and observability, before it carried real traffic.",
  },
  {
    slug: "coophub",
    title: "CoopHub",
    subtitle: "A digital cooperative management and financial platform",
    category: "FinTech Platform",
    company: "Wema Bank",
    role: "Lead Engineer",
    period: "2024 – 2026",
    summary:
      "I joined CoopHub in 2024 as the application was inherited before going live, and my role evolved into Lead Engineer — coordinating delivery, reviewing backend work and mentoring a five-person engineering team.",
    website: "https://coophub.alat.ng/",
    tech: ["C#", ".NET", "REST APIs", "SQL Server", "Azure DevOps", "Scrum"],
    impact: [
      "Led engineering delivery within a five-person team, with three direct reports",
      "Platform capabilities across members, contributions, loans, analytics and transactions",
      "Technical coordination and backend PR reviews across the team",
    ],
    story: [
      "CoopHub came to my team as an inherited application that had not yet gone live. As my role evolved into Lead Engineer, I was responsible for backend development, backend pull-request reviews, technical coordination and Scrum coordination — alongside mentoring junior developers.",
      "The platform serves cooperatives: member management, contributions, loans, analytics, communication and financial transactions. Working closely with the Product Manager, I translated product discussions into engineering tasks and improvement recommendations.",
      "The inherited setup carried real constraints — older standalone server infrastructure, manual CI/CD and architectural limitations. I recommended a migration towards a more modern platform approach as the product matured.",
    ],
    challenge:
      "Taking an inherited, not-yet-live application with legacy infrastructure and manual deployment practices, and shaping it into a production cooperative finance platform — while leading and growing the engineers responsible for it.",
    solution: [
      "Hands-on backend development across the cooperative finance domain",
      "Structured PR reviews and engineering standards to raise code quality",
      "Scrum coordination with direct collaboration between product and engineering",
      "Mentoring three direct reports within the five-person engineering team",
      "A recommended modernisation path away from standalone servers and manual CI/CD",
    ],
    architecture: [
      { label: "Cooperative Clients", detail: "Web clients for cooperative administrators and members" },
      { label: "API Layer", detail: "REST services for members, contributions, loans and communication" },
      { label: "Backend Services", detail: "C#/.NET services with review-gated delivery" },
      { label: "Data & Reporting", detail: "SQL Server with analytics over contributions and loans" },
      { label: "Financial Transactions", detail: "Transaction flows into banking systems" },
    ],
    lessons:
      "Leading an inherited codebase is as much about people and process as architecture. Establishing review culture, clear task breakdown and mentoring did more for delivery velocity than any single technical decision.",
  },
  {
    slug: "quickteller-for-business",
    title: "Quickteller for Business",
    subtitle: "Early-stage platform engineering on a business payments product",
    category: "Payments",
    company: "Interswitch",
    role: "Software Engineer / Founding Developer",
    period: "July 2019 – February 2021",
    summary:
      "As a founding developer on Quickteller for Business at Interswitch, I built backend microservices for a business payments platform in its early stages, working with .NET Core 2.1/2.2.",
    website: "https://business.quickteller.com",
    tech: ["C#", ".NET Core 2.1/2.2", "Microservices", "REST APIs", "SQL Server", "Git"],
    impact: [
      "Founding-stage backend engineering on a business payments platform",
      "Microservices development approach from the platform's early days",
      "Payment and business technology built for a major African switch",
    ],
    story: [
      "Quickteller for Business gave me the experience of building a platform at its beginning. As one of the founding developers at Interswitch, I worked on the backend microservices that the product was built around.",
      "The stack was .NET Core 2.1/2.2 at a time when that was a deliberate modern choice, structured as microservices rather than a monolith — an approach that shaped how I think about service boundaries to this day.",
      "Working inside Interswitch meant building payment-adjacent software where availability and correctness expectations are set by the volume of the wider switch, not by the size of the new product.",
    ],
    challenge:
      "Standing up early-stage microservices for a business payments product within an organisation whose standards are shaped by national-scale payment infrastructure.",
    solution: [
      "Backend microservices development in C#/.NET Core",
      "REST API design for business payment operations",
      "Early-stage platform engineering: service structure, integrations, deployment",
      "Collaboration across the wider Interswitch platform teams",
    ],
    architecture: [
      { label: "Business Clients", detail: "Merchant and business web clients" },
      { label: "REST APIs", detail: "Business payment operations and integrations" },
      { label: "Microservices", detail: ".NET Core services decomposed by business capability" },
      { label: "Payment Infrastructure", detail: "Interswitch switch and settlement systems" },
    ],
    lessons:
      "Early-stage platforms reward restraint. Keeping services small, boundaries honest and dependencies few made it far easier for the team to grow the product after I moved on.",
  },
  {
    slug: "nexquiz",
    title: "NexQuiz",
    subtitle: "Identity, distributed workflows and an assessment platform",
    category: "Assessment Platform",
    company: "NexTekk",
    role: "Software Engineer",
    period: "Earlier career",
    summary:
      "An assessment platform combining identity management, distributed workflows and analytics — built with .NET Core, Angular, Identity Server and MongoDB.",
    tech: [".NET Core", "Angular", "Identity Server", "MongoDB", "Saga/event management", "Analytics"],
    impact: [
      "Identity management across the platform via Identity Server",
      "Distributed quiz and event workflows with saga/event management",
      "Question input and scanning pipelines feeding the assessment flow",
    ],
    story: [
      "NexQuiz is an assessment platform, and its interesting engineering problems sat at the seams: authenticating users across clients, coordinating distributed quiz and event workflows, and turning question input — including scanned material — into structured, analysable data.",
      "I worked across the .NET Core backend, the Angular frontend and the identity layer built on Identity Server, with MongoDB as the data store and saga/event management coordinating the distributed flows.",
    ],
    challenge:
      "Coordinating distributed assessment workflows — identity, question intake, events and analytics — across a polyglot stack without letting state drift between services.",
    solution: [
      "Centralised authentication and authorisation with Identity Server",
      "Saga/event management for distributed quiz and event workflows",
      "Question input and scanning pipelines producing structured assessment data",
      "Analytics over participation and outcomes",
    ],
    architecture: [
      { label: "Web Clients", detail: "Angular frontend for participants and administrators" },
      { label: "Identity", detail: "Identity Server for authentication and tokens" },
      { label: "Backend Services", detail: ".NET Core services with saga/event coordination" },
      { label: "Data", detail: "MongoDB stores with analytics pipelines" },
    ],
    lessons:
      "Distributed workflows are only as reliable as their coordination story. Modelling the flows explicitly — rather than as implicit service calls — was what kept the platform explainable when something went wrong.",
  },
  {
    slug: "power-hmo",
    title: "Power HMO",
    subtitle: "Enterprise software for health insurance operations",
    category: "Enterprise Software",
    role: "Backend Engineer",
    period: "Earlier career",
    summary:
      "A platform used by almost a dozen Nigerian HMO clients, handling health insurance operations — backend development, client integrations and production support.",
    tech: ["C#", ".NET", "REST APIs", "SQL Server", "Client integrations"],
    impact: [
      "Production software used by almost a dozen Nigerian HMO clients",
      "Backend development across core insurance operations",
      "Integrations tailored to individual client environments",
    ],
    story: [
      "Power HMO is enterprise software for health management organisations. The platform supported the operational core of HMO clients — enrolment, plans, claims and the reporting those businesses run on.",
      "My work was on the backend: building and maintaining the services the platform ran on, and the integrations that connected it to client environments. Each client deployment reinforced the same lesson — enterprise software lives or dies on how well it handles the messy specifics of the business it serves.",
    ],
    challenge:
      "Serving almost a dozen HMO clients from one platform, where each client brought its own processes, data quirks and integration requirements.",
    solution: [
      "Backend services covering the core insurance operations",
      "Client-specific integrations without forking the product",
      "Production support and iterative improvement based on real usage",
    ],
    architecture: [
      { label: "HMO Clients", detail: "Operational users at health management organisations" },
      { label: "Application Services", detail: ".NET services for enrolment, plans and claims" },
      { label: "Integrations", detail: "Client-specific data exchange and reporting" },
      { label: "Database", detail: "SQL Server backing operational workloads" },
    ],
    lessons:
      "Multi-client enterprise software teaches you to design for variation. The integrations mattered as much as the core product — and the clients who were happiest were the ones whose messy realities we had modelled, not simplified away.",
  },
  {
    slug: "ajovault",
    title: "AjoVault",
    subtitle: "Digitising community finance for informal savings groups",
    category: "Community Finance",
    company: "Safe Transact Ltd",
    role: "Technical Lead",
    period: "February 2026 – Present",
    summary:
      "My current product build: a community finance platform digitising informal group savings — Ajo, Esusu, Adashe and cooperative savings — for Nigeria and eventually West Africa.",
    website: "https://www.ajovault.ng/",
    tech: ["C# / .NET", "React", "Microservices-oriented architecture", "SQL Server / Azure", "Paystack", "JWT", "xUnit", "Render / Vercel / Azure"],
    impact: [
      "MVP completed and being tested with pilot groups",
      "10 Ajo groups and 100+ members in the current pilot",
      "Members, groups, contributions, wallets, payments and records in one flow",
    ],
    story: [
      "Informal savings groups run on trust, WhatsApp threads, handwritten records and cash — and they work, mostly, until someone loses the notebook. AjoVault digitises how these groups operate: members, groups, contributions, wallets and payments, records and reporting in a single flow.",
      "I am building this through Safe Transact Ltd, where I serve as Technical Lead. The MVP is complete and currently being tested with pilot groups — 10 Ajo groups and over 100 members. That is a pilot, not nationwide adoption, and the product decisions reflect that: earn trust group by group.",
      "The long-term vision is financial infrastructure for underserved communities — and eventually, data-driven financial access built on a foundation of reliable savings records.",
    ],
    challenge:
      "Turning an informal, trust-based, largely offline practice into a digital product that group organisers and members actually adopt — without demanding they change how their groups work.",
    solution: [
      "A product flow that mirrors how groups already work: Members → Group → Contributions → Wallet/Payments → Records → Reporting",
      "Payments via Paystack, with room for additional providers where applicable",
      "Microservices-oriented C#/.NET backend with JWT authentication and xUnit testing",
      "Deployment across Render, Vercel and Azure infrastructure as appropriate",
    ],
    architecture: [
      { label: "Members & Groups", detail: "React frontend for organisers and group members" },
      { label: "API Services", detail: "C#/.NET backend, microservices-oriented, JWT-secured" },
      { label: "Payments", detail: "Paystack integration for contributions and wallets" },
      { label: "Data & Records", detail: "SQL Server / Azure database infrastructure" },
    ],
    lessons:
      "Building for informal finance means the product must earn trust before it asks for behaviour change. The pilot groups shaped the roadmap more than any feature list I could have written in advance.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
