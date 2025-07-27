import React from 'react';

const Overview = () => {
    const images = [
        {
            src: `${import.meta.env.BASE_URL}images/ho-chi-minh.jpg`,
            alt: "Ho Chi Minh City"
        },
        {
            src: `${import.meta.env.BASE_URL}images/hoi-an.jpg`,
            alt: "Hoi An"
        },
        {
            src: `${import.meta.env.BASE_URL}images/hanoi.jpg`,
            alt: "Hanoi"
        },
        {
            src: `${import.meta.env.BASE_URL}images/da-nang.jpg`,
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