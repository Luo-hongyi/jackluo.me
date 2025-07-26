const personalData = {
    "name": "Hongyi Luo",
    "pronunciation": "/hɔŋ/ /I:/ /lɔ:/",
    "title": "MCS Candidate | AI/ML Applications",
    "location": "Champaign, IL"
};

const summary = `I am currently pursuing a Master's in Computer Science at the University of Illinois Urbana-Champaign, specializing in artificial intelligence and machine learning applications. My experience spans developing multi-agent systems, building LLM-powered applications, and optimizing AI-driven workflows for real-world solutions. I excel at leveraging cutting-edge AI/ML technologies to solve practical problems and drive meaningful software innovation.`;

const experienceData = [
    {
        "id": "fog-works",
        "company": "Fog Works, Inc.",
        "description": "Top 15 U.S. Data Storage Startup Of 2023",
        "position": "Software Engineering Intern",
        "date": "June 2025 - Present",
        "achievements": [
            "Reconstructed the kernel of the Web3 storage system, improving data processing efficiency by 35%",
            "Designed and implemented an LLM router system capable of handling 1000+ simultaneous requests with 99.9% uptime",
            "Redesigned and implemented LLM task interfaces, creating a standardized API structure that reduced integration time by 40%",
            "Key technologies: Python, Docker, Large Language Models APIs, REST APIs, Microservices"
        ]
    },
    {
        "id": "see-link-technology",
        "company": "See-Link Technology",
        "description": "A communications company powered by AI",
        "position": "Software Engineering Intern",
        "date": "June 2024 - August 2024",
        "achievements": [
            "Researched 5+ cutting-edge open-source multi-agent frameworks, creating a comprehensive report",
            "Developed recognition capabilities for video analysis, achieving 95%+ accuracy on a specific validation dataset in identifying key objects/events",
            "Designed and implemented a multi-agent, LLM-based application to provide insights on store operations and security",
            {
                "text": "Wrote 3,500+ lines of Python code across 10+ functional modules and 5 intelligent agents, including:",
                "subItems": [
                    "Video Processor Agent: Processes raw video data and extracts key frames for analysis",
                    "Object Recognizer Agent: Identifies and classifies objects/events in video frames with high accuracy",
                    "Query Handler Agent: Handles natural language queries and translates them into actionable tasks for other agents",
                    "Insight Generator Agent: Aggregates data and generates insights on store performance and security",
                    "Adaptive Planner Agent: Implements self-evaluation and adaptive planning to improve system performance"
                ]
            },
            "Processed and analyzed 1TB+ video data and utilized 500+ labeled data points for training and validation",
            "Created and executed 50+ test cases to validate system performance, achieving 95%+ test coverage",
            "Optimized the ReAct algorithm for query-specific actions, improving system performance by 50%",
            "Designed and implemented self-evaluation and adaptive planning features, improving recognition quality by 20%",
            "Key technologies: Large Language Models, Multimodal Large Language Models, Prompt Engineering, Multi-agent, RAG, AgentScope, LangChain, LangGraph, OpenAI, Python, Web Development, Web API, REST API, SaaS"
        ]
    }
];

const projectsData = [
    {
        "id": "opendan---personal-ai-os",
        "title": "OpenDAN - Personal AI OS",
        "summary": "Open-source contributor to a personal AI operating system for customizable AI services and data management.",
        "githubUrl": "https://github.com/fiatrete/OpenDAN-Personal-AI-OS",
        "techTags": [
            "LLM",
            "Task Scheduling",
            "Python",
            "REST API",
            "Multi-agent"
        ],
        "details": [
            "Open-Source Contributor to OpenDAN, an open-source personal AI operating system for customizable AI services and data management",
            "Optimized the AI Agent scheduling module, improving priority and resource allocation logic for task execution",
            "Implemented 6 LLM task interface APIs from scratch, standardizing communication between various AI components",
            "Developed an LLM router from the ground up, enabling intelligent distribution of queries to appropriate language models based on task requirements and resource constraints"
        ]
    },
    {
        "id": "store-insight-assistant",
        "title": "Store Insight Assistant",
        "summary": "A multi-agent system analyzing video data to monitor store operations and security with natural language query support.",
        "githubUrl": "https://github.com/Luo-hongyi/StoreMonitorAgent",
        "techTags": [
            "LLM",
            "Prompt Engineering",
            "Multi-agent",
            "Python",
            "REST API"
        ],
        "details": [
            "Developed a multi-agent system analyzing pre-processed video data to monitor store operations and security",
            "Implemented ReAct algorithm and optimized it for query-specific actions, improving performance by 50%",
            "Enabled natural language queries, allowing users to ask any question and receive relevant store insights",
            "Enhanced the system to generate comprehensive analysis on store performance and safety based on user queries"
        ]
    },
    {
        "id": "video-analyzer",
        "title": "Video Analyzer",
        "summary": "A multi-agent application for comprehensive video understanding with event-based tree structure algorithms.",
        "githubUrl": "https://github.com/Luo-hongyi/Video-Understanding",
        "techTags": [
            "Multimodal LLM",
            "RAG",
            "LangChain",
            "LangGraph",
            "OpenAI"
        ],
        "details": [
            "Developed a multi-agent application integrating Multimodal LLM, applied to smart gas stations in Shanghai city",
            "Designed and implemented a unique event-based tree structure algorithm for comprehensive video understanding",
            "Implemented autonomous planning for video asset retrieval and analysis based on specific investigation tasks",
            "Created objects/events recognition capabilities for video frame analysis",
            "Designed and implemented self-evaluation and adaptive planning features for recognition quality improvement"
        ]
    }
];

const educationData = [
    {
        "school": "University of Illinois Urbana-Champaign",
        "degree": "Master of Computer Science",
        "description": "Focusing on Artificial Intelligence and Machine Learning",
        "date": "August 2025 - Expected Graduation: Dec 2026"
    },
    {
        "school": "University of Illinois Urbana-Champaign",
        "degree": "Bachelor of Science in Computer Science and Music",
        "description": "GPA: 3.8/4.0, Graduated with high honors",
        "date": "August 2021 - May 2025"
    }
];

const skillsData = {
    "Programming Languages": [
        "Java",
        "C/C++",
        "Python",
        "OCaml",
        "JavaScript",
        "TypeScript",
        "SQL"
    ],
    "Frameworks & Libraries": [
        "Large Language Models",
        "LangChain",
        "LangGraph",
        "Spring Boot",
        "React",
        "Node.js"
    ],
    "Tools & Technologies": [
        "MySQL",
        "MongoDB",
        "Redis",
        "Git",
        "Docker",
        "Visual Studio Code",
        "IntelliJ IDEA",
        "Android Studio",
        "GitHub Copilot",
        "Unreal Engine 5"
    ]
};

const contactData = [
    {
        "type": "email",
        "label": "hongyi7@illinois.edu",
        "url": "mailto:hongyi7@illinois.edu",
        "icon": "email"
    },
    {
        "type": "phone",
        "label": "+1 (217) 305-3780",
        "url": "tel:+12173053780",
        "icon": "phone"
    },
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
