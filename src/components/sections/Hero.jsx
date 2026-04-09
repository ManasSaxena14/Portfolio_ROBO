import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { fadeInUp, staggerContainer, floatAnimation } from '../../animations/variants';
import { magneticEffect, glitchText } from '../../animations/gsap';
import { FiDownload } from 'react-icons/fi';
import { BsCpu, BsCodeSlash, BsLightningCharge } from 'react-icons/bs';
import heroImage from '../../assets/HERO IMAGE.jpg';

const Hero = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const titles = [
        "FULL STACK DEVELOPER",
        "DATA ANALYST",
        "FINANCE ENTHUSIAST",
        "AI ENTHUSIAST",
        "PROGRAMMER"
    ];

    const nameRef = useRef(null);
    const downloadBtnRef = useRef(null);
    const contactBtnRef = useRef(null);

    // Typewriter effect
    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    // GSAP glitch effect on name
    useEffect(() => {
        if (nameRef.current) {
            const cleanup = glitchText(nameRef.current);
            return cleanup;
        }
    }, []);

    // Magnetic effect on buttons
    useEffect(() => {
        const cleanupFns = [];
        if (downloadBtnRef.current) {
            cleanupFns.push(magneticEffect(downloadBtnRef.current));
        }
        if (contactBtnRef.current) {
            cleanupFns.push(magneticEffect(contactBtnRef.current));
        }
        return () => cleanupFns.forEach(fn => fn && fn());
    }, []);

    // Mouse parallax and 3D tilt effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set((clientX - innerWidth / 2) / 50);
        mouseY.set((clientY - innerHeight / 2) / 50);
    };

    const x = useTransform(mouseX, [-15, 15], [-15, 15]);
    const y = useTransform(mouseY, [-15, 15], [-15, 15]);
    const rotateX = useTransform(mouseY, [-15, 15], [8, -8]);
    const rotateY = useTransform(mouseX, [-15, 15], [-8, 8]);

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center z-10"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                {/* Left: Text Content */}
                <motion.div variants={fadeInUp} className="space-y-6 lg:pe-10">
                    {/* Terminal-style greeting */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "backOut" }}
                    >
                        <BsCpu className="text-neon-cyan text-lg animate-pulse" />
                        <span className="terminal-text text-sm font-mono tracking-wider">system.initialize()</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-text-primary leading-tight font-syne drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Manas <span ref={nameRef} className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-blue glitch-text">Saxena</span>
                    </motion.h1>

                    {/* Animated Title Loop with AnimatePresence */}
                    <div className="min-h-[4rem] flex items-center overflow-visible">
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={titleIndex}
                                className="text-3xl md:text-4xl font-syne font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-electric-blue to-neon-purple drop-shadow-[0_0_15px_rgba(0,255,245,0.4)]"
                                initial={{ y: 20, opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
                                animate={{ y: 0, opacity: 1, filter: 'blur(0px)', scale: 1 }}
                                exit={{ y: -20, opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                {titles[titleIndex]}
                            </motion.h2>
                        </AnimatePresence>
                    </div>

                    {/* Power Statement */}
                    <motion.div
                        className="space-y-4 text-lg md:text-xl leading-relaxed font-space border-l-2 border-neon-cyan/30 pl-5"
                        variants={staggerContainer}
                    >
                        <motion.p variants={fadeInUp} className="text-text-secondary">
                            I design and build <span className="text-neon-cyan font-semibold drop-shadow-[0_0_8px_rgba(0,255,245,0.5)]">intelligent digital systems</span> where code, data, AI, and finance converge.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-text-secondary">
                            Leveraging <span className="text-electric-blue font-semibold">DSA, advanced analytics, and full-stack development</span> to turn complex problems into scalable, high-impact solutions.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-text-secondary">
                            Obsessed with <span className="text-neon-purple font-semibold">execution, systems thinking,</span> and growth.
                        </motion.p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-5 pt-8"
                        variants={fadeInUp}
                    >
                        <motion.a
                            ref={contactBtnRef}
                            href="#contact"
                            className="px-8 py-3.5 bg-gradient-to-r from-neon-cyan to-electric-blue text-space-black font-bold rounded-lg shadow-[0_0_20px_rgba(0,255,245,0.4)] hover:shadow-[0_0_30px_rgba(0,255,245,0.7)] transition-all duration-300 flex items-center gap-2"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <BsLightningCharge className="text-lg" />
                            Get In Touch
                        </motion.a>
                        <motion.a
                            href="#projects"
                            className="px-8 py-3.5 border-2 border-neon-cyan/80 text-neon-cyan font-bold rounded-lg hover:bg-neon-cyan/10 backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <BsCodeSlash className="text-lg" />
                            View Projects
                        </motion.a>
                        <motion.a
                            ref={downloadBtnRef}
                            href="https://drive.google.com/file/d/11ZtoUAAafmtGz8L12mtKpquivL5s2KJj/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="download-btn px-8 py-3.5 text-neon-cyan font-bold rounded-lg flex items-center gap-2 bg-space-gray/50 backdrop-blur-md"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiDownload className="text-xl" />
                            Download CV
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right: Profile Image with 3D Robotic Frame */}
                <motion.div
                    className="flex justify-center perspective-[1200px]"
                    style={{ perspective: 1200 }}
                >
                    <motion.div
                        className="relative w-72 h-72 md:w-96 md:h-96 transform-style-3d"
                        variants={floatAnimation}
                        animate="animate"
                        style={{ x, y, rotateX, rotateY, transformStyle: "preserve-3d" }}
                    >
                        {/* Robotic outer frame with layered glow */}
                        <div className="absolute inset-0 robot-frame rounded-full shadow-[0_0_60px_rgba(0,255,245,0.2)]" style={{ transform: "translateZ(20px)" }}>
                            {/* Hologram frame */}
                            <div className="absolute inset-0 rounded-full hologram animate-pulse-glow"></div>
                        </div>

                        {/* Rotating orbital rings with 3D separation */}
                        <motion.div
                            className="absolute -inset-4 border-2 border-dashed border-neon-cyan/30 rounded-full"
                            style={{ transform: "translateZ(10px)" }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute -inset-8 border border-dotted border-electric-blue/40 rounded-full"
                            style={{ transform: "translateZ(-10px)" }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                        />
                        
                        {/* Outermost sweeping arc */}
                        <motion.div 
                            className="absolute -inset-12 border-t-2 border-r-2 border-neon-cyan/20 rounded-full opacity-50"
                            style={{ transform: "translateZ(30px)" }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Core Image Container */}
                        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-neon-cyan via-electric-blue to-neon-purple flex items-center justify-center p-[3px] shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]" style={{ transform: "translateZ(40px)" }}>
                            <div className="w-full h-full rounded-full overflow-hidden bg-space-black relative group">
                                <img
                                    src={heroImage}
                                    alt="Manas Saxena"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-space-black/60 to-transparent mix-blend-overlay"></div>
                            </div>
                        </div>

                        {/* Corner status indicators in 3D space */}
                        <div className="absolute top-2 left-6 w-4 h-4 rounded-full bg-terminal-green shadow-[0_0_15px_rgba(57,255,20,0.8)] animate-pulse" style={{ transform: "translateZ(60px)" }} />
                        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_15px_rgba(0,255,245,0.8)] animate-pulse" style={{ transform: "translateZ(50px)", animationDelay: '0.5s' }} />
                        <div className="absolute bottom-6 -left-2 w-3 h-3 rounded-full bg-electric-blue shadow-[0_0_15px_rgba(77,124,255,0.8)] animate-pulse" style={{ transform: "translateZ(70px)", animationDelay: '1s' }} />
                        <div className="absolute -bottom-2 right-4 w-4 h-4 rounded-full bg-neon-purple shadow-[0_0_15px_rgba(191,0,255,0.8)] animate-pulse" style={{ transform: "translateZ(30px)", animationDelay: '1.5s' }} />

                        {/* Orbiting data particles */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                            style={{ originX: 0.5, originY: -14, transform: "translateZ(80px)" }}
                        />
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-2 h-2 bg-neon-cyan rounded-full shadow-[0_0_10px_var(--color-neon-cyan)]"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            style={{ originX: 0.5, originY: 18, transform: "translateZ(20px)" }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
