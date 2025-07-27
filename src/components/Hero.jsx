import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import Button from './ui/Button';
import { useTranslation } from '../hooks/useTranslation';

const Hero = ({ onBookingClick }) => {
    const { t } = useTranslation();
    
    return (
        <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-700 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
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
                    onClick={onBookingClick}
                >
                    {t('hero.bookNow')}
                </Button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300/20 rounded-full blur-xl"></div>
        </section>
    );
};

export default Hero;