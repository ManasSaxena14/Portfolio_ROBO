import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FiGithub, FiInstagram, FiLinkedin, FiSend } from 'react-icons/fi';
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si';
import { BsCpu } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialIcon from '../ui/SocialIcon';
import { staggerContainer, fadeInUp } from '../../animations/variants';

const socialLinks = [
    { icon: FiGithub, href: "https://github.com/ManasSaxena14", label: "GitHub", color: "#00fff5" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/Manas-14/", label: "LeetCode", color: "#ffa116" },
    { icon: SiCodeforces, href: "https://codeforces.com/profile/Manas14", label: "Codeforces", color: "#1f8acb" },
    { icon: SiCodechef, href: "https://www.codechef.com/users/manas146", label: "CodeChef", color: "#5b4638" },
    { icon: FiInstagram, href: "https://www.instagram.com/_manas_14_/", label: "Instagram", color: "#e4405f" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/manas-saxena-1b3b27324/", label: "LinkedIn", color: "#0077b5" }
];

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [focused, setFocused] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            "service_ll74r9u",
            "template_nh38uzo",
            form.current,
            "OUs1ATBk-DeoNiYXV"
        )
            .then(() => {
                setIsSending(false);
                setIsSent(true);
                form.current.reset();
                toast.success("Message sent successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "dark",
                });
                setTimeout(() => setIsSent(false), 5000);
            }, (error) => {
                setIsSending(false);
                console.error("EmailJS Error:", error);
                toast.error("Failed to send message. Please try again.", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "dark",
                });
            });
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12">
            <ToastContainer />
            <div className="max-w-4xl mx-auto">
                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                        CONNECT WITH ME <BsCpu className="text-neon-cyan animate-pulse" />
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Let's collaborate, build, and grow together.
                    </p>
                </motion.div>

                {/* Social icons */}
                <motion.div
                    className="flex justify-center gap-6 mb-16"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {socialLinks.map((social, index) => (
                        <motion.div key={social.label} variants={fadeInUp}>
                            <SocialIcon {...social} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact form */}
                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    className="space-y-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Name */}
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <input
                                type="text"
                                name="user_name"
                                onFocus={() => setFocused('name')}
                                onBlur={() => setFocused(null)}
                                placeholder="Your Name"
                                className={`w-full px-6 py-4 rounded-xl bg-space-dark border ${focused === 'name' ? 'border-neon-cyan glow-cyan' : 'border-space-gray'
                                    } text-text-primary placeholder-text-secondary focus:outline-none transition-all duration-300`}
                                required
                            />
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <input
                                type="email"
                                name="user_email"
                                onFocus={() => setFocused('email')}
                                onBlur={() => setFocused(null)}
                                placeholder="Your Email"
                                className={`w-full px-6 py-4 rounded-xl bg-space-dark border ${focused === 'email' ? 'border-neon-cyan glow-cyan' : 'border-space-gray'
                                    } text-text-primary placeholder-text-secondary focus:outline-none transition-all duration-300`}
                                required
                            />
                        </motion.div>
                    </div>

                    {/* Subject */}
                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                    >
                        <input
                            type="text"
                            name="subject"
                            onFocus={() => setFocused('subject')}
                            onBlur={() => setFocused(null)}
                            placeholder="Subject"
                            className={`w-full px-6 py-4 rounded-xl bg-space-dark border ${focused === 'subject' ? 'border-neon-cyan glow-cyan' : 'border-space-gray'
                                } text-text-primary placeholder-text-secondary focus:outline-none transition-all duration-300`}
                            required
                        />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                    >
                        <textarea
                            name="message"
                            onFocus={() => setFocused('message')}
                            onBlur={() => setFocused(null)}
                            placeholder="Your Message"
                            rows={6}
                            className={`w-full px-6 py-4 rounded-xl bg-space-dark border ${focused === 'message' ? 'border-neon-cyan glow-cyan' : 'border-space-gray'
                                } text-text-primary placeholder-text-secondary focus:outline-none transition-all duration-300 resize-none`}
                            required
                        />
                    </motion.div>

                    {/* Submit button */}
                    <motion.button
                        type="submit"
                        disabled={isSending || isSent}
                        className={`w-full md:w-auto px-12 py-4 rounded-xl font-orbitron font-bold text-lg flex items-center justify-center gap-3 mx-auto transition-all duration-300 ${isSent
                            ? 'bg-green-600 text-white'
                            : 'bg-gradient-to-r from-neon-cyan to-electric-blue text-space-black'
                            }`}
                        whileHover={!isSending && !isSent ? {
                            scale: 1.05,
                            boxShadow: '0 0 40px rgba(0, 255, 245, 0.5)'
                        } : {}}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isSending ? (
                            <>
                                <div className="w-5 h-5 border-2 border-space-black border-t-transparent rounded-full animate-spin" />
                                Sending...
                            </>
                        ) : isSent ? (
                            <>
                                <span>Sent</span>
                            </>
                        ) : (
                            <>
                                <FiSend />
                                Send Message
                            </>
                        )}
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
