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
        "description": "Top 15 U.S. Data Storage Startup of 2023",
        "position": "Software Engineering Intern",
        "date": "June 2025 - Present",
        "achievements": [
            "Deeply involved in the research and development of the AI-powered operating system for the company's next-generation storage products, with key contributions to the A2A communication protocol and high-concurrency request scheduling.",
            {
                "text": "A2A (Agent-to-Agent) Communication Protocol Design and Implementation",
                "subItems": [
                    "Designed and implemented a novel communication protocol based on Web3 and Named Data Networking (NDN), with its core contribution being the unification of multi-source, heterogeneous communication standards, including Agent-to-Agent (A2A), Agent-to-Environment (A2E), Agent-to-Function (A2F), and Agent-to-IoT-Device (A2IoT).",
                    "The deployment of this protocol improved the average integration and development efficiency for new services and devices by 50%."
                ]
            },
            {
                "text": "High-Concurrency LLM Request Scheduling System Design and Implementation",
                "subItems": [
                    "Designed and implemented a highly available LLM routing gateway that introduced a \"Task-Node Fitness\" calculation model, which, combined with dynamic load balancing, achieved intelligent and optimal request scheduling.",
                    "The system successfully supported concurrent requests exceeding 1000 QPS while ensuring 99.9% system availability."
                ]
            },
            {
                "text": "LLM Task Interface Standardization",
                "subItems": [
                    "Led the redesign and standardization of the task interface to address the issue of heterogeneity across different LLM service interfaces.",
                    "Reduced the average integration and testing time for new services by 40% by defining a unified interface specification."
                ]
            },
            "Technologies: Large Language Models (LLM) APIs, Micro-services, Python, Docker"
        ]
    },
    {
        "id": "see-link-technology",
        "company": "See-Link Technology",
        "description": "A communications company powered by AI",
        "position": "Software Engineering Intern",
        "date": "June 2024 - August 2024",
        "achievements": [
            "Responsible for technical research and the development of AI application systems, leading the integration and innovation of multi-agent systems and hybrid model workflows in the video surveillance domain.",
            {
                "text": "Cutting-edge Multi-Agent Framework Research",
                "subItems": [
                    "Independently managed the technology selection research for the company's next-generation AI applications, conducting an in-depth comparative study of over 5 mainstream open-source multi-agent frameworks (including AgentScope, LangGraph, and AutoGen).",
                    "Authored a comprehensive evaluation report exceeding 10,000 words, presenting selection recommendations based on multiple dimensions such as performance, community activity, and scalability; the final research was adopted by the team."
                ]
            },
            {
                "text": "Development of the \"Storekeeper Assistant\" Agent System",
                "subItems": [
                    "Integrated a multi-agent system into the existing surveillance platform, successfully launching the \"Storekeeper Assistant\" application, which enabled natural language-driven, real-time, multi-dimensional store data insights and decision support.",
                    "Constructed a layered human-agent collaboration architecture, reducing unnecessary queries and tool calls by 80%.",
                    "Optimized the ReAct algorithm implementation within the open-source framework and corrected its interpreter, lowering the task execution failure rate from 40% to 10%.",
                    "Independently wrote over 3,500 lines of code to build a complex system with over 10 functional modules and 5 core agents; achieved over 95% code test coverage by designing and executing more than 100 test cases."
                ]
            },
            {
                "text": "Development of a Hybrid Model-Based Video Understanding Workflow",
                "subItems": [
                    "Innovatively proposed and implemented a \"Preference Filtering\" paradigm, guiding the model to focus on limited targets in specific scenarios, which increased the event and target recognition success rate by 500% compared to the baseline method.",
                    "Designed and implemented a novel Event Tree algorithm, successfully solving the challenge of complete tracking and correlation analysis for events of indefinite duration.",
                    "Designed and implemented a \"Large-Small Model Collaboration\" architecture, leveraging the efficient recognition of small models to compensate for the precision shortcomings of large models, significantly improving preferred event and entity recognition without compromising inference performance.",
                    "Integrated a RAG agent into the workflow, enabling it to accurately understand user intent and adaptively invoke 6 query modes, which increased the success rate of locating events and entities to over 95%."
                ]
            },
            "Technologies: Multi-agent Systems, RAG, Prompt Engineering, YOLO, Fine Tuning, LangChain/LangGraph/AgentScope, Python, RESTful API"
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
    },
    {
        "id": "concert-finder",
        "title": "Concert Finder",
        "summary": "An web application to provide personalized concert recommendations.",
        "githubUrl": "https://github.com/Luo-hongyi/Concert-Finder-Spotify-Sync",
        "techTags": [
            "React.js",
            "Node.js",
            "MongoDB",
            "Spotify API",
            "RESTful APIs"
        ],
        "details": [
            "Personalized Concert Discovery: The platform offers tailored concert recommendations based on a user’s current location or their preferences and followed artists. It also provides event feeds for the latest concert information and from followed artists.",
            "Comprehensive User and Concert Management: Users can register, log in, and manage their profiles, including updating personal details and search preferences. They can view detailed concert information, favorite concerts for easy access, and share concert details with others.",
            "Artist Integration and Search Capabilities: The platform allows users to view artist details, including bios and social media links. A notable feature is the Spotify Sync, which enables users to log in with their Spotify account to automatically see concerts from artists they follow on Spotify. Users can also search for artist concerts through a dedicated search bar.",
            "The entire platform is also designed to be fully compatible and optimized for mobile devices."
        ]
    },
    {
        "id": "cyberknight",
        "title": "CyberKNight",
        "summary": "A 3D cyberpunk action-shooter.",
        "githubUrl": "https://github.com/Luo-hongyi/Cyberknight",
        "techTags": [
            "Unreal Engine 5",
            "Blueprints"
        ],
        "details": [
            "Genre & Core Gameplay: A 3D platform action game emphasizing intense combat and bullet-hell-like projectile dodging.",
            "Progression System: Players can acquire upgrades and equipment from merchants, and unlock new skills by completing specific in-game challenges.",
            "Skill Mechanic: Skills are powered by a “battery” system, with more powerful abilities consuming more charges. Charges can regenerate over time or be refilled by performing exciting combat maneuvers.",
            "Visuals: The game features a cyberpunk aesthetic, utilizing UE5’s lighting and material rendering to create dark environments illuminated by neon lights and reflections."
        ]
    },
    {
        "id": "sky-route",
        "title": "Sky Route",
        "summary": "An airport route and importance finder.",
        "githubUrl": "https://github.com/Luo-hongyi/Sky-Route",
        "techTags": [
            "C++",
            "Graph Theory",
            "Dijkstra's Algorithm",
            "BFS Algorithm"
        ],
        "details": [
            "Goal: This project helps find important airports and routes between them in a specific country.",
            "Key Feature: It can determine the best path between two airports, considering either the shortest distance or the fewest stops, based on what the user prioritizes.",
            "Insights: It can also identify the most significant airport within a chosen country.",
            "Ease of Use: The project can be easily run to find these airport insights and routes."
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
        "label": "+1(217)305-3780",
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
