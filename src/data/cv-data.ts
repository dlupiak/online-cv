import { CVData } from "@/types/cv";

export const cvData: CVData = {
  profile: {
    name: "Dmytro Lupyak",
    title: "Senior Software Engineer",
    github: "https://github.com/dlupiak",
    summary:
      "Seasoned Software Engineer with 10 years of experience in full-stack application development specializing in .NET, cloud architecture, and AI-powered solutions. Proven track record of leading feature development end-to-end across backend, frontend, and DevOps, with recent focus on Generative AI integrations and innovative prototype building. Adaptive and driven by exploring cutting-edge technologies to deliver measurable business impact.",
  },

  skills: [
    {
      category: "Backend",
      skills: [
        "C#",
        ".NET 8",
        "ASP.NET Core",
        "Entity Framework Core",
        "SignalR",
        "Node.js",
      ],
    },
    {
      category: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "TanStack",
        "Tailwind CSS",
        "Shadcn UI",
        "jQuery",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
    },
    {
      category: "AI & GenAI",
      skills: [
        "Generative AI integrations",
        "A2A Protocol",
        "Claude Code SDLC workflow",
        "Prompt Engineering",
        "AI-assisted development",
      ],
    },
    {
      category: "Databases & Search",
      skills: [
        "PostgreSQL",
        "Supabase",
        "MS SQL",
        "SQLite",
        "LiteDB",
        "Elasticsearch",
      ],
    },
    {
      category: "Testing",
      skills: [
        "Playwright",
        "xUnit",
        "NUnit",
        "SpecFlow (BDD)",
        "Moq",
        "TDD",
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "Vercel",
        "AWS",
        "Terraform",
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "Ansible",
        "Chocolatey",
        "Git",
      ],
    },
    {
      category: "Messaging",
      skills: ["RabbitMQ"],
    },
    {
      category: "Architecture & Practices",
      skills: [
        "Clean Architecture",
        "DDD",
        "CQRS",
        "Microservices",
        "SOLID",
        "OOP",
        "Software Design Patterns",
        "Agile",
        "Scrum",
      ],
    },
    {
      category: "Leadership",
      skills: ["Code Reviews", "Mentoring", "Technical Decision-Making"],
    },
  ],

  achievements: [
    {
      title: "Winner of the International Hackathon",
      event: "Sparkathon 2020",
    },
    {
      title: "2nd place in the Algorithm Development Competition",
      event: "Delphi Coday 2023",
    },
  ],

  openSource: [
    {
      name: "claude-session-dashboard",
      url: "https://github.com/dlupiak/claude-session-dashboard",
      description:
        "Local observability dashboard for Claude Code sessions (TypeScript, TanStack)",
    },
  ],

  experience: [
    {
      company: "Delphi LLC",
      position: "Senior Software Engineer",
      duration: "2026 – Present",
      project: "RAPID by NICE — Innovation & Prototyping Team",
      details:
        "Member of a dedicated innovation team focused on investigations, proof-of-concept development, and rapid prototype building to evaluate emerging technologies for adoption across NICE products.",
      technologies: [
        "PostgreSQL",
        "Supabase",
        "Vercel",
        "Node.js",
        "React",
        "TanStack",
        "Tailwind CSS",
        "Shadcn UI",
        "Terraform",
        "GitHub Actions",
        "Playwright",
        "Claude Code SDLC workflow",
        "A2A Protocol",
        "Generative AI",
      ],
      contributions: [
        "Built diverse prototypes using cutting-edge technologies and industry trends to investigate their readiness for integration into NICE products",
        "Designed and implemented a multi-agent system based on the A2A (Agent-to-Agent) protocol: developed an agents registry and MCP server enabling Claude to connect to an A2A server portal capable of orchestrating work across multiple registered agents",
        "Leveraged flexible technology stacks tailored to each prototype's specific requirements, driving fast iteration cycles",
      ],
    },
    {
      company: "Delphi LLC",
      position: "Senior Software Engineer",
      duration: "2022 – 2025",
      project: "ElevateAI by NICE",
      details:
        "Building custom AI-driven transcript engines, integrating with Generative AI, and delivering the product as a SaaS solution and APIs for businesses to leverage.",
      technologies: [
        ".NET 8",
        "ASP.NET Core",
        "Entity Framework",
        "PostgreSQL",
        "RabbitMQ",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "Elasticsearch",
        "NUnit",
        "SpecFlow",
        "Playwright",
      ],
      contributions: [
        "Developed a wide range of full-stack features spanning backend APIs and frontend interfaces",
        "Led multi-account per user development and RBAC implementation end-to-end",
        "Built complex frontend components for a query-based reporting engine",
        "Conducted code reviews and contributed to team quality standards",
      ],
    },
    {
      company: "Delphi LLC",
      position: "Senior Software Engineer",
      duration: "2022",
      project: "NICE Engage — Playback Portal",
      details:
        "Developing web-based service for queueing and playback of calls from legacy systems.",
      technologies: [
        ".NET Framework",
        ".NET 6",
        "ASP.NET Core",
        "WCF",
        "MS SQL",
        "Entity Framework",
        "RabbitMQ",
      ],
      contributions: [
        "Led RabbitMQ integration for reliable message processing",
        "Developed new features, fixed bugs, conducted code reviews, and provided customer support",
      ],
    },
    {
      company: "Delphi LLC",
      position: "Senior Software Developer",
      duration: "2019 – 2022",
      project: "NICE InterACT — Deployment Platform",
      details:
        "Developed web-based service for system readiness verification, provisioning, and orchestration from scratch. Built a PowerShell SDK-based NuGet library and CLI tool (analog of Ansible) for executing tasks on remote machines.",
      technologies: [
        ".NET Core",
        "ASP.NET Core",
        "SignalR",
        "MediatR (CQRS)",
        "LiteDB",
        "SpecFlow",
        "xUnit",
        "Ansible",
        "PowerShell SDK",
        "Git",
        "WSL",
        "Terraform",
        "AWS",
        "Chocolatey",
        "Angular",
      ],
      contributions: [
        "Contributed from the initial commit: shaped project architecture, API design, and technology selection",
        "Led high- and low-level design of complex features and DevOps integrations",
        "Conducted code reviews and mentored team members on architectural decisions",
      ],
    },
    {
      company: "Delphi LLC",
      position: "Software Developer",
      duration: "2016 – 2019",
      project: "NICE Engage — Deployment Tools",
      details:
        "Developing desktop applications for system readiness verification and installation management.",
      technologies: [
        ".NET Framework",
        "WinForms",
        "WPF",
        "WCF",
        "DevExpress",
        "Excel SDK",
        "SQLite",
        "WMI",
        "Win32",
        "PowerBI",
        "XML",
      ],
      contributions: [
        "Developed new features, fixed bugs, and conducted code reviews",
        "Provided customer support and built internal tooling to improve team productivity",
      ],
    },
  ],

  education: [
    {
      degree: "MSc",
      field: "Automation and Computer-Integrated Technologies",
      institution: "Vinnytsia National Technical University",
    },
    {
      degree: "BSc",
      field: "Systems Engineering",
      institution: "Vinnytsia National Technical University",
    },
  ],

  languages: [
    { language: "English", proficiency: "Upper-Intermediate" },
    { language: "Ukrainian", proficiency: "Native" },
  ],
};
