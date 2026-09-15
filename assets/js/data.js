const personalData = {
    "name": "Hongyi (Jack) Luo",
    "pronunciation": "/hɔŋ/ /I:/ /lɔ:/",
    "title": "MCS Candidate | AI & Backend Software Engineering",
    "location": "Champaign, IL"
};

const summary = `I am a Master's student in Computer Science at the University of Illinois Urbana-Champaign, focusing on AI application development, backend engineering, and LLM-powered systems.

I am currently an AI Developer Intern (Co-op) at Intact Lab, where I develop AI-driven workflows for insurance scenarios, including task orchestration, structured output, and business compliance validation. Previously, at Tencent Yuanbao, I worked on backend systems for agent-based applications, including workflow orchestration, tool integration, structured LLM streaming output, and high-concurrency service development.

Through my experience at Intact, Tencent, Schneider Electric, Fog Works, and China Telecom, I have worked on multi-agent systems, RAG applications, LLM routing, video understanding, and enterprise AI automation. I am passionate about building reliable, production-oriented AI systems that connect advanced model capabilities with real-world product needs.`;

const experienceData = [
    {
        "id": "intact-financial",
        "company": "Intact Financial",
        "description": "",
        "position": "AI Developer Intern (Co-op), Intact Lab",
        "date": "September 2026 - Present",
        "achievements": [
            "Participated in designing and developing an AI-driven checklist-generation workflow for core insurance scenarios, transforming unstructured business requirements into highly reliable, auditable, standardized checklists.",
            "Developed task orchestration, structured output, and business compliance validation modules, building modular, testable AI foundations and improving production workflow robustness.",
            "Collaborated with business and algorithm teams to advance AI interaction prototypes for underwriting and claims, validate the end-to-end workflow architecture, and establish a feedback loop for phased iteration.",
            "Core Technologies: Python, AI Agents, Agentic Workflows, LLM Structured Output"
        ]
    },
    {
        "id": "tencent",
        "company": "Tencent",
        "description": "Fortune Global 500 Technology Company",
        "position": "Backend Development Intern, Yuanbao AI Application Platform",
        "date": "June 2026 - August 2026",
        "achievements": [
            "Contributed extensively to Yuanbao Education's agent-based transformation and was responsible for migrating core backend pipelines from traditional workflows to an agent architecture. Standardized workflow plugins as pre-handlers and tools, combining Go goroutine optimizations with concurrent execution to reduce pipeline latency by 45% while preserving result consistency and improving service stability.",
            "Designed and implemented a general-purpose XML parser and state-machine recovery component for structured LLM streams. On an internal test set, it recovered 100% of abnormally truncated outputs, retained over 95% of valid information on average, supported well-formed inputs, and added no observable latency. Abstracted parsing and recovery behind an event-driven interface, shortening downstream integration and development cycles by 70%.",
            "Proposed and implemented a \"Dual-View Skills\" paradigm separating human-oriented and agent-execution views. It balanced knowledge maintainability with machine parseability while mitigating cognitive overload and agent context asymmetry in complex scenarios.",
            "Core Technologies: Go, AI Agents, Agent Skills, Workflow Orchestration, Function Calling, LLM Structured Streaming Output, XML Parsing"
        ]
    },
    {
        "id": "schneider-electric",
        "company": "Schneider Electric",
        "description": "Fortune Global 500",
        "position": "AI Software Engineering Intern, Digital Innovation Technology Department",
        "date": "November 2025 - January 2026",
        "achievements": [
            "Served as a core AI R&D team member, validating and implementing LLM solutions for manufacturing and supply-chain applications.",
            "Developed an enterprise-grade industrial knowledge and automation platform, designed agentic workflows and full-stack prototypes, and facilitated LLM integration into production scheduling, quality inspection, and other business processes.",
            "Designed and implemented an NL2Excel parser using progressive label disclosure, hybrid retrieval, and LLM reasoning. Increased semi-structured industrial data parsing accuracy from 40% to over 85% on an internal benchmark while significantly reducing retrieval latency.",
            "Built an LLM-based document-processing pipeline that extracted and classified multidimensional information from 5,000+ industrial test reports, creating a high-quality structured corpus for downstream retrieval.",
            "Core Technologies: LLM APIs, Multi-Agent Systems, RAG, Fine-Tuning, LangChain, LangGraph, AgentScope"
        ]
    },
    {
        "id": "fog-works",
        "company": "Fog Works, Inc.",
        "description": "A top 15 U.S. Data Storage Startup of 2023",
        "position": "Software Engineering Intern",
        "date": "June 2025 - August 2025",
        "achievements": [
            "Contributed extensively to the architecture and core modules of the AI OS for the company's next-generation storage products, with responsibility for A2A communication protocol development and high-concurrency request scheduling.",
            "Designed and implemented a Web3- and Named Data Networking (NDN)-based protocol unifying interaction specifications for A2A, A2E, A2F, and A2IoT communication. Its decoupled service topology improved new-service integration and testing efficiency by approximately 50%.",
            "Designed a highly available LLM routing gateway with dynamic weighted scheduling based on task-node affinity and connection-pool reuse. It consistently handled over 1,000 QPS under production traffic, significantly reducing response latency and resource skew during traffic spikes.",
            "Led standardization of LLM task interfaces, request specifications, and status codes, cutting new-service integration and testing cycles by 40%.",
            "Core Technologies: LLM APIs, Microservices, Python, Docker"
        ]
    },
    {
        "id": "china-telecom-e-surfing-vision",
        "company": "China Telecom, e-Surfing Vision",
        "description": "A communications company powered by AI",
        "position": "AI Software Engineering Intern, AI R&D Department",
        "date": "June 2024 - August 2024",
        "achievements": [
            "Researched agent systems and evaluated 5+ mainstream frameworks, including LangChain and AgentScope. Produced a detailed report whose core recommendations the team adopted as the baseline for subsequent R&D.",
            "Designed an agentic workflow for security surveillance and built a collaborative \"Lightweight YOLO Preliminary Screening + Multimodal LLM Fine-Grained Analysis\" pipeline, enabling automated analysis and localization of complex video events.",
            "Designed and implemented an Event Tree state-tracking framework that hierarchically modeled causal chains across video clips and incorporated preference-aware filtering, mitigating long-context drift and strengthening cross-clip temporal event correlation.",
            "Developed a RAG agent with six adaptive retrieval modes and optimized retrieval sequencing for multimodal video features, increasing complex-event and target-entity localization accuracy to over 95% on an evaluation set.",
            "Core Technologies: Multi-Agent Systems, RAG, Prompt Engineering, YOLO, Fine-Tuning, LangChain, LangGraph, AgentScope, Python, RESTful APIs"
        ]
    }
];

const projectsData = [
    {
        "id": "caeliris-embodied-ai-game-agent",
        "title": "Caeliris: Embodied AI Game Agent",
        "summary": "An embodied game agent with controllable memory, preferences, and real-time behavior orchestration.",
        "githubUrl": "https://github.com/Luo-hongyi/Caeliris-a-java-mc-talking-sword-mod",
        "techTags": [
            "Java (Forge)",
            "TypeScript",
            "LLM API Integration",
            "Prompt Engineering",
            "Spatial Perception"
        ],
        "details": [
            "Developed an embodied AI game agent with controllable personas, preferences, user profiles, and short- and long-term memory systems. Implemented memory generation, persistence, and reproducible retrieval, maintaining stable recall of relevant memories in controlled scenarios.",
            "Applied progressive context disclosure to support large-scale preference expansion, achieving 100% recall of relevant preferences in controlled tests.",
            "Used skill orchestration and function calling to dynamically select and execute actions based on the real-time environment and internal state.",
            "Technology Stack: Java (Forge), TypeScript, LLM API Integration, Prompt Engineering, Spatial Perception"
        ]
    },
    {
        "id": "opendan",
        "title": "OpenDAN",
        "summary": "Open-source infrastructure work for a multi-model, multi-agent AI operating system.",
        "githubUrl": "https://github.com/fiatrete/OpenDAN-Personal-AI-OS",
        "techTags": [
            "Python",
            "LLMs",
            "Multi-Agent Systems",
            "A2A Communication"
        ],
        "details": [
            "Contributed to the open-source AI OS underlying Fog Works' next-generation products, supporting mainstream LLMs and multi-agent collaboration.",
            "Led the refactoring and open-source implementation of the Agent-to-Agent (A2A) protocol, upgrading an internal prototype into a community version supporting multiple agent and service types.",
            "Technology Stack: Python, LLMs, Multi-Agent Systems, A2A Communication"
        ]
    },
    {
        "id": "video-understanding-analyzer",
        "title": "Video Understanding Analyzer",
        "summary": "A storyline-based video understanding framework with Event Tree parsing and multimodal RAG agents.",
        "githubUrl": "https://github.com/Luo-hongyi/Video-Understanding",
        "techTags": [
            "Python",
            "Multimodal LLM (GPT-4o)",
            "Multi-agent Systems",
            "RAG",
            "LangChain",
            "Prompt Engineering"
        ],
        "details": [
            "Independently developed and open-sourced a storyline-based Event Tree framework modeling causal and temporal relationships across video clips.",
            "Designed a multimodal RAG and ReAct agent system combining multimodal LLMs with video understanding workflows, automatically transforming unstructured videos into hierarchical narratives and supporting semantic retrieval.",
            "Technology Stack: Python, Multimodal LLM (GPT-4o), Multi-Agent Systems, RAG, LangChain, Prompt Engineering"
        ]
    },
    {
        "id": "concert-finder",
        "title": "Concert Finder",
        "summary": "A web application that provides personalized concert recommendations.",
        "githubUrl": "https://github.com/Luo-hongyi/Concert-Finder-Spotify-Sync",
        "techTags": [
            "React.js",
            "Node.js",
            "MongoDB",
            "Spotify API",
            "RESTful APIs"
        ],
        "details": [
            "Built a personalized concert discovery platform that recommends events based on a user's location, preferences, and followed artists, while surfacing event feeds for the latest concert information.",
            "Implemented user account and profile management features, including registration, login, preference updates, favorites, and concert sharing.",
            "Integrated artist search, artist detail pages, and Spotify Sync so users can automatically discover concerts from artists they already follow.",
            "Designed the application to be fully compatible with and optimized for mobile devices."
        ]
    }
];

const educationData = [
    {
        "school": "University of Illinois Urbana-Champaign",
        "degree": "Master of Computer Science",
        "description": "GPA: 4.0/4.0",
        "date": "August 2025 - May 2027 (Expected)"
    },
    {
        "school": "University of Illinois Urbana-Champaign",
        "degree": "Bachelor of Science in Computer Science",
        "description": "Graduated with High Honors, GPA: 3.8/4.0",
        "date": "August 2021 - May 2025"
    }
];

const skillsData = {
    "AI / LLM": [
        "Large Language Models (LLMs)",
        "AI Agents",
        "Agentic Workflows",
        "Agent Skills",
        "Multi-Agent Systems",
        "RAG",
        "Function Calling",
        "Structured Output",
        "Prompt Engineering",
        "LangChain",
        "LangGraph",
        "AgentScope"
    ],
    "Programming Languages": [
        "Python",
        "Go",
        "Java",
        "C / C++",
        "JavaScript / TypeScript",
        "SQL",
        "OCaml"
    ],
    "Frameworks & Databases": [
        "Spring Boot",
        "Node.js",
        "React",
        "MySQL",
        "MongoDB",
        "Redis"
    ],
    "Development & Productivity Tools": [
        "Git",
        "Docker",
        "AI-Assisted Development (Claude Code, Codex, Cursor)",
        "Unreal Engine 5"
    ],
    "Languages": [
        "English (Proficient)",
        "Chinese (Native; Mandarin and Cantonese)"
    ]
};

const contactData = [
    {
        "type": "linkedin",
        "label": "LinkedIn",
        "url": "https://www.linkedin.com/in/jack-hongyi-luo",
        "icon": "linkedin"
    },
    {
        "type": "github",
        "label": "GitHub",
        "url": "https://github.com/Luo-hongyi",
        "icon": "github"
    }
];
