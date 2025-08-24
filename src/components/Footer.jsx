import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
    const { t } = useTranslation();
    
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-xl font-bold mb-4">{t('footer.companyName')}</h4>
                        <p className="text-gray-300 mb-4">
                            {t('footer.description')}
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                                <Mail className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-4">{t('footer.popularDestinations')}</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>{t('footer.vietnam')}</li>
                            <li>{t('footer.thailand')}</li>
                            <li>{t('footer.japan')}</li>
                            <li>{t('footer.cambodia')}</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-4">{t('footer.contact')}</h4>
                        <div className="space-y-2 text-gray-300">
                            <p>{t('footer.email')}</p>
                            <p>{t('footer.phone')}</p>
                            <p>{t('footer.address')}</p>
                            <p className="text-emerald-400 font-semibold">{t('footer.support247')}</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400">&copy; 2025 {t('footer.companyName')}. {t('footer.allRightsReserved')}.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;