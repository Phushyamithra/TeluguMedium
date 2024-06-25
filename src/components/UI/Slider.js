import React, { useEffect, useState } from 'react';

const Slider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(timer); // Cleanup timer on component unmount
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider">
            <button className="slider-button prev" onClick={prevSlide}>❮</button>
            <button className="slider-button next" onClick={nextSlide}>❯</button>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.img})` }}
                >
                    <div className="overlay"></div>
                    <h3>{slide.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default Slider;
