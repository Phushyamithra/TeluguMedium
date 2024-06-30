import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../../styles/productdetailpage.css';
import s1 from '../../Assets/clothes/card-hoodie2.jpg'
import s2 from '../../Assets/clothes/card-hoodie1.jpg';
import s3 from '../../Assets/clothes/card-hoodie3.jpg';
import s4 from '../../Assets/clothes/hoodie_side.jpg';
import TemplatePage from './TemplatePage';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import bg from '../../Assets/bg/renamed-contact.jpg'

export const ProductDetailPage = () => {
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const images = [
        s2, // Replace with your image URLs
        s3,
        s4,
        s1
    ];

    const handleNextImage = () => {
        setMainImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setMainImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <TemplatePage src={bg} type='image'>
            \            <div className="product-detail-container">
                <div className="product-slider">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Product Shot ${index + 1}`}
                            onClick={() => setMainImageIndex(index)}
                            className={`slider-image ${mainImageIndex === index ? 'active' : ''}`}
                        />
                    ))}
                </div>
                <div className="product-main-image">
                    <button className="arrow left-arrow" onClick={handlePrevImage}>&lt;</button>
                    <img src={images[mainImageIndex]} alt="Main Product Shot" />
                    <button className="arrow right-arrow" onClick={handleNextImage}>&gt;</button>
                </div>
                <div className="product-info">
                    <h2 className="product-title">CLASSIC PEACE LILY</h2>
                    <h3 className="product-subtitle">POPULAR HOUSE PLANT</h3>
                    <p className="product-price">$18</p>
                    <p className="product-description">
                        Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbon and butterfly pick.
                    </p>
                    <div className="product-buttons">
                        <button className="product-button">ADD TO CART</button>
                        <button className="product-button">WISHLIST</button>
                    </div>
                </div>
            </div>
        </TemplatePage>
    );
};
