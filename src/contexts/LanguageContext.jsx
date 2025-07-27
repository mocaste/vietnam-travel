import React, { useState, useEffect } from 'react';
import { getInitialLanguage } from '../utils/languageUtils';
import { LanguageContext } from './languageContext';

const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('en');

    useEffect(() => {
        setCurrentLanguage(getInitialLanguage());
    }, []);

    const changeLanguage = (language) => {
        setCurrentLanguage(language);
        localStorage.setItem('preferredLanguage', language);
    };

    // Check localStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('preferredLanguage');
        if (savedLanguage) {
            setCurrentLanguage(savedLanguage);
        }
    }, []);

    return (
        <LanguageContext.Provider value={{
            currentLanguage,
            changeLanguage
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;