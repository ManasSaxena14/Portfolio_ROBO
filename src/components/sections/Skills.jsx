import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { skillsData } from '../../data/skills';
import { glitchText } from '../../animations/gsap';
import { BsCpu } from 'react-icons/bs';

const SkillSection = ({ title, skills, color, index }) => {
    return (
        <motion.div
            className="w-full p-8 rounded-3xl bg-space-dark/50 backdrop-blur-sm border border-space-gray hover:border-neon-cyan/30 transition-all duration-500 group"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
        >
            {/* Section header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-space-black border border-space-gray shrink-0 group-hover:glow-cyan transition-all duration-300">
                    <BsCpu className="text-2xl" style={{ color }} />
                </div>
                <h3
                    className="text-2xl font-orbitron font-bold leading-tight"
                    style={{ color }}
                >
                    {title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-space-gray to-transparent ml-4" />
            </div>

            {/* Skills row - horizontal layout */}
            <div className="flex flex-wrap gap-6 justify-start">
                {skills.map((skill, skillIndex) => (
                    <motion.div
                        key={skill.name}
                        className="flex flex-col items-center gap-3 group/skill"
                        whileHover={{ scale: 1.1, y: -8 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                        title={skill.name}
                    >
                        <div className={`w-20 h-20 p-4 rounded-2xl border border-white/10 group-hover/skill:border-neon-cyan/50 transition-all flex items-center justify-center shadow-lg group-hover/skill:shadow-neon-cyan/20 ${skill.darkIcon ? 'bg-white/90' : 'bg-white/5 group-hover/skill:bg-white/10'}`}>
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-sm text-text-secondary font-mono text-center whitespace-nowrap">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const categories = Object.entries(skillsData);
    const titleRef = useRef(null);

    // Apply glitch effect to title on mount
    useEffect(() => {
        if (titleRef.current) {
            const cleanup = glitchText(titleRef.current);
            return cleanup;
        }
    }, []);

    return (
        <section id="skills" className="py-24 px-6 md:px-12 circuit-pattern">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Terminal-style prefix */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="terminal-text text-sm font-mono">$ system.load</span>
                        <span className="text-text-secondary text-sm font-mono">("skills.module")</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        SKILL <span ref={titleRef} className="text-neon-cyan">MATRIX</span>
                    </h2>
                    <p className="text-text-secondary text-lg font-space">
                        Core systems and technologies powering my development stack
                    </p>
                </motion.div>

                {/* Skill sections - vertical stacked layout */}
                <div className="flex flex-col gap-8">
                    {categories.map(([key, category], index) => (
                        <SkillSection
                            key={key}
                            title={category.title}
                            skills={category.skills}
                            color={category.color}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
