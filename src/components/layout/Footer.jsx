import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { BsCpu } from 'react-icons/bs';

const navLinks = [
    { label: "Hero", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
];

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 px-6 md:px-12 border-t border-space-gray">
            <div className="max-w-6xl mx-auto">
                {/* Navigation links */}
                <motion.div
                    className="flex flex-wrap justify-center gap-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            className="relative text-text-secondary hover:text-neon-cyan transition-colors duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            {link.label}
                            {/* Underline animation */}
                            <span className="absolute left-0 bottom-0 w-0 h-px bg-neon-cyan group-hover:w-full transition-all duration-300" />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-space-gray to-transparent mb-8" />

                {/* Bottom section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <motion.p
                        className="text-text-secondary text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        © 2025 <span className="text-neon-cyan">Manas Saxena</span>. All rights reserved.
                    </motion.p>

                    {/* Back to top button */}
                    <motion.button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-space-gray text-text-secondary hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FiArrowUp />
                        Back to Top
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
