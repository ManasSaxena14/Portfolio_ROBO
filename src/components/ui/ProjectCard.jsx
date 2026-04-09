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
                    
                    {/* Sci-fi Overlay Scanline Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,245,0.1)_1px,transparent_1px)] bg-[size:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>
                    <motion.div 
                        className="absolute h-1 w-full bg-neon-cyan/50 shadow-[0_0_15px_rgba(0,255,245,0.8)] opacity-0 group-hover:opacity-100" 
                        animate={{ y: ['-10%', '110%'] }} 
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <div className="absolute top-4 right-4 text-4xl font-orbitron font-bold text-white opacity-20 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(0,255,245,0.8)] mix-blend-overlay">
                        {String(index + 1).padStart(2, '0')}
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4 flex-1 relative z-10">
                    {/* Title */}
                    <h3 className="text-xl font-orbitron font-bold text-text-primary group-hover:text-neon-cyan transition-colors duration-300 tracking-wide relative inline-block">
                        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all text-neon-cyan duration-300 font-mono text-lg font-light">{'<'}</span>
                        {project.title}
                        <span className="absolute -right-4 opacity-0 group-hover:opacity-100 transition-all text-neon-cyan duration-300 font-mono text-lg font-light">{'>'}</span>
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                        {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-[10px] rounded-sm bg-space-gray text-neon-cyan border border-neon-cyan/20 group-hover:border-neon-cyan/60 transition-colors font-mono tracking-wider uppercase shadow-[inset_0_0_5px_rgba(0,0,0,0.5)]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="text-neon-cyan text-xs font-orbitron pt-4 flex items-center gap-2 mt-auto border-t border-space-gray/50 group-hover:border-neon-cyan/30 transition-colors">
                        <span className="tracking-widest">INITIALIZE_PROJECT</span> <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1 }}>{'>>'}</motion.span>
                    </div>
                </div>

                {/* Hover cyber grid glow effect */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 245, 0.2) 0%, transparent 60%), linear-gradient(rgba(0, 255, 245, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 245, 0.05) 1px, transparent 1px)',
                        backgroundSize: '100% 100%, 20px 20px, 20px 20px'
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
