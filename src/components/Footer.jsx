import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
    const { t } = useTranslation();
    
    return (
        <footer className="relative text-white h-[15vh] flex items-center overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/vietnam-travel/images/header.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h4 className="text-lg font-bold mb-2">{t('footer.companyName')}</h4>
                        <p className="text-gray-200 text-sm mb-2">
                            {t('footer.description')}
                        </p>
                        <div className="flex space-x-3">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                                <Phone className="w-4 h-4" />
                            </div>
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                                <Mail className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <div className="space-y-1 text-gray-200 text-sm mb-2">
                            <p>{t('footer.email')}</p>
                            <p>{t('footer.phone')}</p>
                            <p className="text-yellow-300 font-semibold">{t('footer.support247')}</p>
                        </div>
                        <p className="text-gray-300 text-xs">&copy; 2025 {t('footer.companyName')}. {t('footer.allRightsReserved')}.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
