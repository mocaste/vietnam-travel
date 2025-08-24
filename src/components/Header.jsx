import React from 'react';
import { Plane } from 'lucide-react';
import Button from './ui/Button';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '../hooks/useTranslation';

const Header = ({ onContactClick }) => {
    const { t } = useTranslation();
    
    return (
        <header className="bg-gradient-to-r from-amber-800 via-orange-800 to-red-800 text-white shadow-lg border-b border-amber-600/30">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center border border-amber-400/30">
                            <Plane className="w-6 h-6 text-amber-300" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-amber-100">{t('header.companyName')}</h1>
                            <p className="text-amber-200 text-sm">{t('header.tagline')}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <LanguageSelector />
                        <Button
                            variant="secondary"
                            onClick={onContactClick}
                        >
                            {t('header.contactUs')}
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;