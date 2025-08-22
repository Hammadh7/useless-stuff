import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiTailwindcss,
  SiMysql, 
  SiPython,
  SiExpress,
  SiAngular,
  SiTensorflow,
  SiPytorch,
  SiPostman,
  SiMongodb,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaLinux } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineHome,
} from "react-icons/ai";
import { BsTwitter, BsFillPersonVcardFill, BsGit, BsCpu } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdAutoAwesome } from "react-icons/md"; // for AutoGen/Agentic AI
import { BiBrain } from "react-icons/bi"; // for LLMs

export const skillsData = [
  {
    category: "Languages",
    icons: [
      { icon: TbBrandCpp, size: "w-5 h-5" },
      { icon: SiJavascript, size: "w-5 h-5" },
      { icon: SiPython, size: "w-5 h-5" },
      { icon: SiMysql, size: "w-5 h-5" },
    ],
  },
  {
    category: "Libraries/Frameworks",
    icons: [
      { icon: SiTailwindcss, size: "w-5 h-5", label: "TailwindCSS" },
      { icon: FaReact, size: "w-5 h-5", label: "React" },
      { icon: SiAngular, size: "w-5 h-5", label: "Angular" },
      { icon: TbBrandNextjs, size: "w-5 h-5", label: "Next.js" },
      { icon: SiMongodb, size: "w-5 h-5", label: "MongoDB" }, // ✅ fixed
      { icon: SiExpress, size: "w-5 h-5", label: "Express" },
      // { icon: MdAutoAwesome, size: "w-5 h-5", label: "Microsoft AutoGen" },
      // { icon: MdAutoAwesome, size: "w-5 h-5", label: "LangChain" },
      // { icon: MdAutoAwesome, size: "w-5 h-5", label: "LangGraph" },
    ],
  },
  {
    category: "Domains",
    icons: [
      { icon: FaReact, size: "w-5 h-5", label: "Web Dev" },
      { icon: GiArtificialIntelligence, size: "w-5 h-5", label: "AI/ML" },
      { icon: BiBrain, size: "w-5 h-5", label: "LLMs" },
      { icon: MdAutoAwesome, size: "w-5 h-5", label: "Agentic AI" },
      { icon: BsCpu, size: "w-5 h-5", label: "Systems Programming" },
      // { icon: RiBitcoinFill, size: "w-5 h-5", label: "Blockchain/Finance Tech" },
    ],
  },
  {
    category: "ML Libraries",
    icons: [
      { icon: SiTensorflow, size: "w-5 h-5", label: "TensorFlow" },
      { icon: SiPytorch, size: "w-5 h-5", label: "PyTorch" },
    ],
  },
  {
    category: "Tools/Technologies",
    icons: [
      { icon: BsGit, size: "w-5 h-5", label: "Git" },
      { icon: FaLinux, size: "w-5 h-5", label: "Linux" },
      { icon: SiPostman, size: "w-5 h-5", label: "Postman" }, // ✅ added
    ],
  },
];





export const resumeLink = "/resume.pdf";

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/hammad-hashmi-b278a625a/",
    icon: AiFillLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Hammadh7",
    icon: AiFillGithub,
    label: "GitHub",
  },
  {
    href: "mailto:hammadhashmi303@gmail.com",
    icon: AiFillMail,
    label: "Email",
  },
]

export const navLinks = [
  { href: "/home", icon: AiOutlineHome, label: "Home" },
  { href: "/about", icon: BsFillPersonVcardFill, label: "About" },
];

export const experiences = [
  {
    role: "Mentee",
    company: "Amazon ML Summer School",
    companyUrl: "https://www.amazon.science/academic-engagements/amazon-launches-annual-ml-summer-school-in-india",
    period: "August 2025 - September 2025",
    responsibilities: [
      "Selected as one of the 3k mentees from 60k+ applicants for Amazon's prestigious ML Summer School.",
      "Engaged in intensive training on machine learning concepts, algorithms, and real-world applications."
    ],
  },

  {
    role: "Open Source Contributor",
    company: "CERN-HSF",
    companyUrl: "https://github.com/vgvassilev/clad/pull/1280",
    period: "January 2025 - Present",
    responsibilities: [
      " Contributed to Clad by submitting 5+ PRs, resolving open issues, and implementing new features",
      " Collaborated with the core development team to enhance the functionality and performance of the C++ library",
      "Refactored and extended differentiation logic for overloaded operators along with test files with the maintainers",
    ],
  },

  {
    role: "Co-Founder",
    company: "TheSkillShow",
    companyUrl: "https://www.youtube.com/@tss.TheSkillShow/",
    period: "August 2023 - Present",
    responsibilities: [
      "Co-founded TheSkillShow, a YouTube channel dedicated to Niche Skill People.",
      "Produced  videos along with content creation and promotion."
    ],
  },
];

export const openSourceContributions = [
  {
    name: "CodeForces",
    link: "https://codeforces.com/profile/Hammad_h7",
    // handle: "@zowe",
  },
  {
    name: "CodeChef",
    link: "https://www.codechef.com/users/adorn_dawn_15",
    // handle: "@CircuitVerse",
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/ahmaq/",
    // handle: "@oppia",
  },
  
];

export const projectsData = [
  {
    name: "ArrayCoin",
    duration: "Dec 2024 - Jan 2025",
    domain: "MISC",
    githubLink: "https://github.com/Hammadh7/bitcoin-from-scratch",
    description: [
      "Implemented a custom Bitcoin prototype with Array as the core Data Structure and key cryptocurrency features.",
      "Exposed RESTful endpoints for wallet & transaction management including PoW mining and block validation.",
    ],
    category: "Backend Development",
    techStack: "JavaScript , Express.js, Unit Testing, OOP",
  },
  {
    name: "Network Security Threat Detection Pipeline",
    duration: "May 2025 - Jul 2025",
      githubLink: "https://github.com/Hammadh7/ml-aws",
    domain: "DATA SCIENCE",
    description: [
      "Processed 100K+ network events/min through automated ETL in Pandas/NumPy.",
      "Achieved 97.2% detection accuracy and orchestrated MLflow experiments with Optuna for tuning.",
      "Containerized services with Docker and automated CI/CD with schema compliance.",
    ],
    category: "Data Science",
    techStack: "Python, Pandas, NumPy, MLflow, AWS, CI/CD, Docker, MongoDB",
  },
 {
    name: "Ollama Web Scraping Engine",
    duration: "Aug 2024",
    githubLink: "https://github.com/Hammadh7/adv-webscraper",
    domain: "DATA ENGINEERING",
    description: [
      "Developed a modular, recursive web crawler in Python using Requests and BeautifulSoup to navigate websites and extract structured data up to a specified depth.",
      "Intergrated llama model for effective handling of the data",
    ],
    category: "Data Engineering",
    techStack: "Python, Requests, BeautifulSoup, Ollama, CI/CD, Streamlit"
  },
  {
    name: "International Conference Website",
    duration: "Jun 2025 - Aug 2025",
    githubLink: "http://aidccsp24.nith.ac.in/",
    domain: "FRONT-END DEVELOPMENT",
    description: [
      "Developed and deployed the official, fully responsive website for an international conference using HTML5, CSS3, and JavaScript, built upon the Bootstrap framework.",
      "Enhanced user experience with dynamic features, including a live countdown timer, smooth scrolling, and engaging 'Animate On Scroll' (AOS) animations.",
      "Ensured consistent performance and visual appeal across all major web browsers and deployed the static site efficiently using GitHub Pages."
    ],
    category: "Web Development",
    techStack: "HTML, CSS, JavaScript, Bootstrap, jQuery, AOS, GitHub Pages"
  },
  {
    name: " Human Follower Robot",
    duration: "Jan 2024 - Feb 2024",
    githubLink: "https://github.com/Hammadh7/Human_follower_bot",
    domain: "ROBOTICS & COMPUTER VISION",
    description: [
      "Developed a real-time human-following robot using Arduino IDE in cpp",
      "Used IR and SONAR sensors for hand following and Distance calculation.",
      "Integrated software with a physical robot chassis, a motor driver to translate serial commands into precise physical movements."
    ],
    category: "Robotics",
    techStack: " Arduino, C++, IR Sensors, SONAR Sensors, Motor Driver"
  },
  {
    name: "LLM Engineering: Llama 4 from Scratch",
    duration: "Aug 2025 - Oct 2025",
    githubLink: "https://github.com/Hammadh7/llama4",
    domain: "ARTIFICIAL INTELLIGENCE",
    description: [
      "Implemented a Llama 4-style transformer model from the ground up in Python, mastering core concepts like Byte-Pair Encoding, self-attention, and Mixture-of-Experts (MoE).",
      "Engineered and coded key architectural components including Rotary Positional Embeddings (RoPE), RMSNorm, and SwiGLU activation functions for enhanced model performance.",
      "Developed a complete training and inference pipeline, gaining hands-on experience with tokenization, embedding layers, and advanced sampling techniques (Greedy, Top-K)."
    ],
    category: "AI/ML",
    techStack: "Python, PyTorch, Transformers, Jupyter, NumPy, Hugging Face"
  },
  {
    name: "Autonomous AI Research Agent",
    duration: "Sep 2025 - Oct 2025",
    githubLink: "https://github.com/Hammadh7/research-agent",
    domain: "AI ENGINEERING",
    description: [
      "Engineered an autonomous research agent using LangChain, integrating large language models (Groq, OpenAI) with specialized web search tools (Tavily).",
      "Designed a multi-step agentic workflow to process user queries, perform targeted web searches, and synthesize gathered information into coherent reports.",
      "Implemented a Markdown-based report generation system and utilized Streamlit to create an interactive user interface for seamless agent operation."
    ],
    category: "AI/ML",
    techStack: "Python, Microsoft Autogen, OpenAI Streamlit"
  },

  
];
