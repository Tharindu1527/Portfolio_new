export const profile = {
  name: "Tharindu Dhanushka",
  role: "AI / ML Engineer",
  subrole: "Computer Engineering Fresh Graduate · University of Ruhuna",
  location: "Colombo, Sri Lanka",
  email: "tharindubandara126@gmail.com",
  phone: "+94 75 392 9283",
  github: "https://github.com/Tharindu1527",
  githubHandle: "Tharindu1527",
  linkedin: "https://www.linkedin.com/in/tharindu15n/",
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  summary:
    "Computer Engineering fresh graduate with hands-on production experience in ML deployment, model fine-tuning, multi-agent AI systems, and statistical analysis. Specialised in Python-based ML pipelines and agentic LLM systems — from data ingestion and feature engineering to model serving — with a track record of shipping applications into real-world environments. Currently conducting active biomedical research applying multimodal ML to physiological signal data.",
};

export const stats = [
  { value: 778, suffix: "", label: "Global Rank", detail: "IEEEXtreme 18.0 · 8,700+ teams", prefix: "#" },
  { value: 89, suffix: "%", label: "Peak LLM Accuracy", detail: "up from 71% via QLoRA fine-tuning" },
  { value: 94, suffix: "%", label: "CNN Classification Accuracy", detail: "ResNet50 · chest X-ray dataset" },
  { value: 15, suffix: "", label: "Hackathon Finalist", detail: "Veracity Gen AI · top 15 of 70+ teams", prefix: "Top " },
];

export const skillGroups = [
  {
    label: "ML & AI",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "QLoRA Fine-tuning", "LSTM", "Random Forest", "CNN (ResNet50)", "LangChain", "CrewAI", "RAG", "Agentic AI"],
  },
  {
    label: "LLM & NLP",
    items: ["OpenAI", "Google Gemini", "GroqLM", "HuggingFace", "Cosine Similarity", "Multi-Agent Orchestration", "Dialogflow CX"],
  },
  {
    label: "Data & Statistics",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "PCA", "Statistical Modelling", "Time-Series Analysis"],
  },
  {
    label: "Languages",
    items: ["Python", "JavaScript", "SQL", "C", "C++"],
  },
  {
    label: "Backend",
    items: ["Django", "Flask", "Node.js", "Next.js", "REST APIs"],
  },
  {
    label: "Frontend",
    items: ["React", "Tailwind CSS", "Streamlit", "Gradio"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Qdrant", "Chroma"],
  },
  {
    label: "DevOps & Tools",
    items: ["Docker", "CI/CD", "Git", "Jenkins", "Linux", "Jira", "Agile", "Postman", "AssemblyAI"],
  },
];

export const experience = [
  {
    role: "AI / ML Engineer",
    org: "OXZON AI",
    type: "Internship",
    period: "May 2025 – Nov 2025",
    location: "Sri Lanka",
    status: "active",
    bullets: [
      "Shipped 2 production ML applications, reducing average inference latency by refactoring model-serving architecture and integrating async API endpoints with Flask and Docker.",
      "Raised LLM task accuracy from 71% → 89% on a domain classification benchmark by fine-tuning a pretrained model using QLoRA on a curated 4,000-sample internal dataset.",
    ],
  },
  {
    role: "Junior ML Engineer",
    org: "Omdena Nigeria Chapter",
    type: "Collaborator",
    period: "Jun 2024 – Aug 2024",
    location: "Remote",
    status: "done",
    bullets: [
      "Improved time-series forecast accuracy by 18% over a linear baseline by building and ensembling LSTM and Random Forest Regressor models, then deploying the pipeline via a Flask API.",
      "Delivered a collaborative ML environment serving 10+ contributors, cutting model iteration cycles from days to hours by containerising the inference service with Docker.",
    ],
  },
  {
    role: "Junior Data Scientist",
    org: "Omdena Zambia Chapter",
    type: "Collaborator",
    period: "May 2024 – Jun 2024",
    location: "Remote",
    status: "done",
    bullets: [
      "Deployed a production-ready ML application, reducing manual data-processing time by designing an end-to-end pipeline from multi-source data ingestion to model inference.",
      "Improved dataset quality by sourcing and cleaning structured data from 3+ external sources, increasing usable training samples.",
    ],
  },
];

export const projects = [
  {
    id: "slm-rl",
    title: "SLM Fine-Tuning with RL Optimisations",
    tags: ["Python", "QLoRA", "GRPO", "PPO"],
    summary:
      "Fine-tuned a small language model using QLoRA with GRPO and PPO reward-based optimisation, implementing custom reward functions and evaluating alignment quality across multiple checkpoints.",
    metric: "Validated training stability & alignment gains across all checkpoints",
    featured: true,
  },
  {
    id: "meetingminute",
    title: "MeetingMinute — Multi-Agent Meeting Summariser",
    tags: ["CrewAI", "OpenAI", "AssemblyAI", "MongoDB", "Qdrant", "Composio"],
    summary:
      "Real-world meeting summariser built on a CrewAI multi-agent system (4 crews, 8 agents) in sequential processing, integrating AssemblyAI for transcription and a TTS API for audio output. OpenAI as the LLM backbone, Qdrant for semantic retrieval, MongoDB for persistence, Composio for automated email triggers.",
    metric: "Finalist — Veracity Group Gen AI Hackathon (top 15 of 70+ teams)",
    featured: true,
  },
  {
    id: "multilingual-chatbot",
    title: "Multilingual AI Chatbot with Persistent Memory",
    tags: ["LangChain", "Gemini", "MongoDB", "Gradio", "HuggingFace"],
    summary:
      "Production chatbot supporting 5 languages with cross-session memory persistence via MongoDB, live on Hugging Face Spaces. Google Gemini for generation, LangChain for orchestration.",
    metric: "Sub-2s response latency across all language pairs",
    featured: false,
  },
  {
    id: "rag-pdf-tools",
    title: "RAG-Powered PDF Research Tools",
    tags: ["GroqLM", "LangChain", "HuggingFace", "Chroma", "Qdrant", "Gradio"],
    summary:
      "PDF Research Assistant (GroqLM + LangChain) with vector-based retrieval and conversation memory for document Q&A. Plus QBot — a PDF query chatbot using HuggingFace embeddings and Chroma for context-aware retrieval.",
    metric: "End-to-end RAG pipeline, deployed via Gradio",
    featured: false,
  },
  {
    id: "chest-disease",
    title: "Chest Disease Detection & Classification",
    tags: ["CNN", "ResNet50", "TensorFlow"],
    summary:
      "Fine-tuned ResNet50 with transfer learning on chest X-ray data, applying data augmentation to address class imbalance across 4 disease categories.",
    metric: "94% classification accuracy",
    featured: false,
  },
];

export const research = {
  title: "Biomedical ML Research",
  status: "Active",
  tags: ["Python", "TensorFlow", "Statistical Modelling", "Ultrasound Segmentation"],
  points: [
    "Investigating cardiovascular signal correlates (HRV, blood pressure dynamics) as predictors of skeletal muscle volume across 8 muscle groups, using ultrasound imaging and ensemble ML — targeting Elsevier / Springer publication.",
    "Building a multimodal analysis pipeline combining demographic, nutritional, and psychophysiological features with public datasets and manually annotated ultrasound data, via a custom RST-UNet segmentation model.",
  ],
};

export const education = {
  degree: "BSc (Hons) Computer Engineering",
  school: "University of Ruhuna",
  period: "Mar 2022 – Present",
  location: "Galle, Sri Lanka",
  coursework: [
    "Artificial Intelligence",
    "Machine Learning",
    "DevOps Engineering",
    "Computer Architecture",
    "Data Structures & Algorithms",
    "Design Patterns",
    "OOP",
    "Databases",
    "Embedded Systems",
  ],
};

export const competitions = [
  {
    name: "IEEEXtreme 18.0 Programming Competition",
    date: "Nov 2024",
    detail: "Ranked 778th globally and 55th in Sri Lanka out of 8,700+ teams worldwide.",
  },
  {
    name: "Veracity Group Gen AI Hackathon",
    date: "2024",
    detail: "Finalist — top 15 of 70+ teams in a 1-week competition. Built MeetingMinute, a real-world multi-agent AI summariser using CrewAI.",
  },
];

export const certifications = [
  { name: "TensorFlow Developer Professional Certificate", org: "DeepLearning.AI · Coursera", date: "May 2024" },
  { name: "Machine Learning with Python", org: "IBM · Coursera", date: "May 2024" },
  { name: "Neural Networks and Deep Learning", org: "DeepLearning.AI", date: "2024" },
  { name: "Building Agentic RAG with LlamaIndex", org: "DeepLearning.AI", date: "2024" },
  { name: "Introducing Multimodal Llama 3.2", org: "DeepLearning.AI", date: "2024" },
  { name: "Building Your Own Database Agent", org: "DeepLearning.AI", date: "2024" },
];
