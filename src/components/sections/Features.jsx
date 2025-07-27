import React from 'react';
import { Plane, Shield, Clock, Users, Phone, Star } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';
import { useTranslation } from '../../hooks/useTranslation';

const Features = () => {
    const { t } = useTranslation();
    
    const features = [
        { icon: <Plane className="w-6 h-6" />, titleKey: "travelData.features.flightTickets", descKey: "travelData.features.flightTicketsDesc" },
        { icon: <Shield className="w-6 h-6" />, titleKey: "travelData.features.completeOrganization", descKey: "travelData.features.completeOrganizationDesc" },
        { icon: <Clock className="w-6 h-6" />, titleKey: "travelData.features.noHiddenCosts", descKey: "travelData.features.noHiddenCostsDesc" },
        { icon: <Users className="w-6 h-6" />, titleKey: "travelData.features.personalized", descKey: "travelData.features.personalizedDesc" },
        { icon: <Phone className="w-6 h-6" />, titleKey: "travelData.features.support247", descKey: "travelData.features.support247Desc" },
        { icon: <Star className="w-6 h-6" />, titleKey: "travelData.features.localExperts", descKey: "travelData.features.localExpertsDesc" }
    ];
    
    return (
        <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('features.title')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={t(feature.titleKey)}
                        description={t(feature.descKey)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Features;