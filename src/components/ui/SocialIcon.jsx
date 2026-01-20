import { motion } from 'framer-motion';

const SocialIcon = ({ icon: Icon, href, label, color }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-16 h-16 rounded-2xl bg-space-dark border border-space-gray overflow-hidden"
            whileHover={{
                scale: 1.1,
                borderColor: color,
                boxShadow: `0 0 30px ${color}40`
            }}
            whileTap={{ scale: 0.95 }}
            aria-label={label}
        >
            {/* Icon */}
            <motion.div
                className="text-3xl text-text-secondary transition-colors duration-300"
                style={{ color: 'inherit' }}
                whileHover={{
                    color,
                    rotate: 360,
                    scale: 1.2
                }}
                transition={{ duration: 0.5 }}
            >
                <Icon />
            </motion.div>

            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`
                }}
            />

            {/* Tooltip */}
            <motion.span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-space-dark text-xs text-text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                style={{ borderColor: color, borderWidth: 1 }}
            >
                {label}
            </motion.span>
        </motion.a>
    );
};

export default SocialIcon;
