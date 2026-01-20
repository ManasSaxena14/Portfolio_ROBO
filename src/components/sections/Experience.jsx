import { motion } from 'framer-motion';
import { experienceData } from '../../data/experience';
import TimelineItem from '../ui/TimelineItem';
import { FiCode, FiUsers } from 'react-icons/fi';
import { BsRobot } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        MY <span className="text-electric-blue">EXPERIENCE</span>
                    </h2>
                    <p className="text-text-secondary text-lg font-space">
                        Where I've contributed and what I've learned
                    </p>
                </motion.div>

                {/* Two column layout */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Technical Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Column header */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30">
                                <FiCode className="text-2xl text-neon-cyan" />
                            </div>
                            <h3 className="text-2xl font-orbitron font-bold text-text-primary">
                                Technical Experience
                            </h3>
                        </div>

                        {/* Content */}
                        {experienceData.technical.items.length > 0 ? (
                            experienceData.technical.items.map((item, index) => (
                                <TimelineItem
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    direction="left"
                                />
                            ))
                        ) : (
                            <motion.div
                                className="p-8 rounded-xl bg-space-dark border border-space-gray text-center circuit-border"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div
                                    className="text-6xl mb-4 text-neon-cyan"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <BsRobot />
                                </motion.div>
                                <p className="text-text-secondary font-space">
                                    Currently building skills and projects through hands-on learning and real-world simulations.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Non-Technical Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Column header */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/30">
                                <FiUsers className="text-2xl text-neon-purple" />
                            </div>
                            <h3 className="text-2xl font-orbitron font-bold text-text-primary">
                                Non-Technical Experience
                            </h3>
                        </div>

                        {/* Content */}
                        {experienceData.nonTechnical.items.map((item, index) => (
                            <TimelineItem
                                key={item.id}
                                item={item}
                                index={index}
                                direction="right"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
