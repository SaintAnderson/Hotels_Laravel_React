import React, { useState, useEffect } from 'react';

const Carousel = () => {
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
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        // Очистка интервала при размонтировании компонента
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="carouselExampleCaptions" className="relative">
            <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => goToSlide(index)}
                        className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
                            index === activeIndex ? 'opacity-100' : ''
                        }`}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
                            index === activeIndex ? '' : 'hidden'
                        }`}
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <img src={slide.src} className="block w-full" alt="..." />
                        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl">{slide.label}</h5>
                            <p>{slide.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                onClick={prevSlide}
            >
        <span className="inline-block h-8 w-8">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
            </button>

            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                onClick={nextSlide}
            >
        <span className="inline-block h-8 w-8">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
            </button>
        </div>
    );
};

export default Carousel;
