import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import Button from './ui/Button';
import { useTranslation } from '../hooks/useTranslation';

const Hero = ({ onPreregistrationClick }) => {
    const { t } = useTranslation();
    const heroRef = useRef(null);
    
    useEffect(() => {
        // Scroll to top when component mounts to ensure hero section is fully visible
        const timer = setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Focus on the hero section for accessibility
            if (heroRef.current) {
                heroRef.current.focus();
            }
        }, 100); // Small delay to ensure page is fully rendered
        
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <section 
            ref={heroRef}
            className="relative text-white w-full h-[50vh] flex items-center justify-center overflow-hidden focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
            tabIndex="-1"
        >
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/vietnam-travel/images/hero.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 0%',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
            
            {/* Content */}
            <div className="relative z-1 w-full">
                <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                    <div className="mb-8">
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                            {t('hero.title')}
                        </h2>
                        <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                            {t('hero.subtitle')}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                            <div className="flex items-center space-x-2">
                                <Calendar className="w-5 h-5" />
                                <span>{t('hero.duration')}</span>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-5 h-5" />
                                <span>{t('hero.route')}</span>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                            <div className="flex items-center space-x-2">
                                <Users className="w-5 h-5" />
                                <span>{t('hero.allAges')}</span>
                            </div>
                        </div>
                    </div>

                    <Button
                        variant="primary"
                        size="lg"
                        onClick={onPreregistrationClick}
                    >
                        Ready for Adventure?
                    </Button>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300/20 rounded-full blur-xl"></div>
        </section>
    );
};

export default Hero;