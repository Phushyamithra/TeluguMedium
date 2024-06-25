import items from '../Data/items.js';
import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card.js';
import '../../styles/Card.css';
import { RightArrow, LeftArrow } from '../../UI/RightArrow.js';
import { useState } from 'react';
import '../../styles/PerType.css';
import StandardPage from './StandardPage.js';


const PerType = () => {
  const { type } = useParams();

  // Flatten the nested arrays
  const allProducts = items.flat();

  // Filter products by the type parameter from the URL
  const typeProducts = allProducts.filter((item) => item.type === type);

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex < typeProducts.length - 4) setStartIndex(startIndex + 4);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 4);
  };

  const handleProductClick = (product) => {
    sessionStorage.setItem('selectedProduct', JSON.stringify(product));
    const productUrl = `/per-type/${product.type}`;
    window.open(productUrl, '_blank');
  };

  return (
    <>
      <StandardPage src={'/renamed-product-page.jpg'} type='image'>
        <div className="background-container">
          <div className="product-list">
            <LeftArrow handleLeftClick={handlePrev} />
            {typeProducts.slice(startIndex, startIndex + 4).map((product, index) => (
              <div key={index} className="product-item">
                <div onClick={() => handleProductClick(product)}>
                  <Card product={product} />
                </div>
              </div>
            ))}
            <RightArrow handleRightClick={handleNext} />
          </div>
        </div>
      </StandardPage>
    </>
  );
}

export default PerType;
