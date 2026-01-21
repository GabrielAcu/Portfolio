import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import ParticleField from './ParticleField';
import './Hero.css';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'Desarrollador Web Full Stack';
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                setIsTypingComplete(true);
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    const scrollToProjects = () => {
        const element = document.querySelector('#projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="section relative overflow-hidden" style={{ minHeight: '100vh' }}>
            <ParticleField />

            <div className="container relative z-10">
                <div className="hero-container">
                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-greeting"
                    >
                        <span>
                            👋 Hola, soy
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hero-name"
                    >
                        <span className="gradient-text">Acuña Gabriel</span>
                    </motion.h1>

                    {/* Typing Animation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="hero-typing"
                    >
                        <h2>
                            {displayText}
                            <span className="animate-pulse">|</span>
                        </h2>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="hero-description"
                    >
                        Apasionado por crear experiencias web increíbles y soluciones innovadoras.
                        Siempre aprendiendo, siempre creciendo.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="hero-cta"
                    >
                        <button
                            onClick={scrollToProjects}
                            className="btn btn-primary"
                        >
                            Ver Proyectos
                        </button>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn btn-outline"
                        >
                            Contactar
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="hero-social"
                    >
                        <motion.a
                            href="https://github.com/gabrielacu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Github size={28} />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/gabriel-acu%C3%B1a-566b14216/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Linkedin size={28} />
                        </motion.a>
                        <motion.a
                            href="mailto:cabebedlam.10gb@gmail.com"
                            className="social-link"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Mail size={28} />
                        </motion.a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="hero-scroll"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="hero-scroll-icon"
                            onClick={scrollToProjects}
                        >
                            <ChevronDown size={32} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
                    zIndex: 0
                }}
            />
        </section>
    );
};

export default Hero;
