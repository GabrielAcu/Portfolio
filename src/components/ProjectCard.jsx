import { useTilt } from '../hooks/useTilt';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock, CheckCircle } from 'lucide-react';

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
            <div className="absolute top-4 right-4 z-10">
                {project.status === 'wip' ? (
                    <span className="flex items-center gap-1 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium backdrop-blur-sm">
                        <Clock size={14} />
                        En Progreso
                    </span>
                ) : (
                    <span className="flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium backdrop-blur-sm">
                        <CheckCircle size={14} />
                        Completado
                    </span>
                )}
            </div>

            {/* Project Image */}
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                        {project.icon || '🚀'}
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project Info */}
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
            </h3>

            <p className="text-gray-400 mb-4 line-clamp-2">
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20"
                    >
                        {tag}
                    </span>
                ))}
                {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-gray-500/10 text-gray-400 rounded-full text-sm">
                        +{project.tags.length - 3}
                    </span>
                )}
            </div>

            {/* Links */}
            <div className="flex gap-3 mt-auto pt-4 border-t border-gray-700/50">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                        <Github size={16} />
                        Código
                    </a>
                )}
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                        <ExternalLink size={16} />
                        Demo
                    </a>
                )}
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)'
                }}
            />
        </motion.div>
    );
};

export default ProjectCard;
