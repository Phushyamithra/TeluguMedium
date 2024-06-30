import React, { useState, useEffect, useRef } from 'react';
import { FastAverageColor } from 'fast-average-color';
import '../../styles/card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, image, title, price }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [bgColor, setBgColor] = useState('#fff');
    const imgRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fac = new FastAverageColor();
        const img = imgRef.current;

        const setImageColor = () => {
            fac.getColorAsync(img)
                .then(color => setBgColor(color.rgb))
                .catch(e => console.error(e));
        };

        if (img.complete) {
            setImageColor();
        } else {
            img.addEventListener('load', setImageColor);
            return () => img.removeEventListener('load', setImageColor);
        }
    }, [image]);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleCardClick = () => {
        const url = `${window.location.origin}/productdetail/${id}`;
        window.open(url, '_blank');
    };

    return (
        <div className="card" onClick={handleCardClick}>
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
                                className={`size-button ${selectedSize === size ? 'size-button-selected' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent card click
                                    handleSizeClick(size);
                                }}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="card-footer">
                    <span className="price">{price}$</span>
                    <button
                        className="add-to-cart-button"
                        onClick={(e) => e.stopPropagation()} // Prevent card click
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
