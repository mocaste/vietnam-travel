import React from 'react';
import Button from '../ui/Button';
import { useTranslation } from '../../hooks/useTranslation';

const Packages = () => {
    const { t } = useTranslation();
    
    const packages = [
        { durationKey: "travelData.packages.package1Duration", routeKey: "travelData.packages.package1Route", price: "€899" },
        { durationKey: "travelData.packages.package2Duration", routeKey: "travelData.packages.package2Route", price: "€1,899" },
        { durationKey: "travelData.packages.package3Duration", routeKey: "travelData.packages.package3Route", price: "€1,299" },
        { durationKey: "travelData.packages.package4Duration", routeKey: "travelData.packages.package4Route", price: "€999" }
    ];
    
    const handleBooking = (packageInfo) => {
        console.log('Booking package:', packageInfo);
    };

    return (
        <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('packages.title')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
                {packages.map((pkg, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">{t(pkg.durationKey)}</h4>
                                <p className="text-gray-600 mt-1">{t(pkg.routeKey)}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-emerald-600">{pkg.price}</p>
                                <p className="text-sm text-gray-500">{t('packages.perPerson')}</p>
                            </div>
                        </div>
                        <Button
                            variant="success"
                            className="w-full"
                            onClick={() => handleBooking(pkg)}
                        >
                            {t('packages.bookNow')}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Packages;