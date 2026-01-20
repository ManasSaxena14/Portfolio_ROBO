import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { aboutData } from '../../data/about';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const AccordionItem = ({ item, isOpen, onClick }) => {
    return (
        <motion.div
            className={`neon-border rounded-xl overflow-hidden mb-4 ${isOpen ? 'glow-cyan' : ''}`}
            variants={fadeInUp}
        >
            {/* Question header */}
            <motion.button
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-space-dark hover:bg-space-gray transition-colors duration-300"
                onClick={onClick}
                whileHover={{ backgroundColor: 'rgba(26, 26, 46, 1)' }}
            >
                <span className="text-lg font-orbitron text-text-primary">{item.question}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <FiChevronDown className="text-neon-cyan text-2xl" />
                </motion.span>
            </motion.button>

            {/* Answer content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 py-5 bg-space-black border-t border-space-gray">
                            <p className="text-text-secondary leading-relaxed">{item.answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const AboutMe = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="about" className="py-24 px-6 md:px-12">
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
                        ABOUT ME — <span className="text-neon-cyan">DECODED</span>
                    </h2>
                    <p className="text-text-secondary text-lg font-space">
                        Everything you need to know, layer by layer.
                    </p>
                </motion.div>

                {/* Accordion items */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {aboutData.map((item, index) => (
                        <AccordionItem
                            key={item.id}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
