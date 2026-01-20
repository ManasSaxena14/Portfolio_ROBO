import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Text reveal animation - splits text and animates each character
export const textReveal = (element, delay = 0) => {
    const text = element.textContent;
    element.innerHTML = '';
    
    [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(50px)';
        element.appendChild(span);
    });

    gsap.to(element.children, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.03,
        delay,
        ease: 'power3.out'
    });
};

// Scroll-triggered fade in animation
export const scrollFadeIn = (elements, options = {}) => {
    const defaults = {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        start: 'top 85%',
    };
    
    const config = { ...defaults, ...options };

    gsap.from(elements, {
        scrollTrigger: {
            trigger: elements[0] || elements,
            start: config.start,
        },
        y: config.y,
        opacity: config.opacity,
        duration: config.duration,
        stagger: config.stagger,
        ease: config.ease
    });
};

// Magnetic cursor effect for buttons
export const magneticEffect = (element) => {
    const strength = 0.3;

    const handleMouseMove = (e) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        gsap.to(element, {
            x: deltaX,
            y: deltaY,
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    const handleMouseLeave = () => {
        gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)'
        });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
    };
};

// 3D tilt effect for cards
export const tilt3D = (element) => {
    const handleMouseMove = (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        gsap.to(element, {
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 1000,
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    const handleMouseLeave = () => {
        gsap.to(element, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
    };
};

// Glitch text effect
export const glitchText = (element) => {
    const originalText = element.textContent;
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    
    const glitch = () => {
        let iterations = 0;
        const maxIterations = originalText.length;
        
        const interval = setInterval(() => {
            element.textContent = originalText
                .split('')
                .map((char, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                })
                .join('');
            
            iterations += 1/3;
            
            if (iterations >= maxIterations) {
                clearInterval(interval);
                element.textContent = originalText;
            }
        }, 30);
    };

    element.addEventListener('mouseenter', glitch);
    
    return () => {
        element.removeEventListener('mouseenter', glitch);
    };
};

// Stagger reveal for skill cards
export const staggerReveal = (container, items) => {
    gsap.from(items, {
        scrollTrigger: {
            trigger: container,
            start: 'top 80%',
        },
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: {
            each: 0.08,
            from: 'start'
        },
        ease: 'back.out(1.7)'
    });
};

// Circuit trace animation
export const circuitTrace = (path) => {
    const length = path.getTotalLength();
    
    gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length
    });

    gsap.to(path, {
        scrollTrigger: {
            trigger: path,
            start: 'top 90%',
        },
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.inOut'
    });
};

export { gsap, ScrollTrigger };
