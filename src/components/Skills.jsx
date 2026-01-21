import { motion } from 'framer-motion';
import { Code, Database, Wrench, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

const Skills = () => {
    const [ref, isVisible] = useScrollAnimation();

    const skillCategories = [
        {
            title: 'Frontend',
            icon: <Code size={24} />,
            colorClass: 'gradient-purple-pink',
            skills: [
                { name: 'React', level: 85 },
                { name: 'JavaScript', level: 80 },
                { name: 'HTML/CSS', level: 90 },
                { name: 'Framer Motion', level: 70 }
            ]
        },
        {
            title: 'Backend',
            icon: <Database size={24} />,
            colorClass: 'gradient-blue-cyan',
            skills: [
                { name: 'Node.js', level: 75 },
                { name: 'PHP', level: 70 },
                { name: 'MySQL', level: 75 },
                { name: 'Supabase', level: 65 }
            ]
        },
        {
            title: 'Herramientas',
            icon: <Wrench size={24} />,
            colorClass: 'gradient-orange-red',
            skills: [
                { name: 'Git & GitHub', level: 80 },
                { name: 'Vite', level: 75 },
                { name: 'VS Code', level: 90 },
                { name: 'Vercel', level: 70 }
            ]
        },
        {
            title: 'Soft Skills',
            icon: <Sparkles size={24} />,
            colorClass: 'gradient-green-emerald',
            skills: [
                { name: 'Resolución de Problemas', level: 85 },
                { name: 'Aprendizaje Continuo', level: 95 },
                { name: 'Trabajo en Equipo', level: 80 },
                { name: 'Adaptabilidad', level: 90 }
            ]
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="skills-header"
                >
                    <h2 className="section-title">Habilidades</h2>
                    <p className="skills-description">
                        Tecnologías y habilidades que he desarrollado a lo largo de mi viaje como desarrollador.
                    </p>
                </motion.div>

                <div ref={ref} className="skills-grid">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="skill-category"
                        >
                            {/* Category Header */}
                            <div className="skill-category-header">
                                <div className={`skill-category-icon ${category.colorClass}`}>
                                    {category.icon}
                                </div>
                                <h3 className="skill-category-title">{category.title}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="skill-items">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="skill-item-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar-bg">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={isVisible ? { width: `${skill.level}%` } : {}}
                                                transition={{
                                                    duration: 1,
                                                    delay: categoryIndex * 0.1 + skillIndex * 0.1,
                                                    ease: 'easeOut'
                                                }}
                                                className={`skill-bar-fill ${category.colorClass}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Currently Learning */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="currently-learning"
                >
                    <div className="currently-learning-card">
                        <h3 className="currently-learning-title">
                            📚 Actualmente Aprendiendo
                        </h3>
                        <p className="currently-learning-description">
                            Siempre en busca de nuevas tecnologías y mejores prácticas
                        </p>
                        <div className="currently-learning-tags">
                            {['TypeScript', 'Next.js', 'Docker', 'Testing'].map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="learning-tag"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
