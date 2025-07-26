import React from 'react';
import { features } from '../../data/travelData.jsx';
import FeatureCard from '../ui/FeatureCard';

const Features = () => {
    return (
        <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">De ce să alegi Free Spirit?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.desc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Features;