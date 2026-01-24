import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Projects.css';

// Import Project Screens
import LoDeClauPreview from '../assets/projects/lo-de-clau-preview.png';
import DistribuidoraPreview from '../assets/projects/distribuidora-preview.png';
import CflPreview from '../assets/projects/cfl-preview.png';

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
            image: LoDeClauPreview,
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
            image: DistribuidoraPreview,
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
            title: 'Sistema de Gestión CFL 402',
            description: 'Plataforma integral para la administración de alumnos, cursos e instructores del Centro de Formación Laboral.',
            longDescription: `Sistema completo de gestión educativa desarrollado para el CFL 402. Permite la administración centralizada de alumnos, instructores, cursos y certificados.

Cuenta con roles de usuario (admin, instructor), generación de actas y reportes, y seguimiento del historial académico de los alumnos. Implementado con una arquitectura robusta para garantizar la integridad de los datos.`,
            image: CflPreview,
            icon: '🎓',
            tags: ['React', 'Node.js', 'MySQL', 'Railway'],
            status: 'completed',
            github: 'https://github.com/GabrielAcu/CFL402', // Asumiendo, o dejar vacío si es privado
            demo: 'https://cfl402-production.up.railway.app/',
            features: [
                'Gestión de legajos de alumnos e instructores',
                'Administración de cursos y materias',
                'Generación automática de actas y certificados',
                'Sistema de roles y permisos'
            ],
            learnings: 'Desarrollo de sistemas de gestión complejos, manejo de relaciones SQL avanzadas y despliegue en producción con Railway.'
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
