import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub, FiCheckCircle } from 'react-icons/fi';
import { projectsData } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-24 px-6 md:px-12 relative">
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
                        MY <span className="text-neon-purple">PROJECTS</span>
                    </h2>
                    <p className="text-text-secondary text-lg font-space">
                        A showcase of what I've built and what I'm capable of
                    </p>
                </motion.div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-space-black/80 backdrop-blur-md"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-3xl bg-space-dark border border-space-gray rounded-3xl overflow-hidden shadow-2xl overflow-y-auto max-h-[90vh]"
                        >
                            <div className="relative h-64 md:h-80 overflow-hidden">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-space-dark via-transparent to-transparent" />

                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-space-black/50 backdrop-blur-md text-text-primary hover:text-neon-cyan transition-colors z-10 border border-white/10"
                                >
                                    <FiX size={24} />
                                </button>
                            </div>

                            <div className="p-8 md:p-12 -mt-12 relative z-10">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-4xl md:text-5xl font-syne font-extrabold text-text-primary mb-4 drop-shadow-lg">
                                            {selectedProject.title}
                                        </h3>
                                        <p className="text-text-secondary text-lg leading-relaxed">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-orbitron font-bold text-neon-cyan uppercase tracking-wider">
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedProject.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-4 py-2 rounded-xl bg-space-gray text-text-primary border border-space-gray hover:border-neon-cyan/50 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Key Features */}
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-orbitron font-bold text-neon-cyan uppercase tracking-wider">
                                            Key Features
                                        </h4>
                                        <ul className="grid md:grid-cols-2 gap-4">
                                            {selectedProject.keyFeatures.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-text-secondary">
                                                    <FiCheckCircle className="text-neon-cyan mt-1 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-4 pt-6">
                                        <motion.a
                                            href={selectedProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-neon-cyan text-space-black font-bold text-lg hover:shadow-[0_0_20px_rgba(0,255,245,0.4)] transition-all"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FiExternalLink />
                                            Live Preview
                                        </motion.a>
                                        <motion.a
                                            href={selectedProject.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-neon-cyan text-neon-cyan font-bold text-lg hover:bg-neon-cyan/10 transition-all"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FiGithub />
                                            Source Code
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
