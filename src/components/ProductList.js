import Card from './Card.js';
import '../styles/items.css';
import { useState } from 'react';
import { RightArrow, LeftArrow } from '../UI/RightArrow.js';

const ProductList = ({ data, type }) => {
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        if (startIndex < data.length - 4) setStartIndex(startIndex + 4);
    };

    const handlePrev = () => {
        if (startIndex > 0) setStartIndex(startIndex - 4);
    };

    const handleProductClick = (product) => {
        sessionStorage.setItem('selectedProduct', JSON.stringify(product));
        const productUrl = `/per-type/${product.type}`;
        window.open(productUrl, '_blank');
    };

    if (type === "themes") {
        return (
            <div className="product-list">
                <LeftArrow className="left-arrow" handleLeftClick={handlePrev} />
                {data.slice(startIndex, startIndex + 4).map(product => (
                    <div key={product.id} className="product-item">
                        <div onClick={() => handleProductClick(product)}>
                            <Card product={product} />
                        </div>
                    </div>
                ))}
                <RightArrow className="right-arrow" handleRightClick={handleNext} />
            </div>
        );
    } else if (type === "products") {
        const productsWithId1 = data.reduce((acc, curr) => {
            const productWithId1 = curr.find(product => product.id === 1);
            if (productWithId1) {
                acc.push([productWithId1]);
            }
            return acc;
        }, []);
        console.log(productsWithId1);
        let ind = 0;
        let flattenData = productsWithId1.flat();
        return (
            <div className="product-list">
                <LeftArrow handleLeftClick={handlePrev} />
                {flattenData.slice(startIndex, startIndex + 4).map(product => (
                    <div key={ind++} className="product-item">
                        <div onClick={() => handleProductClick(product)}>
                            <Card product={product} />
                        </div>
                    </div>
                ))}
                <RightArrow handleRightClick={handleNext} />
            </div>
        );
    }
}

export default ProductList;
