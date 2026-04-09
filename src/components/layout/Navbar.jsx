import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../assets/LOGO.png';

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-space-black/90 backdrop-blur-lg' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Robotic scanning border line */}
            <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-all duration-300 ${isScrolled ? 'bg-space-gray overflow-hidden' : 'bg-transparent'}`}>
                {isScrolled && (
                    <motion.div 
                        className="h-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent w-1/3"
                        animate={{ x: ['-100vw', '100vw'] }}
                        transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
                    />
                )}
            </div>

            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#hero"
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                >
                    <img
                        src={logo}
                        alt="MS Logo"
                        className="h-10 w-auto object-contain glow-cyan rounded"
                    />
                </motion.a>

                {/* Desktop navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            className="relative text-text-secondary hover:text-neon-cyan transition-colors duration-300 group font-mono text-sm tracking-wide"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            {/* Robotic brackets that appear on hover */}
                            <span className="absolute -left-3 opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-300 text-neon-cyan">[</span>
                            <span className="relative z-10 mx-1">{link.label}</span>
                            <span className="absolute -right-3 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 text-neon-cyan">]</span>
                            
                            {/* Underline cyber scanner */}
                            <span className="absolute left-1 border-t border-neon-cyan -bottom-1 w-0 h-0.5 group-hover:w-[calc(100%-8px)] transition-all duration-300 shadow-[0_0_8px_rgba(0,255,245,0.8)]" />
                        </motion.a>
                    ))}
                </div>

                {/* Mobile menu button */}
                <motion.button
                    className="md:hidden text-2xl text-text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                </motion.button>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <motion.div
                    className="md:hidden bg-space-dark border-t border-space-gray"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-6 py-4 space-y-4 font-mono text-sm">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                className="block text-text-secondary hover:text-neon-cyan transition-colors duration-300 relative group"
                                onClick={() => setIsMobileMenuOpen(false)}
                                whileHover={{ x: 10 }}
                            >
                                <span className="text-neon-cyan opacity-0 group-hover:opacity-100 mr-2 transition-opacity">{'>'}</span>
                                {link.label}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
