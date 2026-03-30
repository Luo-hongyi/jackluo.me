const personalData = {
    "name": "Hongyi (Jack) Luo",
    "pronunciation": "/hɔŋ/ /I:/ /lɔ:/",
    "title": "MCS Candidate | AI/ML Applications",
    "location": "Champaign, IL"
};

const summary = `I am currently pursuing a Master's in Computer Science at the University of Illinois Urbana-Champaign, specializing in artificial intelligence and machine learning applications. My experience spans developing multi-agent systems, building LLM-powered applications, and optimizing AI-driven workflows for real-world solutions. I excel at leveraging cutting-edge AI/ML technologies to solve practical problems and drive meaningful software innovation.`;

const experienceData = [
    {
        "id": "schneider-electric",
        "company": "Schneider Electric",
        "description": "Fortune Global 500",
        "position": "AI Software Engineering Intern",
        "date": "November 2025 - January 2026",
        "achievements": [
            "Digital Innovation Technology Department",
            "Drove enterprise digital transformation by applying AI to automate internal workflows and improve operational intelligence.",
            "Led development of an enterprise-grade industrial knowledge and automation platform, designing efficient agentic workflows for complex business use cases and using full-stack engineering to rapidly prototype and deliver agent-based applications, effectively turning LLM capabilities into real business workflow improvements.",
            "Designed and implemented an NL2Excel parsing engine with progressive-disclosure tagging and hybrid retrieval, including LLM-based reasoning and semantic matching, enabling the RAG system to bridge semi-structured data barriers for core enterprise knowledge retrieval; improved retrieval accuracy and efficiency by 100%.",
            "Built an LLM-based document processing pipeline that automatically tagged and classified more than 5,000 industrial testing reports across multiple dimensions, significantly accelerating enterprise data asset accumulation.",
            "Core technology stack: LLM APIs, Multi-agent Systems, RAG, Fine Tuning, LangChain, LangGraph, AgentScope"
        ]
    },
    {
        "id": "fog-works",
        "company": "Fog Works, Inc.",
        "description": "A top 15 U.S. Data Storage Startup of 2023",
        "position": "Software Engineering Intern",
        "date": "June 2025 - August 2025",
        "achievements": [
            "Contributed to the AI operating system for the company's next-generation storage product, owning architecture design and core module development for AI agent applications and making key contributions to both A2A communication protocols and high-concurrency request scheduling.",
            {
                "text": "A2A (Agent-to-Agent) communication protocol design and implementation",
                "subItems": [
                    "Designed and implemented a novel communication protocol based on Web3 and Named Data Networking (NDN), unifying heterogeneous communication standards across agent-to-agent (A2A), agent-to-environment (A2E), agent-to-function (A2F), and agent-to-IoT-device (A2IoT) interactions under a single protocol.",
                    "Deployed the protocol to production, improving average integration and development efficiency for new services and devices by 50%."
                ]
            },
            {
                "text": "High-concurrency LLM request scheduling system design and implementation",
                "subItems": [
                    "Designed a highly available LLM routing gateway optimized for large-model deployment and high-concurrency inference, introducing a task-node fitness model and dynamic load balancing for intelligent request scheduling.",
                    "Achieved more than 1,000 QPS throughput with 99.9% system availability."
                ]
            },
            {
                "text": "LLM task interface standardization",
                "subItems": [
                    "Led the redesign and standardization of task interfaces to address inconsistencies across different LLM service APIs.",
                    "Defined a unified interface specification, reducing average integration and testing time for new services by 40%."
                ]
            },
            "Core technology stack: Large Language Models (LLM) APIs, Microservices, Python, Docker"
        ]
    },
    {
        "id": "see-link-technology",
        "company": "See-Link Technology",
        "description": "A communications company powered by AI",
        "position": "AI Software Engineering Intern",
        "date": "June 2024 - August 2024",
        "achievements": [
            "AI R&D Department",
            "Led technical research and AI application development focused on integrating agent systems and hybrid-model workflows into video surveillance.",
            {
                "text": "Research on state-of-the-art multi-agent frameworks",
                "subItems": [
                    "Independently led technology selection for the company's next-generation AI applications, building an agent-oriented evaluation framework and methodology, conducting in-depth comparisons across more than five mainstream frameworks including AgentScope and LangChain, and driving architectural adoption of agent-based systems for complex business scenarios.",
                    "Authored an in-depth evaluation report with recommendations covering performance, community activity, extensibility, and other dimensions; the final recommendations were adopted by the team."
                ]
            },
            {
                "text": "Development of a hybrid-model workflow for video understanding",
                "subItems": [
                    "Proposed and implemented a preference-filtering paradigm that guided models to focus on a limited set of targets within specific scenarios, improving event and object recognition success rates by 500% over baseline methods.",
                    "Designed and implemented a novel Event Tree algorithm that solved the problem of complete tracking and associative analysis for events with unbounded duration.",
                    "Designed a large-model/small-model collaboration architecture. By combining scenario-specific fine-tuning and inference optimization, and using smaller models to offset precision limitations in larger models, this approach significantly improved recognition of preferred events and entities without sacrificing inference performance.",
                    "Integrated a RAG agent into the workflow so it could accurately interpret user intent and adaptively invoke six query modes, raising event and entity localization success rates to more than 95%."
                ]
            },
            "Core technology stack: Multi-agent Systems, RAG, Prompt Engineering, YOLO, Fine Tuning, LangChain / LangGraph / AgentScope, Python, RESTful API"
        ]
    }
];

const projectsData = [
    {
        "id": "opendan",
        "title": "OpenDAN",
        "summary": "Open-source infrastructure work for a multi-model, multi-agent AI operating system.",
        "githubUrl": "https://github.com/fiatrete/OpenDAN-Personal-AI-OS",
        "techTags": [
            "Python",
            "LLM",
            "Multi-agent Systems",
            "A2A Communication"
        ],
        "details": [
            "Contributed to a well-known open-source AI OS project, building underlying infrastructure for Fog Works' next-generation product to support multiple large models and multi-agent collaboration.",
            "Led the refactoring and open-source productionization of the Agent-to-Agent (A2A) communication protocol, evolving an internal prototype into a more general-purpose and robust community release capable of supporting efficient multi-agent collaboration for complex tasks.",
            "Technology stack: Python, LLM, Multi-agent Systems, A2A Communication"
        ]
    },
    {
        "id": "caeliris-embodied-ai-weapon",
        "title": "Caeliris: Embodied AI Weapon",
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
            "Built an autonomous embodied game agent with a fully transparent and controllable system for persona, preferences, user profiling, and long-term / short-term memory; achieved unsupervised long-term memory generation and a 100% memory recall success rate.",
            "Adopted a progressive context exposure approach that allowed the agent to load an almost unlimited number of preference entries while still guaranteeing 100% recall for relevant preferences.",
            "Used flexible skill orchestration and function calling to enable the agent to take different actions based on real-time environmental context and its own internal state.",
            "Technology stack: Java (Forge), TypeScript, LLM API Integration, Prompt Engineering, Spatial Perception"
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
            "Developed a storyline-based video understanding framework that captured and parsed causal and temporal relationships across video clips through an Event Tree.",
            "Designed a multimodal RAG and ReAct agent system that combined multimodal large-model capabilities with video understanding workflows to explore innovative AI application scenarios, enabling automatic conversion of unstructured video into hierarchical narrative structures and semantic retrieval.",
            "Technology stack: Python, Multimodal LLM (GPT-4o), Multi-agent Systems, RAG, LangChain, Prompt Engineering"
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
        "degree": "Bachelor of Science in Computer Science and Music",
        "description": "GPA: 3.8/4.0, Graduated with High Honors",
        "date": "August 2021 - May 2025"
    }
];

const skillsData = {
    "AI / LLM": [
        "Large Language Models (LLM)",
        "Multi-agent Systems",
        "RAG",
        "Prompt Engineering",
        "LangChain",
        "LangGraph",
        "AgentScope"
    ],
    "Programming Languages": [
        "Python",
        "Java",
        "C / C++",
        "JavaScript",
        "TypeScript",
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
        "Claude Code",
        "Codex",
        "Cursor",
        "Unreal Engine 5"
    ],
    "Languages": [
        "English (Fluent)",
        "Mandarin (Native)",
        "Cantonese (Native)"
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
