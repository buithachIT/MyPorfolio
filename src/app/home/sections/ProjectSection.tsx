'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "Personal Portfolio",
        image: "https://placehold.co/600x400/2563eb/ffffff?text=Portfolio",
        description: "A modern, animated portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        demo: "https://your-portfolio-demo.com",
        github: "https://github.com/yourusername/portfolio"
    },
    {
        title: "E-commerce App",
        image: "https://placehold.co/600x400/2563eb/ffffff?text=E-commerce",
        description: "A full-featured e-commerce platform with shopping cart, payment, and admin dashboard.",
        tech: ["React", "Redux", "Node.js", "MongoDB"],
        demo: "https://your-ecommerce-demo.com",
        github: "https://github.com/yourusername/ecommerce"
    },
    {
        title: "Task Management",
        image: "https://placehold.co/600x400/2563eb/ffffff?text=Task+App",
        description: "A collaborative task management application with real-time updates and team features.",
        tech: ["React", "Firebase", "Material-UI"],
        demo: "https://your-task-app-demo.com",
        github: "https://github.com/yourusername/task-app"
    }
];

export default function ProjectSection() {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-darkbg">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
                    <p className="text-gray-600 dark:text-gray-300">Some of my recent work</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3 mt-auto">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 bg-primary text-white rounded hover:bg-primary/80 transition text-xs font-semibold shadow"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 border border-primary text-primary rounded hover:bg-primary hover:text-white transition text-xs font-semibold"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 