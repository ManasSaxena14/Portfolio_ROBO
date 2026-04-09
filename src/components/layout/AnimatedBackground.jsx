import { motion } from 'framer-motion';
import { useMemo } from 'react';

const AnimatedBackground = () => {
    // Generate random particles
    const particles = useMemo(() => {
        return Array.from({ length: 60 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1,
            duration: Math.random() * 8 + 15,
            delay: Math.random() * 5
        }));
    }, []);

    // Generate stars
    const stars = useMemo(() => {
        return Array.from({ length: 150 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.7 + 0.3
        }));
    }, []);

    // Generate energy nodes
    const energyNodes = useMemo(() => {
        return Array.from({ length: 8 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 300 + 200,
            color: i % 2 === 0 ? 'rgba(0, 255, 245, 0.15)' : 'rgba(191, 0, 255, 0.15)'
        }));
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-space-black pointer-events-none">
            {/* Base Background */}
            <div className="absolute inset-0 bg-[#020205]" />

            {/* Stars with gentle flicker */}
            {stars.map((star) => (
                <motion.div
                    key={`star-${star.id}`}
                    className="absolute rounded-full bg-white will-change-opacity"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                    animate={{
                        opacity: [star.opacity, star.opacity * 0.3, star.opacity]
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}

            {/* Animated Grid lines */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0, 255, 245, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 245, 0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '100px 100px',
                    perspective: '1000px'
                }}
            />

            {/* Floating Energy Clusters */}
            {energyNodes.map((node) => (
                <motion.div
                    key={`energy-${node.id}`}
                    className="absolute rounded-full will-change-transform"
                    style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        width: `${node.size}px`,
                        height: `${node.size}px`,
                        background: `radial-gradient(circle, ${node.color} 0%, transparent 70%)`
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                        x: [0, Math.random() * 50 - 25, 0],
                        y: [0, Math.random() * 50 - 25, 0]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}

            {/* Floating particles - Comet-like effect */}
            {particles.map((particle) => (
                <motion.div
                    key={`particle-${particle.id}`}
                    className="absolute rounded-full will-change-transform"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        background: particle.id % 3 === 0
                            ? 'radial-gradient(circle, rgba(191,0,255,0.8) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(0,255,245,0.8) 0%, transparent 70%)',
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, -50, 0],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0]
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}

            {/* Fast-moving data lines */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={`line-${i}`}
                    className="absolute h-px w-64 bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-20 will-change-transform"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: 0
                    }}
                    animate={{
                        x: ['-20vw', '120vw']
                    }}
                    transition={{
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                />
            ))}

            {/* Scanning Laser */}
            <motion.div
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent will-change-transform"
                style={{ top: 0 }}
                animate={{
                    y: ['-10vh', '110vh']
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,245,0.03)_0%,transparent_70%)]" />
        </div>
    );
};

export default AnimatedBackground;
