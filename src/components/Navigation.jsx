import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Navigation = ({ activeTab, onTabChange }) => {
    const { t } = useTranslation();
    
    const navigationTabs = [
        { id: 'overview', labelKey: "travelData.navigationTabs.overview" },
        { id: 'itinerary', labelKey: "travelData.navigationTabs.itinerary" },
        { id: 'features', labelKey: "travelData.navigationTabs.features" },
        { id: 'packages', labelKey: "travelData.navigationTabs.packages" }
    ];
    
    return (
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex space-x-8">
                    {navigationTabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                                activeTab === tab.id
                                    ? 'border-emerald-500 text-emerald-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            {t(tab.labelKey)}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;