import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 text-amber-600">
                {icon}
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default FeatureCard;