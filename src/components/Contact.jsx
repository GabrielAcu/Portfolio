import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simular envío (reemplaza con tu lógica real)
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Reset status después de 3 segundos
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <Github size={24} />,
            url: 'https://github.com/gabrielacu'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={24} />,
            url: 'https://www.linkedin.com/in/gabriel-acu%C3%B1a-566b14216/'
        },
        {
            name: 'Email',
            icon: <Mail size={24} />,
            url: 'mailto:cabebedlam.10gb@gmail.com'
        }
    ];

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="contact-header"
                >
                    <h2 className="section-title">Contacto</h2>
                    <p className="contact-description">
                        ¿Tienes un proyecto en mente o simplemente quieres conectar?
                        ¡Me encantaría escucharte!
                    </p>
                </motion.div>

                <div className="contact-content">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="form-textarea"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="btn btn-primary form-button"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                        >
                                            <Send size={20} />
                                        </motion.div>
                                        Enviando...
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle size={20} />
                                        ¡Enviado!
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Enviar Mensaje
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="form-message form-message-success"
                                >
                                    <CheckCircle size={20} />
                                    <span>¡Mensaje enviado con éxito! Te responderé pronto.</span>
                                </motion.div>
                            )}

                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="form-message form-message-error"
                                >
                                    <AlertCircle size={20} />
                                    <span>Hubo un error. Por favor, intenta de nuevo.</span>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="contact-info"
                    >
                        {/* Social Links */}
                        <div className="social-links-card">
                            <h3 className="social-links-title">Conectemos</h3>
                            <div className="social-links-list">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 10 }}
                                        className="social-link-item"
                                    >
                                        <div className="social-link-icon">
                                            {link.icon}
                                        </div>
                                        <span className="social-link-name">{link.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="why-work-card">
                            <h3 className="why-work-title">
                                ¿Por qué trabajar conmigo?
                            </h3>
                            <ul className="why-work-list">
                                <li className="why-work-item">
                                    <span className="why-work-check">✓</span>
                                    <span>Compromiso con la calidad y las mejores prácticas</span>
                                </li>
                                <li className="why-work-item">
                                    <span className="why-work-check">✓</span>
                                    <span>Comunicación clara y constante</span>
                                </li>
                                <li className="why-work-item">
                                    <span className="why-work-check">✓</span>
                                    <span>Pasión por aprender y mejorar</span>
                                </li>
                                <li className="why-work-item">
                                    <span className="why-work-check">✓</span>
                                    <span>Enfoque en resultados y experiencia de usuario</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="contact-footer"
                >
                    <p>
                        Hecho con ❤️ y ☕ • {new Date().getFullYear()}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
