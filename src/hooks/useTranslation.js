import { useContext } from 'react';
import { LanguageContext } from '../contexts/languageContext';
import { translations } from '../translations';

export const useTranslation = () => {
    const { currentLanguage, changeLanguage } = useContext(LanguageContext);

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[currentLanguage];
        
        for (const k of keys) {
            value = value?.[k];
        }
        
        return value || key;
    };

    return { t, currentLanguage, changeLanguage };
};