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
                delay: index * 0.2
            }
        }
    };

    return (
        <motion.div
            className="relative pl-8 pb-8 last:pb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideVariant}
        >
            {/* Timeline connector line */}
            <motion.div
                className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-electric-blue to-neon-purple"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{ originY: 0 }}
            />

            {/* Timeline dot */}
            <motion.div
                className="absolute left-0 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-neon-cyan glow-cyan"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
            />

            {/* Content card */}
            <motion.div
                className="p-6 rounded-xl bg-space-dark border border-space-gray hover:border-neon-cyan/50 transition-all duration-300"
                whileHover={{
                    scale: 1.02,
                    boxShadow: '0 10px 30px rgba(0, 255, 245, 0.1)'
                }}
            >
                {/* Role */}
                <h4 className="text-xl font-orbitron font-bold text-neon-cyan mb-1">
                    {item.role}
                </h4>

                {/* Organization & Image */}
                <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                        <p className="text-text-primary font-medium mb-1">
                            {item.organization}
                        </p>
                        {/* Duration */}
                        <p className="text-electric-blue text-sm">
                            {item.duration}
                        </p>
                    </div>
                    {item.image && (
                        <div className="w-16 h-16 rounded-lg overflow-hidden border border-space-gray/50 flex-shrink-0">
                            <img
                                src={item.image}
                                alt={item.organization}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-4">
                    {item.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1 text-xs rounded-full bg-space-gray text-text-secondary border border-space-gray"
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
