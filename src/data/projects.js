import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';

export const projectsData = [
    {
        id: 1,
        title: "CARTIFY AI — Where AI Meets E-Commerce",
        description: "Intelligence – AI search, Recommendations, Conversational Chatbot. Commerce – Admin Dashboard, Payments, Orders, Security, Filter & Sort. Scalability – MERN stack, Cloud Deployment, Responsive UI.",
        image: project1,
        techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "AI/ML"],
        keyFeatures: [
            "AI-powered product search and recommendations",
            "Conversational AI Chatbot for customer support",
            "Secure payment integration with Stripe",
            "Full-featured Admin Dashboard",
            "Advanced filtering and sorting capabilities",
            "Cloud-ready MERN stack architecture"
        ],
        liveUrl: "https://cartify-ai-gamma.vercel.app",
        githubUrl: "https://github.com/ManasSaxena14/CARTIFY-AI"
    },
    {
        id: 2,
        title: "BidVerse — Premium Auction Platform",
        description: "Intelligence – Live auction system with real-time bidding, instant updates, and strict bid validation. Commerce – Secure JWT authentication, role-based access control, auction management, and post-auction reviews. Scalability – MERN stack architecture, full CRUD operations, cloud-ready backend, and responsive UI.",
        image: project2,
        techStack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
        keyFeatures: [
            "Live real-time bidding system",
            "Instant bid updates and notifications",
            "Secure JWT authentication",
            "Role-based access control",
            "Complete auction management",
            "Post-auction review system"
        ],
        liveUrl: "https://bidverse-auction-platform.vercel.app",
        githubUrl: "https://github.com/ManasSaxena14/BIDVERSE---AUCTION-PLATFORM"
    },
    {
        id: 3,
        title: "AxiomAI — GPT Intelligence",
        description: "Intelligence – Multi-Mode AI System with Standard Chat, Code Mode, and Deep Thinking with automatic, invisible model routing for optimal responses. Experience – Premium ChatGPT-Class UX with Glassmorphic UI, smart chat controls (Pin, Share, Delete), optimistic interactions, and global toast notifications. Security & Scalability – Production-Ready MERN Platform with secure JWT authentication, privacy-first architecture, zero-console policy, responsive design, and cloud-ready deployment.",
        image: project3,
        techStack: ["React", "Node.js", "MongoDB", "Express", "JWT", "OpenAI API"],
        keyFeatures: [
            "Multi-Mode AI System (Chat, Code, Deep Thinking)",
            "Automatic invisible model routing",
            "Premium Glassmorphic UI design",
            "Smart chat controls (Pin, Share, Delete)",
            "Secure JWT authentication",
            "Privacy-first architecture with zero-console policy"
        ],
        liveUrl: "https://axiomai-two.vercel.app/chat",
        githubUrl: "https://github.com/ManasSaxena14/AXIOM_AI--LLM-.git"
    },
    {
        id: 4,
        title: "Crypto X Tracker — Live Market Intelligence",
        description: "Real-Time Tracking – Get live prices of the top 15 cryptocurrencies with multi-currency support (USD, EUR, INR). Smart Tools – Analyze trends with interactive charts and manage your portfolio with instant profit/loss calculations. Seamless Experience – Responsive, intuitive UI built with React.js for smooth use across devices.",
        image: project4,
        techStack: ["React", "JavaScript", "Chart.js", "Crypto API", "CSS3"],
        keyFeatures: [
            "Live prices for top 15 cryptocurrencies",
            "Multi-currency support (USD, EUR, INR)",
            "Interactive trend analysis charts",
            "Portfolio management with profit/loss tracking",
            "Responsive UI across all devices",
            "Real-time data updates"
        ],
        liveUrl: "https://crypto-x-tracker.netlify.app",
        githubUrl: "https://github.com/ManasSaxena14/React-SEM-2-PROJECT"
    },
    {
        id: 5,
        title: "FinanceIQ — Smart Money Intelligence [UPCOMING]",
        description: "Intelligence – AI-driven expense classification and spending predictions powered by Python ML microservices. Automation – Smart budgeting recommendations, automated savings goals, and proactive financial alerts. Enterprise-Grade – Full-stack Next.js platform with PostgreSQL, Prisma ORM, secure JWT authentication, and visual financial dashboards.",
        image: project5,
        techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Python", "AI/ML", "Tailwind CSS"],
        keyFeatures: [
            "AI-powered expense categorization",
            "Monthly spending predictions with ML",
            "Smart budgeting & savings recommendations",
            "Visual financial dashboards with Recharts",
            "Secure JWT authentication (Access + Refresh)",
            "Proactive financial alerts & insights"
        ],
        liveUrl: "#",
        githubUrl: "#",
        upcoming: true
    }
];
