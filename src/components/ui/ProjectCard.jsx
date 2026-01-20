import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, index, onClick }) => {
    return (
        <motion.div
            className="group relative cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => onClick(project)}
        >
            <motion.div
                className="h-full rounded-3xl bg-space-dark border border-space-gray overflow-hidden relative flex flex-col"
                whileHover={{
                    y: -10,
                    borderColor: 'rgba(0, 255, 245, 0.5)',
                    boxShadow: '0 20px 40px rgba(0, 255, 245, 0.2)'
                }}
                transition={{ duration: 0.3 }}
            >
                {/* Project Image Container */}
                <div className="relative h-48 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent opacity-60" />
                    <div className="absolute top-4 right-4 text-4xl font-orbitron font-bold text-white opacity-20 group-hover:opacity-100 transition-opacity">
                        {String(index + 1).padStart(2, '0')}
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4 flex-1">
                    {/* Title */}
                    <h3 className="text-xl font-orbitron font-bold text-text-primary group-hover:text-neon-cyan transition-colors duration-300 tracking-wide">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                        {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-[10px] rounded-lg bg-space-gray text-neon-cyan border border-neon-cyan/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="text-neon-cyan text-xs font-orbitron pt-2 flex items-center gap-2 mt-auto">
                        EXPAND PROJECT <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1 }}>→</motion.span>
                    </div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 245, 0.05) 0%, transparent 60%)'
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
