import React, { useState, useEffect, useRef } from 'react';
import { FastAverageColor } from 'fast-average-color';
import '../../styles/card.css';

const Card = ({ image, title, price }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [bgColor, setBgColor] = useState('#fff');
    const imgRef = useRef(null);

    useEffect(() => {
        const fac = new FastAverageColor();
        const img = imgRef.current;
        if (img.complete) {
            const color = fac.getColor(img).rgb;
            setBgColor(color);
        } else {
            img.addEventListener('load', () => {
                const color = fac.getColor(img).rgb;
                setBgColor(color);
            });
        }
    }, [image]);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className="card">
            <img
                ref={imgRef}
                className="card-image"
                src={image}
                alt={title}
            />
            <div className="card-body" style={{ backgroundColor: bgColor }}>
                <h3 className="card-title">{title}</h3>
                <div className="size-selector">
                    <span className="size-label">Select Size</span>
                    <div className="size-buttons">
                        {['7', '7.5', '8', '8.5', '9'].map((size) => (
                            <button
                                key={size}
                                className={`size-button ${selectedSize === size ? 'size-button-selected' : ''
                                    }`}
                                onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="card-footer">
                    <span className="price">{price}</span>
                    <button className="add-to-cart-button">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
