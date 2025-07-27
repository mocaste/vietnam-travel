export const getInitialLanguage = () => {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0].toLowerCase();
    
    // Supported languages
    const supportedLanguages = ['en', 'ro', 'vi'];
    
    return supportedLanguages.includes(langCode) ? langCode : 'en';
};