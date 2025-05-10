'use client';

import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

// Dynamically import icons
const Sun = dynamic(() => import('lucide-react').then(mod => mod.Sun), { ssr: false });
const Moon = dynamic(() => import('lucide-react').then(mod => mod.Moon), { ssr: false });

// Lazy load motion components
const MotionDiv = dynamic(() => Promise.resolve(motion.div), { ssr: false });

export default function HeroSection() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { language } = useLanguage();
    const t = translations[language];

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <section className="relative bg-[#a3d9ff] pt-2 dark:bg-dusk-gradient overflow-hidden snap-start">
            <div className="relative z-30 md:translate-x-1/4  text-center px-4 md:pr-72 md:pt-6 pb-32">
                <MotionDiv
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative z-30 text-center px-4 pt-6 md:pt-10 pb-6 md:pb-20"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-darktext">
                        {t.hero.greeting} <span className="text-primary">Thạch</span>
                        <motion.span
                            initial={{ rotate: 0 }}
                            animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block ml-2 text-yellow-500 dark:text-yellow-300"
                        >
                            {theme === 'dark' ? <Moon className="-rotate-180" size={28} /> : <Sun size={28} />}
                        </motion.span>
                    </h1>
                    <p className="text-base md:text-lg text-black dark:text-darktext/90 max-w-md mx-auto mt-2">
                        {t.hero.role}
                    </p>
                    <p>{t.hero.from}</p>
                </MotionDiv>
                <div className="justify-center md:justify-start">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex gap-4 justify-center"
                    >
                        <motion.a
                            href="#skills"
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
                            className="px-6 py-2 bg-primary mr-3 dark:bg-white dark:text-gray-900 text-white rounded-lg shadow hover:opacity-90 transition cursor-pointer"
                        >
                            {t.hero.skills}
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
                            className="px-6 py-2 border border-primary text-primary rounded-lg dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900 hover:bg-primary hover:text-white transition cursor-pointer"
                        >
                            {t.hero.contact}
                        </motion.a>
                    </MotionDiv>
                </div>
            </div>
            {/* Chibi */}
            <MotionDiv
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/4 z-0 bottom-[90px] md:bottom-[115px] rotate-6 w-[120px] md:w-[150px]"
            >
                <Image
                    src="/chibi-hi.png"
                    alt="chibi"
                    width={150}
                    height={150}
                    draggable={false}
                    priority
                />
            </MotionDiv>
            {/* Sóng SVG */}
            <div className="absolute left-0 bottom-[70px] w-full h-[160px] md:h-[200px] z-10 pointer-events-none">
                <svg
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="w-full h-full fill-white dark:fill-darkbg"
                >
                    <path d="M0,240C360,0 1080,480 1440,240L1440,320L0,320Z" />
                </svg>
            </div>
            {/* Fill nền dưới sóng */}
            <div className="w-full h-[80px] bg-white dark:bg-darkbg"></div>
        </section>
    );
} 