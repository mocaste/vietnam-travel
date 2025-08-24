import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const LanguageSelector = () => {
    const { currentLanguage, changeLanguage } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'ro', name: 'Română', flag: '🇷🇴' },
        { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' }
    ];

    const currentLang = languages.find(lang => lang.code === currentLanguage);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (langCode) => {
        changeLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
                <span>{currentLang?.flag}</span>
                <span>{currentLang?.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full flex items-center space-x-2 px-3 py-2 text-sm hover:bg-amber-50 transition-colors ${
                                currentLanguage === lang.code
                                    ? 'bg-amber-50 text-amber-700'
                                    : 'text-gray-700'
                            }`}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;