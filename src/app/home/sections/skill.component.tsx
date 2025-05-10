import { motion } from "framer-motion";

export default function SkillsSection() {
    return (
        <section id="skills" className="snap-start bg-[#f9fafb] dark:bg-darkbg py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-darktext mb-12">
                My <span className="text-primary">Skills & Tools</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                    'HTML5',
                    'CSS3',
                    'JavaScript',
                    'TypeScript',
                    'React',
                    '.Net',
                    'Tailwind CSS',
                    'Antd Design',
                    'Postgres',
                    'MySQL',
                    'SQL Server',
                    'Firebase',
                    'Git',
                    'Postman',
                    'VS Code',
                    'Cursor'
                ].map((skill, index) => (
                    <motion.div
                        key={skill}
                        className="bg-white dark:bg-darkbg  border border-gray-200  dark:border-darktextSecondary rounded-lg p-4 text-center shadow hover:shadow-lg dark:hover:shadow-darktextSecondary transition"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                        <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-100">{skill}</p>
                    </motion.div>
                ))}
            </div>
            <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
                Always learning. Always growing. 🌱
            </p>
        </section>
    );
} 