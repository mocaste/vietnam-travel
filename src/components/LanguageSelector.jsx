import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const LanguageSelector = () => {
    const { currentLanguage, changeLanguage } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'ro', name: 'Română', flag: '🇷🇴' },
        { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' }
    ];

    const currentLang = languages.find(lang => lang.code === currentLanguage);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && 
                buttonRef.current && !buttonRef.current.contains(event.target)) {
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

    const toggleDropdown = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setDropdownPosition({
                top: rect.bottom + 4, // 4px gap, no scroll offset
                left: rect.right - 160 // 160px is dropdown width
            });
        }
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative" ref={buttonRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/20 transition-colors border border-white/20"
            >
                <span>{currentLang?.flag}</span>
                <span>{currentLang?.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div 
                    ref={dropdownRef}
                    className="fixed bg-white rounded-md shadow-lg border border-gray-200 py-1 z-[9999] w-40"
                    style={{
                        top: dropdownPosition.top,
                        left: dropdownPosition.left
                    }}
                >
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full flex items-center space-x-2 px-3 py-2 text-sm hover:bg-gray-100 transition-colors ${
                                currentLanguage === lang.code
                                    ? 'bg-emerald-50 text-emerald-700'
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