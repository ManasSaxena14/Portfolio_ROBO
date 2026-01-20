import jsIcon from '../assets/JavaScript.png';
import tsIcon from '../assets/TypeScript.png';
import pyIcon from '../assets/Python.png';
import cIcon from '../assets/c-.png';
import htmlIcon from '../assets/HTML5.png';
import cssIcon from '../assets/CSS3.png';
import reactIcon from '../assets/React.png';
import nextIcon from '../assets/Next.js.png';
import framerIcon from '../assets/FRAMER MOTION.png';
import tailwindIcon from '../assets/Tailwind CSS.png';
import shadcnIcon from '../assets/SHADCN.png';
import gsapIcon from '../assets/GSAP.png';
import nodeIcon from '../assets/Node.js.png';
import expressIcon from '../assets/Express.png';
import mongoIcon from '../assets/MongoDB.png';
import mysqlIcon from '../assets/MySQL.png';
import postgresIcon from '../assets/PostgresSQL.png';
import firebaseIcon from '../assets/Firebase.png';
import supabaseIcon from '../assets/SUPABASE.webp';
import stripeIcon from '../assets/STRIPE.svg';
import jwtIcon from '../assets/JWT.png';
import githubIcon from '../assets/GitHub.png';
import vscodeIcon from '../assets/Visual Studio Code (VS Code).png';
import postmanIcon from '../assets/Postman.png';
import compassIcon from '../assets/COMPASS.svg';
import vercelIcon from '../assets/Vercel.png';
import netlifyIcon from '../assets/NETLIFY.png';
import renderIcon from '../assets/RENDER.png';
import figmaIcon from '../assets/Figma.png';
import canvaIcon from '../assets/Canva.png';
import eslintIcon from '../assets/ESLint.png';

export const skillsData = {
    coreLanguages: {
        title: "Core Languages",
        color: "#4d7cff",
        skills: [
            { name: "JavaScript", icon: jsIcon, level: 5 },
            { name: "TypeScript", icon: tsIcon, level: 4 },
            { name: "Python", icon: pyIcon, level: 4 },
            { name: "C", icon: cIcon, level: 3 },
            { name: "HTML5", icon: htmlIcon, level: 5 },
            { name: "CSS3", icon: cssIcon, level: 5 }
        ]
    },
    frontend: {
        title: "Frontend",
        color: "#00fff5",
        skills: [
            { name: "React", icon: reactIcon, level: 5 },
            { name: "Next.js", icon: nextIcon, level: 4, darkIcon: true },
            { name: "Framer Motion", icon: framerIcon, level: 4, darkIcon: true },
            { name: "Tailwind CSS", icon: tailwindIcon, level: 5 },
            { name: "SHADCN", icon: shadcnIcon, level: 4, darkIcon: true },
            { name: "GSAP", icon: gsapIcon, level: 3, darkIcon: true }
        ]
    },
    backend: {
        title: "Backend",
        color: "#ffa116",
        skills: [
            { name: "Node.js", icon: nodeIcon, level: 5 },
            { name: "Express", icon: expressIcon, level: 5, darkIcon: true },
            { name: "MongoDB", icon: mongoIcon, level: 4 },
            { name: "MySQL", icon: mysqlIcon, level: 3 },
            { name: "PostgreSQL", icon: postgresIcon, level: 4 },
            { name: "Firebase", icon: firebaseIcon, level: 4 },
            { name: "Supabase", icon: supabaseIcon, level: 3 },
            { name: "Stripe", icon: stripeIcon, level: 3, darkIcon: true },
            { name: "JWT", icon: jwtIcon, level: 4 }
        ]
    },
    tools: {
        title: "Tools",
        color: "#bf00ff",
        skills: [
            { name: "GitHub", icon: githubIcon, level: 5, darkIcon: true },
            { name: "VS Code", icon: vscodeIcon, level: 5 },
            { name: "Postman", icon: postmanIcon, level: 4 },
            { name: "Compass", icon: compassIcon, level: 4 },
            { name: "Vercel", icon: vercelIcon, level: 5, darkIcon: true },
            { name: "Netlify", icon: netlifyIcon, level: 4 },
            { name: "Render", icon: renderIcon, level: 4 },
            { name: "Figma", icon: figmaIcon, level: 3 },
            { name: "Canva", icon: canvaIcon, level: 4 },
            { name: "ESLint", icon: eslintIcon, level: 4 }
        ]
    }
};
