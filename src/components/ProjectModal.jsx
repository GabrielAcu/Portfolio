import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, Code, CheckCircle2 } from 'lucide-react';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
    // Lock body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="modal-overlay"
                    />

                    {/* Modal Container */}
                    <div className="modal-container">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="modal-content"
                        >
                            {/* Header */}
                            <div className="modal-header">
                                <button
                                    onClick={onClose}
                                    className="modal-close-btn"
                                    aria-label="Cerrar"
                                >
                                    <X size={24} />
                                </button>

                                <div className="modal-title-wrapper">
                                    <h2 className="modal-title gradient-text">
                                        {project.title}
                                    </h2>
                                    <div className="modal-meta">
                                        <span className="modal-meta-item">
                                            <Calendar size={14} style={{ color: '#a78bfa' }} />
                                            {project.status === 'wip' ? 'En Desarrollo' : 'Completado'}
                                        </span>
                                        <span>•</span>
                                        <span className="modal-meta-item">
                                            <Code size={14} style={{ color: '#60a5fa' }} />
                                            {project.tags.length} Tecnologías
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="modal-body">
                                {/* Image & Info Grid */}
                                <div className="modal-grid">
                                    {/* Left: Image */}
                                    <div>
                                        <div className="modal-image-wrapper">
                                            <div className="modal-image-container">
                                                {project.image && (
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="modal-image"
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        {/* Action Buttons (Desktop) */}
                                        <div className="modal-buttons desktop">
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-primary"
                                                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem' }}
                                                >
                                                    <ExternalLink size={20} />
                                                    Ver Demo Live
                                                </a>
                                            )}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-outline"
                                                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem' }}
                                                >
                                                    <Github size={20} />
                                                    Código
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right: Info */}
                                    <div>
                                        {/* Description */}
                                        <div className="modal-section">
                                            <h3 className="modal-section-title">Sobre el proyecto</h3>
                                            <p className="modal-description">
                                                {project.longDescription || project.description}
                                            </p>
                                        </div>

                                        {/* Technologies */}
                                        <div className="modal-section">
                                            <h3 className="modal-section-subtitle">Stack Tecnológico</h3>
                                            <div className="modal-tags">
                                                {project.tags.map((tag, index) => (
                                                    <span key={index} className="modal-tag">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Features & Learnings */}
                                <div className="modal-grid modal-divider">
                                    {project.features && (
                                        <div className="modal-section">
                                            <h3 className="modal-section-title">Características</h3>
                                            <ul className="modal-features">
                                                {project.features.map((feature, index) => (
                                                    <li key={index} className="modal-feature-item">
                                                        <CheckCircle2 size={18} className="modal-feature-icon" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {project.learnings && (
                                        <div className="modal-learnings">
                                            <h3 className="modal-learnings-title">
                                                Aprendizajes Clave
                                            </h3>
                                            <p className="modal-learnings-text">
                                                "{project.learnings}"
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Action Buttons (Mobile) */}
                                <div className="modal-buttons mobile">
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary"
                                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem' }}
                                        >
                                            <ExternalLink size={20} />
                                            Ver Demo Live
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline"
                                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem' }}
                                        >
                                            <Github size={20} />
                                            Ver Código
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
