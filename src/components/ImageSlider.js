import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="product-image-slider">
            <img
                src={images[currentIndex]}
                alt={`Product ${currentIndex + 1}`}
                className="product-image"
            />
            <div className="slider-controls">
                <button className="slider-button" onClick={handlePrev}>
                    &#8249;
                </button>
                <button className="slider-button" onClick={handleNext}>
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
