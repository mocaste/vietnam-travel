import React from 'react';
import { Plane } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Button from './ui/Button';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '../hooks/useTranslation';

const Header = ({ onContactClick }) => {
    const { t } = useTranslation();
    
    return (
        <header className="relative text-white shadow-lg overflow-hidden w-full z-50">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/vietnam-travel/images/header.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Content */}
            <div className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                                <Plane className="w-6 h-6" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">{t('header.companyName')}</h1>
                                <p className="text-emerald-100 text-sm">{t('header.tagline')}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <LanguageSelector />
                            {/*<Button*/}
                            {/*    variant="secondary"*/}
                            {/*    onClick={onContactClick}*/}
                            {/*>*/}
                            {/*    {t('header.contactUs')}*/}
                            {/*</Button>*/}
                          <div className="flex items-center space-x-2">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-white hover:text-yellow-300 transition-colors"
                            >
                              <FaFacebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-white hover:text-yellow-300 transition-colors"
                            >
                              <FaInstagram className="w-5 h-5" />
                            </a>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;