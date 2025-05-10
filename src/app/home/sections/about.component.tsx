'use client';

import Image from "next/image";
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

export default function AboutSection() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="about" className="bg-white dark:bg-darkbg px-6 flex flex-col md:flex-row items-center justify-center z-10 gap-12">
            {/* Text content */}
            <div className="md:ml-10 max-w-2xl text-xl text-gray-700 dark:text-gray-200">
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-darktext">
                    {t.about.title} <span className="text-primary">{t.about.titleHighlight}</span> {t.about.titleEnd}
                </h2>
                <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {t.about.description.split('\n\n').map((paragraph, index) => (
                        <span key={index}>
                            {paragraph}
                            {index < t.about.description.split('\n\n').length - 1 && (
                                <>
                                    <br /><br />
                                </>
                            )}
                        </span>
                    ))}
                </p>
            </div>
            {/* Image */}
            <div className="md:mr-10 rounded-3xl border-2 border-gray-300 dark:border-yellow-500">
                <Image
                    src="/image.png"
                    width={300}
                    height={300}
                    alt="My avatar"
                    className="rounded-3xl object-cover"
                />
            </div>
        </section>
    );
} 