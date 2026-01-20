// Animation variants for Framer Motion
export const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 60
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8
        }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const scaleOnHover = {
    rest: {
        scale: 1
    },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

export const glowPulse = {
    initial: {
        boxShadow: "0 0 20px rgba(0, 255, 245, 0.5)"
    },
    animate: {
        boxShadow: [
            "0 0 20px rgba(0, 255, 245, 0.5)",
            "0 0 40px rgba(0, 255, 245, 0.8)",
            "0 0 20px rgba(0, 255, 245, 0.5)"
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export const slideInLeft = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export const slideInRight = {
    hidden: {
        opacity: 0,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export const typewriter = {
    hidden: {
        width: 0
    },
    visible: {
        width: "100%",
        transition: {
            duration: 2,
            ease: "linear"
        }
    }
};

export const floatAnimation = {
    animate: {
        y: [0, -20, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export const rotateOnHover = {
    rest: {
        rotate: 0
    },
    hover: {
        rotate: 360,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
};
