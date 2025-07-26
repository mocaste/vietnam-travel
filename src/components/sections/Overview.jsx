import React from 'react';

const Overview = () => {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=300&h=200&fit=crop",
            alt: "Ho Chi Minh City"
        },
        {
            src: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=300&h=200&fit=crop",
            alt: "Hoi An"
        },
        {
            src: "https://images.unsplash.com/photo-1509233131372-de8b8f50ad2b?w=300&h=200&fit=crop",
            alt: "Hanoi"
        },
        {
            src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
            alt: "Vietnam landscape"
        }
    ];

    return (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    O aventură de neuitat prin Vietnam
                </h3>
                <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                        Explorați orașul Ho Chi Minh, cel mai mare centru urban din Vietnam într-un tur privat
                        ce include vizite la monumente importante precum Muzeul Rămășițelor Războiului,
                        Palatul Reunificării, Catedrala Notre-Dame din Saigon și oficiul poștal.
                    </p>
                    <p>
                        Plimbați-vă prin piața Ben Thanh, unde aroma mirodeniilor și agitația comercianților
                        creează o atmosferă autentică. Vizitați Hoi An, orașul patrimoniu UNESCO în care
                        timpul pare să se fi oprit în loc.
                    </p>
                    <p>
                        Finalizați călătoria în Hanoi, savurând capitala țării, un oraș unde trecutul și
                        prezentul dansează în același ritm. Luați cu voi amintiri de neprețuit din Planeta Vietnam!
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