import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { tilt3D } from '../../animations/gsap';

const SkillCard = ({ skill, color, index }) => {
    const cardRef = useRef(null);

    // GSAP 3D tilt effect
    useEffect(() => {
        if (cardRef.current) {
            const cleanup = tilt3D(cardRef.current);
            return cleanup;
        }
    }, []);

    // Calculate proficiency width
    const proficiencyWidth = (skill.level / 5) * 100;

    return (
        <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
        >
            <div
                ref={cardRef}
                className="circuit-border flex flex-col items-center gap-3 p-5 rounded-xl bg-space-dark hover:bg-space-gray transition-all duration-300 scan-line"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 rounded-tl-lg opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{ borderColor: color }}
                />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 rounded-tr-lg opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{ borderColor: color }}
                />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 rounded-bl-lg opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{ borderColor: color }}
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 rounded-br-lg opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{ borderColor: color }}
                />

                {/* Icon/Image */}
                <motion.div
                    className="w-14 h-14 p-2 rounded-xl bg-white/5 border border-white/10 transition-transform duration-300 flex items-center justify-center group-hover:bg-white/10"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain filter drop-shadow-[0_0_2px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    />
                </motion.div>

                {/* Name */}
                <span className="text-sm font-bold text-text-primary transition-colors duration-300 font-syne uppercase tracking-wider">
                    {skill.name}
                </span>

                {/* Proficiency bar */}
                <div className="w-full proficiency-bar mt-1">
                    <motion.div
                        className="proficiency-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${proficiencyWidth}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.05 + 0.2 }}
                        style={{
                            background: `linear-gradient(90deg, ${color}, ${color}80)`
                        }}
                    />
                </div>

                {/* Glow effect on hover */}
                <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    style={{
                        background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`
                    }}
                />

                {/* Scan line overlay */}
                <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: `repeating-linear-gradient(
                            0deg,
                            transparent,
                            transparent 2px,
                            ${color}10 2px,
                            ${color}10 4px
                        )`
                    }}
                />
            </div>
        </motion.div>
    );
};

export default SkillCard;
