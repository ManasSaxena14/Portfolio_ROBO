import { motion } from 'framer-motion';
import { educationData } from '../../data/education';
import { FiBook } from 'react-icons/fi';

const EducationCard = ({ education, index }) => {
    return (
        <motion.div
            className="relative flex gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            {/* Timeline */}
            <div className="flex flex-col items-center">
                {/* Dot */}
                <motion.div
                    className="w-4 h-4 rounded-full bg-electric-blue glow-blue z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                />
                {/* Line */}
                {index < educationData.length - 1 && (
                    <motion.div
                        className="w-px flex-1 bg-gradient-to-b from-electric-blue to-transparent"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        style={{ originY: 0 }}
                    />
                )}
            </div>

            {/* Card */}
            <motion.div
                className="flex-1 pb-12 last:pb-0"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="p-6 rounded-xl bg-space-dark border border-space-gray hover:border-electric-blue/50 transition-all duration-300 circuit-border"
                    whileHover={{
                        scale: 1.02,
                        boxShadow: '0 10px 30px rgba(77, 124, 255, 0.1)'
                    }}
                >
                    {/* Degree */}
                    <h3 className="text-xl font-orbitron font-bold text-electric-blue mb-2">
                        {education.degree}
                    </h3>

                    {/* Institution & Image */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                        <div>
                            <p className="text-text-primary font-medium mb-1">
                                {education.institution}
                            </p>
                            {/* Duration */}
                            <p className="text-neon-cyan text-sm">
                                {education.duration}
                            </p>
                        </div>
                        {education.image && (
                            <div className="w-16 h-16 rounded-lg overflow-hidden border border-space-gray/50 flex-shrink-0 bg-white p-1">
                                <img
                                    src={education.image}
                                    alt={education.institution}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed font-space">
                        {education.description}
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <section id="education" className="py-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        MY <span className="text-electric-blue">EDUCATION</span>
                    </h2>
                    <p className="text-text-secondary text-lg font-space">
                        The academic journey that shaped my foundation
                    </p>
                </motion.div>

                {/* Education timeline */}
                <div className="space-y-0">
                    {educationData.map((education, index) => (
                        <EducationCard key={education.id} education={education} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
