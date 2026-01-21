import { useTilt } from '../hooks/useTilt';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock, CheckCircle } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
    const tiltRef = useTilt(8);

    return (
        <motion.div
            ref={tiltRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card cursor-pointer group relative overflow-hidden"
            onClick={() => onClick(project)}
            style={{
                transition: 'all 0.3s ease',
                transformStyle: 'preserve-3d'
            }}
        >
            {/* Status Badge */}
            <div className="project-status-badge">
                {project.status === 'wip' ? (
                    <span className="status-badge status-badge-wip">
                        <Clock size={14} />
                        En Progreso
                    </span>
                ) : (
                    <span className="status-badge status-badge-completed">
                        <CheckCircle size={14} />
                        Completado
                    </span>
                )}
            </div>

            {/* Project Image */}
            <div className="project-image">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                ) : (
                    <div className="project-image-placeholder">
                        {project.icon || '🚀'}
                    </div>
                )}
            </div>

            {/* Project Info */}
            <h3 className="project-title">
                {project.title}
            </h3>

            <p className="project-description">
                {project.description}
            </p>

            {/* Tags */}
            <div className="project-tags">
                {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                        key={index}
                        className="project-tag"
                    >
                        {tag}
                    </span>
                ))}
                {project.tags.length > 3 && (
                    <span className="project-tag-more">
                        +{project.tags.length - 3}
                    </span>
                )}
            </div>

            {/* Links */}
            <div className="project-links">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="project-btn project-btn-github"
                    >
                        <Github size={18} />
                        <span>Código</span>
                    </a>
                )}
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="project-btn project-btn-demo"
                    >
                        <ExternalLink size={18} />
                        <span>Ver Demo</span>
                    </a>
                )}
            </div>

            {/* Hover Glow Effect */}
            <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)'
                }}
            />
        </motion.div>
    );
};

export default ProjectCard;
