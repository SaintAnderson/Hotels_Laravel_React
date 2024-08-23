import React, { useState, useEffect } from 'react';

export default function () {
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = [
        {
            src: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg",
            label: "First slide label",
            text: "Some representative placeholder content for the first slide.",
        },
        {
            src: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg",
            label: "Second slide label",
            text: "Some representative placeholder content for the second slide.",
        },
        {
            src: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg",
            label: "Third slide label",
            text: "Some representative placeholder content for the third slide.",
        },
    ];

    const goToSlide = (index) => {
        setActiveIndex(index);
        resetInterval(); // Сбросить таймер при переходе к слайду
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const resetInterval = () => {
        clearInterval(intervalRef.current); // Очищаем предыдущий таймер
        intervalRef.current = setInterval(nextSlide, 3000); // Устанавливаем новый таймер
    };

    const intervalRef = React.useRef();

    useEffect(() => {
        intervalRef.current = setInterval(nextSlide, 3000); // Запускаем таймер при монтировании

        return () => clearInterval(intervalRef.current); // Очищаем таймер при размонтировании
    }, []);

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Кнопки навигации */}
            <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => goToSlide(index)}
                        className={`mx-2 h-2 w-8 rounded transition-opacity duration-300 ${
                            index === activeIndex ? 'bg-green-700 opacity-100' : 'bg-gray-300 opacity-50'
                        }`}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="relative h-full">
                {slides.map((slide, index) => {
                    let animationClass = '';
                    if (index === activeIndex) {
                        animationClass = 'translate-x-0 opacity-100'; // Текущий слайд
                    } else if (index === (activeIndex + 1) % slides.length) {
                        animationClass = 'translate-x-full opacity-0'; // Следующий слайд (уходит влево)
                    } else {
                        animationClass = '-translate-x-full opacity-0'; // Предыдущий слайд (приходит справа)
                    }

                    return (
                        <div
                            key={index}
                            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${animationClass}`}
                            style={{ backfaceVisibility: 'hidden' }}
                        >
                            <img
                                src={slide.src}
                                className="object-cover w-full h-full"
                                alt={slide.label}
                            />
                            <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white">
                                <h5 className="text-xl">{slide.label}</h5>
                                <p>{slide.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
