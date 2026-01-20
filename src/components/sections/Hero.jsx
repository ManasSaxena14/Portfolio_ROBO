import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { fadeInUp, staggerContainer, floatAnimation } from '../../animations/variants';
import { magneticEffect, glitchText } from '../../animations/gsap';
import { FiDownload } from 'react-icons/fi';
import { BsCpu, BsRobot } from 'react-icons/bs';
import heroImage from '../../assets/HERO IMAGE.jpg';

const Hero = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const titles = [
        "FULL STACK DEVELOPER",
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
        }, 3000);
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

    // Mouse parallax effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set((clientX - innerWidth / 2) / 50);
        mouseY.set((clientY - innerHeight / 2) / 50);
    };

    const x = useTransform(mouseX, [-10, 10], [-10, 10]);
    const y = useTransform(mouseY, [-10, 10], [-10, 10]);

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center px-6 md:px-12 relative"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                {/* Left: Text Content */}
                <motion.div variants={fadeInUp} className="space-y-6">
                    {/* Terminal-style greeting */}
                    <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <BsCpu className="text-neon-cyan text-lg" />
                        <span className="terminal-text text-sm font-mono">system.initialize()</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-text-primary"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Manas <span ref={nameRef} className="text-neon-cyan glitch-text">Saxena</span>
                    </motion.h1>

                    {/* Animated Title Loop */}
                    <div className="min-h-[4rem] flex items-center">
                        <motion.h2
                            key={titleIndex}
                            className="text-2xl md:text-3xl font-syne font-extrabold text-electric-blue"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {titles[titleIndex]}
                        </motion.h2>
                    </div>

                    {/* Power Statement */}
                    <motion.div
                        className="space-y-4 text-lg md:text-xl leading-relaxed font-space"
                        variants={staggerContainer}
                    >
                        <motion.p variants={fadeInUp} className="text-text-secondary">
                            I build <span className="text-neon-cyan font-semibold">scalable digital products</span> at the intersection of code, finance, and intelligence.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-text-secondary">
                            Focused on <span className="text-electric-blue font-semibold">clean systems</span>, powerful interfaces, and real-world impact.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-text-secondary">
                            Driven by <span className="text-neon-purple font-semibold">execution, ownership</span>, and continuous growth.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-text-secondary">
                            Sharpening <span className="text-terminal-green font-semibold">problem-solving skills</span> through DSA and competitive programming.
                        </motion.p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-4 pt-4"
                        variants={fadeInUp}
                    >
                        <motion.a
                            ref={contactBtnRef}
                            href="#contact"
                            className="px-8 py-3 bg-neon-cyan text-space-black font-semibold rounded-lg hover:bg-electric-blue transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.a>
                        <motion.a
                            href="#projects"
                            className="px-8 py-3 border-2 border-neon-cyan text-neon-cyan font-semibold rounded-lg hover:bg-neon-cyan hover:text-space-black transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            ref={downloadBtnRef}
                            href="https://drive.google.com/uc?export=download&id=1TAboedvHvRMVWciJEgV6m4ObnYZ__nwV"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="download-btn px-8 py-3 text-neon-cyan font-semibold rounded-lg flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiDownload className="text-lg" />
                            Download CV
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right: Profile Image with Robotic Frame */}
                <motion.div
                    className="flex justify-center"
                    style={{ x, y }}
                >
                    <motion.div
                        className="relative w-72 h-72 md:w-96 md:h-96"
                        variants={floatAnimation}
                        animate="animate"
                    >
                        {/* Robotic outer frame with enhanced glow */}
                        <div className="absolute inset-0 robot-frame rounded-full">
                            {/* Hologram frame */}
                            <div className="absolute inset-0 rounded-full hologram animate-pulse-glow shadow-[0_0_50px_rgba(0,255,245,0.3)]"></div>
                        </div>

                        {/* Rotating orbital rings */}
                        <motion.div
                            className="absolute -inset-4 border-2 border-dashed border-neon-cyan/20 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute -inset-8 border border-dotted border-electric-blue/10 rounded-full"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        />

                        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-neon-cyan via-electric-blue to-neon-purple flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src={heroImage}
                                    alt="Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Corner status indicators */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 bg-terminal-green rounded-full animate-pulse" />
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon-cyan rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-electric-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />

                        {/* Orbiting particles */}
                        <motion.div
                            className="absolute top-0 left-1/2 w-4 h-4 bg-neon-cyan rounded-full"
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                originX: 0.5,
                                originY: 12,
                            }}
                        />
                        <motion.div
                            className="absolute top-0 left-1/2 w-3 h-3 bg-electric-blue rounded-full"
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                originX: 0.5,
                                originY: 16,
                            }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
