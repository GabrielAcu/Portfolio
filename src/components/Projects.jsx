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
            demo: 'https://lo-de-clau.vercel.app/',
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
            title: 'Distribuidora de Bebidas',
            description: 'Aplicación web para distribuidora con catálogo de productos y gestión de pedidos vía WhatsApp.',
            longDescription: `Aplicación web mobile-first desarrollada para una distribuidora de bebidas, diseñada para optimizar el proceso de toma de pedidos y facilitar la gestión de productos.
      
El sistema permite a los clientes explorar el catálogo completo de productos, agregar items al carrito y enviar pedidos directamente por WhatsApp. Incluye un panel administrativo completo para gestionar productos, categorías y precios de forma independiente.

Desarrollado con Next.js, Prisma y autenticación segura, con enfoque en experiencia móvil y deployment en Vercel.`,
            image: null,
            icon: '🥤',
            tags: ['Next.js', 'Prisma', 'JavaScript', 'CSS', 'Vercel'],
            status: 'wip',
            github: 'https://github.com/GabrielAcu/Distribuidora-Bebidas',
            demo: 'https://distribuidora-bebidas-two.vercel.app/',
            features: [
                'Catálogo de productos con búsqueda',
                'Sistema de carrito de compras',
                'Integración con WhatsApp para pedidos',
                'Panel administrativo con CRUD completo',
                'Autenticación segura con JWT',
                'Diseño mobile-first responsive'
            ],
            learnings: 'Aprendí a implementar autenticación desde cero con JWT, trabajar con Prisma ORM, diseñar aplicaciones mobile-first y optimizar el flujo de pedidos para negocios reales.'
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
