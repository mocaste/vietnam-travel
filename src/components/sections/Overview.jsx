import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const Overview = () => {
    const { t } = useTranslation();
    const images = [
        {
            src: "/vietnam-travel/images/ho-chi-minh.jpg",
            alt: "Ho Chi Minh City"
        },
        {
            src: "/vietnam-travel/images/hoi-an.jpg",
            alt: "Hoi An"
        },
        {
            src: "/vietnam-travel/images/hanoi.jpg",
            alt: "Hanoi"
        },
        {
            src: "/vietnam-travel/images/da-nang.jpg",
            alt: "Vietnam landscape"
        }
    ];

    return (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    {t('overview.title')}
                </h3>
                <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                        {t('overview.paragraph1')}
                    </p>
                    <p>
                        {t('overview.paragraph2')}
                    </p>
                    <p>
                        {t('overview.paragraph3')}
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={`rounded-lg shadow-md hover:shadow-xl transition-shadow ${
                            index === 1 ? 'mt-8' : index === 2 ? '-mt-8' : ''
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Overview;