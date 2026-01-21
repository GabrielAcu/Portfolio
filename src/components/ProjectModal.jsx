import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, Code } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
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
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        transition={{ type: 'spring', damping: 25 }}
                        className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
                    >
                        <div className="glass-strong h-full rounded-2xl overflow-y-auto">
                            <div className="sticky top-0 glass-strong z-10 p-6 flex justify-between items-center border-b border-gray-700/50">
                                <h2 className="text-2xl md:text-3xl font-bold gradient-text">
                                    {project.title}
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                    aria-label="Cerrar modal"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="p-6 md:p-8">
                                {/* Project Image */}
                                {project.image && (
                                    <div className="mb-8 rounded-xl overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-64 md:h-96 object-cover"
                                        />
                                    </div>
                                )}

                                {/* Project Info Grid */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="glass p-4 rounded-lg">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Calendar size={20} className="text-purple-400" />
                                            <span className="font-semibold">Estado</span>
                                        </div>
                                        <p className="text-gray-400">
                                            {project.status === 'wip' ? 'En Progreso' : 'Completado'}
                                        </p>
                                    </div>

                                    <div className="glass p-4 rounded-lg">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Code size={20} className="text-blue-400" />
                                            <span className="font-semibold">Tecnologías</span>
                                        </div>
                                        <p className="text-gray-400">{project.tags.length} tecnologías</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-4">Descripción</h3>
                                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                        {project.longDescription || project.description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-4">Stack Tecnológico</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.tags.map((tag, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="px-4 py-2 glass rounded-lg text-purple-300 border border-purple-500/30 hover:border-purple-500/60 transition-colors"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Features */}
                                {project.features && (
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold mb-4">Características Principales</h3>
                                        <ul className="space-y-2">
                                            {project.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2 text-gray-300">
                                                    <span className="text-purple-400 mt-1">▹</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Learnings */}
                                {project.learnings && (
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold mb-4">Aprendizajes</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {project.learnings}
                                        </p>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary flex items-center gap-2"
                                        >
                                            <Github size={20} />
                                            Ver Código
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline flex items-center gap-2"
                                        >
                                            <ExternalLink size={20} />
                                            Ver Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
