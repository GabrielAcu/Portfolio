import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // DATOS DE EJEMPLO - Personaliza con tus proyectos reales
    const projects = [
        {
            id: 1,
            title: 'Lo de Clau',
            description: 'Sistema de gestión para casa de comidas con menú diario y catálogo de productos.',
            longDescription: `Sistema web completo para gestionar una casa de comidas. 
      
Incluye gestión de menú diario, catálogo de productos, categorías y administración de contenido. Desarrollado con PHP y MySQL, con un diseño responsive y moderno.

Este proyecto me permitió aprender sobre arquitectura de bases de datos relacionales y gestión de contenido dinámico.`,
            image: null,
            icon: '🍽️',
            tags: ['PHP', 'MySQL', 'JavaScript', 'CSS', 'HTML'],
            status: 'wip',
            github: 'https://github.com/GabrielAcu/Lo-de-Clau',
            demo: null,
            features: [
                'Gestión de menú diario actualizable',
                'Catálogo de productos por categorías',
                'Panel de administración',
                'Diseño responsive'
            ],
            learnings: 'Aprendí a estructurar bases de datos relacionales, implementar CRUD completo y manejar sesiones de usuario de forma segura.'
        },
        {
            id: 2,
            title: 'Burger City',
            description: 'Aplicación de gestión de pedidos para restaurante con sistema de reportes.',
            longDescription: `Sistema completo de gestión para restaurante con múltiples funcionalidades:
      
- Sistema de pedidos en tiempo real
- Dashboard ejecutivo con métricas
- Gestión de inventario
- Reportes y analytics

Desarrollado con React, Supabase y diseño modular por sprints.`,
            image: null,
            icon: '🍔',
            tags: ['React', 'Supabase', 'JavaScript', 'CSS'],
            status: 'wip',
            github: null,
            demo: null,
            features: [
                'Sistema de pedidos en tiempo real',
                'Dashboard con reportes visuales',
                'Gestión de productos y categorías',
                'Sistema de usuarios y permisos'
            ],
            learnings: 'Profundicé en React hooks, manejo de estado global, integración con bases de datos en tiempo real y diseño de dashboards.'
        },
        {
            id: 3,
            title: 'Tu Proyecto 3',
            description: 'Descripción breve de tu tercer proyecto más importante.',
            longDescription: 'Descripción detallada de tu proyecto, qué problema resuelve, cómo lo desarrollaste y qué aprendiste en el proceso.',
            image: null,
            icon: '💼',
            tags: ['React', 'Node.js', 'MongoDB'],
            status: 'completed',
            github: 'https://github.com/tu-usuario/proyecto',
            demo: 'https://tu-proyecto.com',
            features: [
                'Característica 1',
                'Característica 2',
                'Característica 3'
            ],
            learnings: 'Qué aprendiste desarrollando este proyecto.'
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Proyectos</h2>
                    <p className="projects-description">
                        Una selección de proyectos en los que he trabajado, mostrando mi viaje de aprendizaje
                        y las tecnologías que he explorado.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>

                {/* Add More Projects CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="projects-cta"
                >
                    <p>
                        ¿Quieres ver más proyectos?
                    </p>
                    <a
                        href="https://github.com/gabrielacu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        Ver GitHub
                    </a>
                </motion.div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
