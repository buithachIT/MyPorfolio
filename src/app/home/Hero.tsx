'use client';


import HeroSection from './sections/hero.component';
import AboutSection from './sections/about.component';
import SkillsSection from './sections/skill.component';
import FooterSection from './sections/footer.component';

export default function Hero() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <FooterSection />
        </div>
    );
}