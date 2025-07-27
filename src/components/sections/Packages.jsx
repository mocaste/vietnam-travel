import React from 'react';
import { packages } from '../../data/travelData.jsx';
import Button from '../ui/Button';

const Packages = () => {
    const handleBooking = (packageInfo) => {
        console.log('Booking package:', packageInfo);
    };

    return (
        <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pachete disponibile</h3>
            <div className="grid md:grid-cols-2 gap-6">
                {packages.map((pkg, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">{pkg.duration}</h4>
                                <p className="text-gray-600 mt-1">{pkg.route}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-emerald-600">{pkg.price}</p>
                                <p className="text-sm text-gray-500">per persoană</p>
                            </div>
                        </div>
                        <Button
                            variant="success"
                            className="w-full"
                            onClick={() => handleBooking(pkg)}
                        >
                            Rezervă acum
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Packages;