import { motion } from 'framer-motion';

const TimelineItem = ({ item, index, direction = 'left' }) => {
    const slideVariant = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -50 : 50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="relative pl-8 pb-8 last:pb-0 group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideVariant}
        >
            {/* Timeline connector line with moving laser pulse */}
            <motion.div
                className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-space-gray via-space-gray to-transparent"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ originY: 0 }}
            >
                <motion.div 
                    className="absolute top-0 left-0 w-full h-[30px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00fff5] blur-[1px]"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                />
            </motion.div>

            {/* Timeline dot */}
            <motion.div
                className="absolute left-0 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-space-dark border-2 border-neon-cyan shadow-[0_0_10px_rgba(0,255,245,0.5)] group-hover:bg-neon-cyan group-hover:scale-125 transition-all duration-300"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
            >
                {/* Core pulse */}
                <div className="absolute inset-0 rounded-full animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Content card */}
            <motion.div
                className="p-6 rounded-xl bg-space-dark/80 backdrop-blur-sm border border-space-gray relative overflow-hidden transition-all duration-500"
                whileHover={{
                    scale: 1.02,
                    borderColor: 'rgba(0, 255, 245, 0.4)',
                    boxShadow: '0 10px 40px -10px rgba(0, 255, 245, 0.15)'
                }}
            >
                {/* Scan line overlay inside the card on hover */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,245,0.05)_1px,transparent_1px)] bg-[size:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>
                
                {/* Role with syntax brackets appearing on hover */}
                <h4 className="text-xl font-orbitron font-bold text-neon-cyan mb-1 flex items-center relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                    <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-electric-blue mr-2">{'//'}</span>
                    {item.role}
                </h4>

                {/* Organization & Image */}
                <div className="flex items-center justify-between gap-4 mb-4 relative z-10 pl-2 border-l border-space-gray/50 group-hover:border-neon-cyan/50 transition-colors">
                    <div>
                        <p className="text-text-primary font-medium mb-1 drop-shadow-md">
                            {item.organization}
                        </p>
                        {/* Duration */}
                        <p className="text-electric-blue text-sm font-mono tracking-wider flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse" />
                            {item.duration}
                        </p>
                    </div>
                    {item.image && (
                        <div className="w-16 h-16 rounded-lg overflow-hidden border border-space-gray flex-shrink-0 group-hover:border-neon-cyan group-hover:shadow-[0_0_15px_rgba(0,255,245,0.3)] transition-all duration-300 relative group/img">
                            <div className="absolute inset-0 bg-neon-cyan/20 mix-blend-overlay opacity-0 group-hover/img:opacity-100 transition-opacity z-10" />
                            <img
                                src={item.image}
                                alt={item.organization}
                                className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-500 rounded-lg"
                            />
                        </div>
                    )}
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-4 relative z-10 pl-2">
                    {item.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 relative z-10 pt-2 border-t border-space-gray/50">
                    {item.skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1 text-[10px] rounded bg-space-gray/80 text-text-secondary border border-space-gray/50 uppercase tracking-widest font-mono group-hover:border-electric-blue/30 group-hover:text-electric-blue transition-colors duration-300"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TimelineItem;
