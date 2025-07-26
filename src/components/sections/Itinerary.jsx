import React from 'react';
import { itinerary } from '../../data/travelData.jsx';

const Itinerary = () => {
    return (
        <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Program detaliat - 10 zile</h3>
            <div className="space-y-8">
                {itinerary.map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            <div>
                                <h4 className="text-xl font-bold text-emerald-600 mb-2">{item.day}</h4>
                                <h5 className="text-2xl font-semibold text-gray-900 mb-4">{item.location}</h5>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                            <div className="md:col-span-2">
                                <img
                                    src={item.image}
                                    alt={item.location}
                                    className="w-full h-64 object-cover rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Itinerary;