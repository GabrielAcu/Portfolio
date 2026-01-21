import { motion } from 'framer-motion';
import { Calendar, Code, Rocket, Star } from 'lucide-react';
import './About.css';

const About = () => {
    const timeline = [
        {
            year: '2023',
            title: 'Inicio en Desarrollo Web',
            description: 'Comencé mi viaje en el desarrollo web, aprendiendo HTML, CSS y JavaScript.',
            icon: <Code size={20} />
        },
        {
            year: '2024',
            title: 'Primeros Proyectos',
            description: 'Desarrollé mis primeros proyectos reales, incluyendo sistemas de gestión y aplicaciones web.',
            icon: <Rocket size={20} />
        },
        {
            year: '2025',
            title: 'Especialización en React',
            description: 'Me especialicé en React y tecnologías modernas, construyendo aplicaciones más complejas.',
            icon: <Star size={20} />
        },
        {
            year: 'Presente',
            title: 'Crecimiento Continuo',
            description: 'Continúo aprendiendo nuevas tecnologías y mejorando mis habilidades cada día.',
            icon: <Calendar size={20} />
        }
    ];

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Sobre Mí</h2>
                </motion.div>

                <div className="about-content">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="about-bio"
                    >
                        <div className="bio-card">
                            <h3 className="bio-title">
                                Mi Historia
                            </h3>
                            <div className="bio-text">
                                <p>
                                    ¡Hola! Soy un desarrollador web apasionado por crear soluciones digitales
                                    que marquen la diferencia. Mi viaje en la programación comenzó con curiosidad
                                    y se ha convertido en una pasión que me impulsa a aprender constantemente.
                                </p>
                                <p>
                                    Me especializo en desarrollo full stack, con un enfoque particular en crear
                                    experiencias de usuario excepcionales. Cada proyecto es una oportunidad para
                                    aprender algo nuevo y mejorar mis habilidades.
                                </p>
                                <p>
                                    Creo firmemente en el aprendizaje continuo y en compartir conocimiento con
                                    la comunidad. Aunque algunos de mis proyectos aún están en progreso, cada
                                    uno representa un paso importante en mi crecimiento como desarrollador.
                                </p>
                            </div>
                        </div>

                        {/* Quick Facts */}
                        <div className="quick-facts-card">
                            <h3 className="quick-facts-title">Datos Rápidos</h3>
                            <div className="quick-facts-list">
                                <div className="quick-fact-item">
                                    <span className="quick-fact-emoji">🎯</span>
                                    <span>Enfocado en desarrollo full stack</span>
                                </div>
                                <div className="quick-fact-item">
                                    <span className="quick-fact-emoji">💡</span>
                                    <span>Siempre aprendiendo nuevas tecnologías</span>
                                </div>
                                <div className="quick-fact-item">
                                    <span className="quick-fact-emoji">🚀</span>
                                    <span>Apasionado por la innovación</span>
                                </div>
                                <div className="quick-fact-item">
                                    <span className="quick-fact-emoji">🤝</span>
                                    <span>Abierto a colaboraciones</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Timeline Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="timeline-section"
                    >
                        <h3 className="timeline-title">Mi Trayectoria</h3>
                        <div className="timeline-container">
                            {/* Timeline Line */}
                            <div className="timeline-line" />

                            {/* Timeline Items */}
                            <div className="timeline-items">
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="timeline-item"
                                    >
                                        {/* Icon */}
                                        <div className="timeline-icon">
                                            {item.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="timeline-content">
                                            <div className="timeline-year-container">
                                                <span className="timeline-year">
                                                    {item.year}
                                                </span>
                                            </div>
                                            <h4 className="timeline-item-title">{item.title}</h4>
                                            <p className="timeline-description">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
