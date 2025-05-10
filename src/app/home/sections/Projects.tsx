'use client';

import { motion } from "framer-motion";

const projects = [
    {
        title: "Personal Portfolio",
        image: "https://placehold.co/600x400/2563eb/ffffff?text=Portfolio",
        description: "A modern, animated portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        demo: "https://github.com/buithachIT/MyPorfolio",
        github: "https://github.com/buithachIT/MyPorfolio"
    },
    {
        title: "Spotify Clone",
        image: "https://placehold.co/600x400/2563eb/ffffff?text=E-commerce",
        description: "A full-featured e-commerce platform with shopping cart, payment, and admin dashboard.",
        tech: ["React", "Python", "MySQL", "Flask", "HTML", "CSS", "TypeScript", "Tailwind", "Antd Design", "React Router", "React Query"],
        demo: "https://github.com/buithachIT/ListenToMusicWeb",
        github: "https://github.com/buithachIT/ListenToMusicWeb"
    },

];

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen bg-gradient-to-b from-[#f9fafb] to-[#e0e7ef] dark:from-darkbg dark:to-[#22223b] py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-darktext mb-12">
                Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        className="relative bg-white dark:bg-darkbg rounded-2xl shadow-lg overflow-hidden group border border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
                    >
                        <div className="h-48 w-full overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                draggable={false}
                            />
                        </div>
                        <div className="p-6 flex flex-col gap-2">
                            <h3 className="text-xl font-semibold text-black dark:text-white mb-1">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-3">{project.description}</p>
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
                        {/* Overlay effect on hover */}
                        <div className="absolute inset-0 bg-black/10 dark:bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
} 