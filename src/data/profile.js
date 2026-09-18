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
    image: `${import.meta.env.BASE_URL}images/projects/slm-rl.png`,
    title: "SLM Fine-Tuning with RL Optimisations",
    tags: ["Python", "QLoRA", "GRPO", "PPO"],
    summary:
      "Fine-tuned a small language model using QLoRA with GRPO and PPO reward-based optimisation, implementing custom reward functions and evaluating alignment quality across multiple checkpoints.",
    metric: "Validated training stability & alignment gains across all checkpoints",
    featured: true,
    links: [{ label: "GitHub", url: "https://github.com/Tharindu1527/SLM_Fine_tuning_using_With_QLoRA_and_RL_Optimizations-GRPO-PPO-" }],
  },
  {
    id: "meetingminute",
    image: `${import.meta.env.BASE_URL}images/projects/meetingminute.png`,
    title: "MeetingMinute — Multi-Agent Meeting Summariser",
    tags: ["CrewAI", "OpenAI", "AssemblyAI", "MongoDB", "Qdrant", "Composio"],
    summary:
      "Real-world meeting summariser built on a CrewAI multi-agent system (4 crews, 8 agents) in sequential processing, integrating AssemblyAI for transcription and a TTS API for audio output. OpenAI as the LLM backbone, Qdrant for semantic retrieval, MongoDB for persistence, Composio for automated email triggers.",
    metric: "Finalist — Veracity Group Gen AI Hackathon (top 15 of 70+ teams)",
    featured: true,
    links: [{ label: "GitHub", url: "https://github.com/Tharindu1527/Meeting-Minute-AI-Hackathon-Final" }],
  },
  {
    id: "multilingual-chatbot",
    image: `${import.meta.env.BASE_URL}images/projects/multilingual-chatbot.png`,
    title: "Multilingual AI Chatbot with Persistent Memory",
    tags: ["LangChain", "Gemini", "MongoDB", "Gradio", "HuggingFace"],
    summary:
      "Production chatbot supporting 5 languages with cross-session memory persistence via MongoDB, live on Hugging Face Spaces. Google Gemini for generation, LangChain for orchestration.",
    metric: "Sub-2s response latency across all language pairs",
    featured: false,
    links: [{ label: "GitHub", url: "https://github.com/Tharindu1527/AI-Chatbot-With-Memory" }],
  },
  {
    id: "rag-pdf-tools",
    image: `${import.meta.env.BASE_URL}images/projects/rag-pdf-tools.png`,
    title: "RAG-Powered PDF Research Tools",
    tags: ["GroqLM", "LangChain", "HuggingFace", "Chroma", "Qdrant", "Gradio"],
    summary:
      "PDF Research Assistant (GroqLM + LangChain) with vector-based retrieval and conversation memory for document Q&A. Plus QBot — a PDF query chatbot using HuggingFace embeddings and Chroma for context-aware retrieval.",
    metric: "End-to-end RAG pipeline, deployed via Gradio",
    featured: false,
    links: [
      { label: "PDF Research Assistant", url: "https://github.com/Tharindu1527/-PDF_Research_Assistance_with_GroqLM_and_Langchain" },
      { label: "QBot", url: "https://github.com/Tharindu1527/QBot-chatbot" },
    ],
  },
  {
    id: "chest-disease",
    image: `${import.meta.env.BASE_URL}images/projects/chest-disease.png`,
    title: "Chest Disease Detection & Classification",
    tags: ["CNN", "TensorFlow", "Computer Vision"],
    summary:
      "Deep learning model distinguishing COVID-19, viral pneumonia, bacterial pneumonia, and normal conditions from chest X-ray images, built as a diagnostic aid tool across a balanced 4-class custom dataset.",
    metric: "94% classification accuracy across 4 disease categories",
    featured: false,
    links: [{ label: "GitHub", url: "https://github.com/Tharindu1527/Chest_X-Ray_Classification" }],
  },
  {
    id: "elder-watch",
    image: `${import.meta.env.BASE_URL}images/projects/elder-watch.png`,
    title: "Elder Watch — Real-Time Fall Detection",
    tags: ["YOLOv8", "MediaPipe", "Raspberry Pi 5", "INT8 Quantization", "Edge AI"],
    summary:
      "Privacy-preserving fall-detection system running fully on-device on a Raspberry Pi 5: INT8-quantized YOLOv8 for person/fall detection, MediaPipe Pose (33 landmarks) for posture analysis, and optical-flow motion tracking, triggering SMS / Email / Telegram alerts on falls or prolonged inactivity.",
    metric: "Targeting 15–25 FPS at <30ms/frame and <5W power on a ~6MB quantized model",
    featured: true,
    links: [{ label: "GitHub", url: "https://github.com/Tharindu1527/Elder-Watch" }],
  },
  {
    id: "stock-market-mlops",
    image: `${import.meta.env.BASE_URL}images/projects/stock-market-mlops.png`,
    title: "Stock Market Predictor (MLOps)",
    tags: ["Django", "React", "PostgreSQL", "Docker", "Jenkins CI/CD"],
    summary:
      "End-to-end MLOps stock-prediction platform — Django backend, React (Vite) frontend, and PostgreSQL, fully containerised with Docker and wired to a Jenkins pipeline for continuous integration and deployment.",
    metric: "Full CI/CD pipeline from model to deployed web app via Jenkins + Docker",
    featured: true,
    links: [{ label: "GitHub", url: "https://github.com/Tharindu1527/Stock-Market-Predictor-MlOps-" }],
  },
  {
    id: "ai-plagiarism-detector",
    image: `${import.meta.env.BASE_URL}images/projects/ai-plagiarism-detector.png`,
    title: "AI Plagiarism Detector",
    tags: ["React", "Django", "SQLite", "Cosine Similarity", "LLM"],
    summary:
      "Full-stack plagiarism detection system for academic assignments — a Django + SQLite backend running a cosine-similarity engine against a React frontend, with LLM-based web-content comparison in active development. Led as project manager across a 4-person team.",
    metric: "Assignment-to-assignment similarity detection shipped; LLM web comparison in progress",
    featured: false,
    links: [{ label: "GitHub", url: "https://github.com/Tharindu1527/AI-P" }],
  },
  {
    id: "sl-id-ocr-api",
    image: `${import.meta.env.BASE_URL}images/projects/sl-id-ocr-api.png`,
    title: "Sri Lankan ID Card OCR API",
    tags: ["Django", "Tesseract OCR", "Docker", "REST API"],
    summary:
      "Dockerized Django REST API that extracts structured data — name, NIC number, date of birth, address — from photos of Sri Lankan National ID cards, using Tesseract OCR with Sinhala-language support.",
    metric: "Single endpoint: ID card image in → structured JSON out",
    featured: false,
    links: [{ label: "GitHub", url: "https://github.com/Tharindu1527/REST-API-for-Extract-Sri-Lankan-National-ID-Data" }],
  },
  {
    id: "nigeria-economy-dashboard",
    image: `${import.meta.env.BASE_URL}images/projects/nigeria-economy-dashboard.png`,
    title: "Nigeria Economy Price-Surge Dashboard",
    tags: ["Python", "Time-Series", "GDP/CPI Forecasting", "Data Viz"],
    summary:
      "Built during the Omdena Nigeria Chapter collaboration — an interactive dashboard analyzing the price surge across Nigerian essentials (food, transport, healthcare), sourcing data from the Central Bank of Nigeria, NBS, World Bank, and FRED to forecast GDP and CPI trends.",
    metric: "Live dashboard tracking Naira/USD value and cost-of-living indicators over time",
    featured: false,
    links: [{ label: "GitHub", url: "https://github.com/Tharindu1527/-KadunaNigeriaChapter_NigeriaEconomy" }],
  },
  {
    id: "covid19-forecasting",
    image: `${import.meta.env.BASE_URL}images/projects/covid19-forecasting.png`,
    title: "COVID-19 Case & Death Forecasting",
    tags: ["XGBoost", "Streamlit", "Python", "Time-Series"],
    summary:
      "Built during the Omdena Zambia (Kitwe Chapter) collaboration — an XGBoost-based forecasting pipeline predicting COVID-19 case and death counts from vaccination and testing data, served through a multi-page Streamlit dashboard.",
    metric: "End-to-end pipeline: preprocessing → feature engineering → XGBoost modelling → live dashboard",
    featured: false,
    links: [{ label: "GitHub", url: "https://github.com/Tharindu1527/Omdena_KitweChapter_ForecastingCOVID19Dynamics" }],
  },
  {
    id: "resume-analyzer",
    image: `${import.meta.env.BASE_URL}images/projects/resume-analyzer.png`,
    title: "Resume Analyzer (NLP)",
    tags: ["Streamlit", "NLP", "PostgreSQL", "PyResParser"],
    summary:
      "NLP-powered resume analysis tool that parses PDF resumes to extract skills and contact details, then recommends relevant courses and writing improvements — with an admin panel for visualizing aggregated applicant data.",
    metric: "Full pipeline: PDF parsing → skill extraction → course recommendation",
    featured: false,
    links: [{ label: "GitHub", url: "https://github.com/Tharindu1527/Resume-Analyzer-NLP-" }],
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
  {
    name: "Programming for Everybody (Getting Started with Python)",
    org: "University of Michigan · Coursera",
    date: "Mar 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/3UZLTCSJB5LH",
  },
  {
    name: "IEEEXtreme Region 10 — Certificate of Participation",
    org: "IEEE",
    date: "Mar 2025",
    url: "https://certificate.ieeextreme.org/generate-email-certificate/WGx7YkPUpGAh9K",
    image: `${import.meta.env.BASE_URL}images/certificates/ieeextreme-participation.jpg`,
  },
  {
    name: "Predicta 1.0 — Certificate of Participation",
    org: "University of Peradeniya",
    date: "Feb 2025",
    image: `${import.meta.env.BASE_URL}images/certificates/predicta-1.0.jpg`,
  },
  {
    name: "The Arduino Platform and C Programming",
    org: "UC Irvine · Coursera",
    date: "Feb 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/KO4OL9Y2HON6",
  },
  {
    name: "Reinforcement Learning From Human Feedback",
    org: "DeepLearning.AI",
    date: "Jan 2025",
    url: "https://learn.deeplearning.ai/accomplishments/0edfeee1-7bc8-4e46-994f-f0292debe7b9",
  },
  {
    name: "Generative AI Applications with RAG and LangChain",
    org: "IBM · Coursera",
    date: "Jan 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/IZ1WLX9ZTDHN",
    image: `${import.meta.env.BASE_URL}images/certificates/generative-ai-rag-langchain.jpg`,
  },
  {
    name: "Xtream ENCODE — Certificate of Appreciation",
    org: "IEEE",
    date: "Nov 2024",
    image: `${import.meta.env.BASE_URL}images/certificates/xtream-encode.jpg`,
  },
  {
    name: "Building Agentic RAG with LlamaIndex",
    org: "DeepLearning.AI",
    date: "Oct 2024",
    url: "https://learn.deeplearning.ai/accomplishments/3bd81ad1-0cc2-46da-9e30-4da787760ae0",
  },
  {
    name: "Introducing Multimodal Llama 3.2",
    org: "DeepLearning.AI",
    date: "Oct 2024",
    url: "https://learn.deeplearning.ai/accomplishments/1eda7e42-40a9-4593-b48a-9b266cce1424",
  },
  {
    name: "Building Your Own Database Agent",
    org: "DeepLearning.AI",
    date: "Oct 2024",
    url: "https://learn.deeplearning.ai/accomplishments/ee8f0975-d8b8-423d-b265-356db3871597",
  },
  {
    name: "Omdena Nigeria Chapter — Certificate of Completion",
    org: "Omdena",
    date: "Aug 2024",
    url: "https://confirm.omdena.com/LCylcoi",
    image: `${import.meta.env.BASE_URL}images/certificates/omdena-nigeria.jpg`,
  },
  {
    name: "Omdena Kitwe, Zambia Chapter — Certificate of Completion",
    org: "Omdena",
    date: "Jun 2024",
    url: "https://confirm.omdena.com/LCrfy5v",
    image: `${import.meta.env.BASE_URL}images/certificates/omdena-zambia.jpg`,
  },
  {
    name: "Introduction to Deep Learning & Neural Networks with Keras",
    org: "IBM · Coursera",
    date: "May 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/RF7492H9L4FQ",
  },
  {
    name: "Machine Learning with Python",
    org: "IBM · Coursera",
    date: "May 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/MRA7TGGT5BJ4",
  },
  {
    name: "TensorFlow Developer Professional Certificate",
    org: "DeepLearning.AI · Coursera",
    date: "May 2024",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/TRXE64GF4D29",
  },
  {
    name: "Sequences, Time Series and Prediction",
    org: "DeepLearning.AI · Coursera",
    date: "May 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/WELJUB749FRS",
  },
  {
    name: "Dialogflow CX: Bot Building Basics",
    org: "Google Cloud · Coursera",
    date: "Apr 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/HPQMQ9BQXJDB",
  },
  {
    name: "Introduction to Large Language Models",
    org: "Google Cloud · Coursera",
    date: "Mar 2024",
    url: "https://www.coursera.org/account/accomplishments/certificate/HWXKJ2DFCRRD",
  },
  {
    name: "Summarize Text using SQL and LLMs in BigQuery ML",
    org: "Google Cloud · Coursera",
    date: "Mar 2024",
    url: "https://www.coursera.org/account/accomplishments/certificate/VUX3NDNSHNEK",
  },
  {
    name: "Machine Learning with PySpark: Data Analysis using SQL",
    org: "Coursera",
    date: "Mar 2024",
    url: "https://www.coursera.org/account/accomplishments/certificate/LSQ9KFYUDLAX",
  },
  {
    name: "Natural Language Processing in TensorFlow",
    org: "DeepLearning.AI · Coursera",
    date: "Mar 2024",
    url: "https://www.coursera.org/account/accomplishments/certificate/5U46JMFW6PLK",
  },
  {
    name: "Deep Learning with PyTorch: Image Segmentation",
    org: "Coursera",
    date: "Feb 2024",
    url: "https://www.coursera.org/account/accomplishments/certificate/D7NFHN6JCYEL",
  },
  {
    name: "Generative AI: Prompt Engineering Basics",
    org: "IBM · Coursera",
    date: "Feb 2024",
    url: "https://www.coursera.org/account/accomplishments/certificate/XVBC48L52J3D",
  },
  {
    name: "Convolutional Neural Networks in TensorFlow",
    org: "DeepLearning.AI · Coursera",
    date: "Feb 2024",
    url: "https://www.coursera.org/account/accomplishments/records/ULP29DCZWMEU",
  },
  {
    name: "Introduction to TensorFlow for AI, ML, and Deep Learning",
    org: "DeepLearning.AI · Coursera",
    date: "Feb 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/P6VU8LG4HK25",
  },
  {
    name: "Advanced Learning Algorithms",
    org: "DeepLearning.AI · Coursera",
    date: "Feb 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/QPZ6G5NFJX2W",
  },
  {
    name: "Introduction to Generative AI",
    org: "Google Cloud · Coursera",
    date: "Feb 2024",
    url: "https://www.coursera.org/account/accomplishments/certificate/CUT9X9GPSZCB",
  },
  {
    name: "Prompt Engineering with GPT",
    org: "Coursera",
    date: "Feb 2024",
    url: "https://www.coursera.org/account/accomplishments/certificate/EPPAVNQ35JBE",
  },
  {
    name: "Neural Networks and Deep Learning",
    org: "DeepLearning.AI · Coursera",
    date: "Jan 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/WZXFB7GQYTCM",
  },
  {
    name: "CompTIA Cybersecurity Analyst (CySA+)",
    org: "CompTIA · Coursera",
    date: "Jan 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/V3QZ43494GR5",
  },
  { name: "Simulink Onramp", org: "MathWorks", date: "Oct 2023" },
  { name: "MATLAB Onramp", org: "MathWorks", date: "Sep 2023" },
  { name: "Introduction to Data Science", org: "Cisco", date: "Sep 2023" },
];
