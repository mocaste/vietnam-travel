import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const OverviewHero = () => {
    const { t } = useTranslation();
    
    return (
        <section className="relative text-white w-full h-[30vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/vietnam-travel/images/overview.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 0%',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
            
            {/* Content */}
            <div className="relative z-1 w-full">
                <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                    <div className="mb-8">
                        <h2 className="text-5xl font-bold mb-4 text-white">
                            {t('overview.title')}
                        </h2>
                        <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                            {t('overview.paragraph1')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-20 w-16 h-16 bg-blue-300/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-300/20 rounded-full blur-xl"></div>
        </section>
    );
};

export default OverviewHero;