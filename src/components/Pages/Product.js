import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/Product.css';
import { FaArrowUp, FaArrowDown, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import StandardPage from './StandardPage.js';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const storedProduct = sessionStorage.getItem('selectedProduct');
        if (storedProduct) {
            setProduct(JSON.parse(storedProduct));
        }
    }, [id]);

    if (!product) {
        return <div>Product not found</div>;
    }

    const buttonUpClick = () => {

    }

    const buttonDownClick = () => {

    }

    const buttonRightClick = () => {

    }

    const buttonLeftClick = () => {

    }

    return (
        <>
            <StandardPage src={'./renamed-product-page.jpeg'} type={'image'}>
                <div className="product-page">
                    <div className="product-gallery">
                        <FaArrowUp onClick={buttonUpClick} />
                        <img src={product.pic} alt="Product shot 1" className="small-image" />
                        <img src={product.pic} alt="Product shot 2" className="small-image" />
                        <img src={product.pic} alt="Product shot 3" className="small-image" />
                        <FaArrowDown onClick={buttonDownClick} />
                    </div>
                    <div className="main-product">
                        <FaArrowLeft onClick={buttonLeftClick} />
                        <img src={product.pic} alt="Main product" className="main-image" />
                        <FaArrowRight onClick={buttonRightClick} />
                    </div>
                    <div className="product-details">
                        <h1>{product.title}</h1>
                        <p>Price: {product.price}</p>
                        <p>Description: This is a comfortable and stylish {product.subtitle} perfect for all seasons. Made with high-quality materials to ensure durability and comfort.</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                </div>
                <div className="recommendations">
                    <h2>Similar Products</h2>
                    <div className="recommendation-list">
                        <img src={product.pic} alt="Recommendation 1" className="recommendation-image" />
                        <img src={product.pic} alt="Recommendation 2" className="recommendation-image" />
                        <img src={product.pic} alt="Recommendation 3" className="recommendation-image" />
                    </div>
                </div>
            </StandardPage>
        </>
    );
}

export default Product;
