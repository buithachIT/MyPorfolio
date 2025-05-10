'use client';

import { Search, Volume2, Rss, Menu, X, Sun, Moon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme } = useTheme();
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <header className="sticky bg-[#a3d9ff] dark:bg-dusk-gradient w-full top-0 z-50 md:pr-40 md:pl-40 mx-auto pb-15 flex items-center justify-between px-6 py-2 snap-start">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold select-none flex items-center gap-2">
                <span className="text-blue-500">Công</span>
                <span className="text-blue-500">Thạch</span>
                <span className="text-violet-500 ml-2">Frontend Developer</span>
            </Link>

            {/* Menu giữa - Desktop */}
            <nav className="hidden md:flex gap-6 text-sm font-medium text-black dark:text-white">
                <Link
                    href="/"
                    className={`hover:text-primary transition ${pathname === '/' ? 'text-primary' : ''}`}
                >
                    {t.nav.home}
                </Link>
                <Link
                    href="/projects"
                    className={`hover:text-primary transition ${pathname === '/projects' ? 'text-primary' : ''}`}
                >
                    {t.nav.projects}
                </Link>
                <Link
                    href="/contact"
                    className={`hover:text-primary transition ${pathname === '/contact' ? 'text-primary' : ''}`}
                >
                    {t.nav.contact}
                </Link>
            </nav>

            {/* Icon phải */}
            <div className="flex items-center gap-4 text-black dark:text-white">

                <LanguageToggle />
                <ThemeToggle />


                {/* Mobile menu button */}
                <button
                    className="md:hidden hover:opacity-80"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 bg-[#a3d9ff] dark:bg-dusk-gradient md:hidden"
                    >
                        <nav className="flex flex-col p-4 space-y-4">
                            <Link
                                href="/"
                                className={`text-lg font-medium hover:text-primary transition ${pathname === '/' ? 'text-primary' : 'text-black dark:text-white'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t.nav.home}
                            </Link>
                            <Link
                                href="/projects"
                                className={`text-lg font-medium hover:text-primary transition ${pathname === '/projects' ? 'text-primary' : 'text-black dark:text-white'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t.nav.projects}
                            </Link>
                            <Link
                                href="/contact"
                                className={`text-lg font-medium hover:text-primary transition ${pathname === '/contact' ? 'text-primary' : 'text-black dark:text-white'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t.nav.contact}
                            </Link>
                            <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <button className="hover:opacity-80"><Search size={20} /></button>
                                <button className="hover:opacity-80"><Volume2 size={20} /></button>
                                <LanguageToggle />
                                <button className="hover:opacity-80"><Rss size={20} /></button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
} 