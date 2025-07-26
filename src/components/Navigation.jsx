import React from 'react';
import { navigationTabs } from '../data/travelData.jsx';

const Navigation = ({ activeTab, onTabChange }) => {
    return (
        <nav className="bg-white shadow-sm border-b sticky top-0 z-10">
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
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;