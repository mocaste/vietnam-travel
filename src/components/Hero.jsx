import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import Button from './ui/Button';
import { useTranslation } from '../hooks/useTranslation';

const Hero = ({ onBookingClick }) => {
    const { t } = useTranslation();
    
    return (
        <section className="relative text-white min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-800"
                style={{
                    backgroundImage: 'url("/vietnam-travel/images/presentation.jpg")'
                }}
            ></div>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
                <div className="mb-12">
                    <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
                        {t('hero.title')}
                    </h2>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed font-light">
                        {t('hero.subtitle')}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    <div className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                            <Calendar className="w-6 h-6 text-yellow-300" />
                            <span className="font-medium">{t('hero.duration')}</span>
                        </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                            <MapPin className="w-6 h-6 text-yellow-300" />
                            <span className="font-medium">{t('hero.route')}</span>
                        </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                            <Users className="w-6 h-6 text-yellow-300" />
                            <span className="font-medium">{t('hero.allAges')}</span>
                        </div>
                    </div>
                </div>

                <Button
                    variant="primary"
                    size="lg"
                    onClick={onBookingClick}
                    className="transform hover:scale-105 transition-transform duration-300 shadow-2xl"
                >
                    {t('hero.bookNow')}
                </Button>
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-10 w-24 h-24 bg-emerald-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </section>
    );
};

export default Hero;