import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const Itinerary = () => {
    const { t } = useTranslation();
    
    const itinerary = [
        {
            dayKey: "travelData.itinerary.day1to3",
            locationKey: "travelData.itinerary.hoChiMinhCity",
            descriptionKey: "travelData.itinerary.hoChiMinhDesc",
            image: `${import.meta.env.BASE_URL}images/ho-chi-minh.jpg`
        },
        {
            dayKey: "travelData.itinerary.day4to5",
            locationKey: "travelData.itinerary.daNangHoiAn",
            descriptionKey: "travelData.itinerary.daNangHoiAnDesc",
            image: `${import.meta.env.BASE_URL}images/hoi-an.jpg`
        },
        {
            dayKey: "travelData.itinerary.day5to7",
            locationKey: "travelData.itinerary.iubitica",
            descriptionKey: "travelData.itinerary.iubiticaDesc",
            image: `${import.meta.env.BASE_URL}images/da-nang.jpg`
        },
        {
            dayKey: "travelData.itinerary.day7to10",
            locationKey: "travelData.itinerary.hanoi",
            descriptionKey: "travelData.itinerary.hanoiDesc",
            image: `${import.meta.env.BASE_URL}images/hanoi.jpg`
        }
    ];
    
    return (
        <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('itinerary.title')}</h3>
            <div className="space-y-8">
                {itinerary.map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            <div>
                                <h4 className="text-xl font-bold text-emerald-600 mb-2">{t(item.dayKey)}</h4>
                                <h5 className="text-2xl font-semibold text-gray-900 mb-4">{t(item.locationKey)}</h5>
                                <p className="text-gray-600 leading-relaxed">{t(item.descriptionKey)}</p>
                            </div>
                            <div className="md:col-span-2">
                                <img
                                    src={item.image}
                                    alt={t(item.locationKey)}
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