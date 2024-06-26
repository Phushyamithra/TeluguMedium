import React from 'react';
import bg from '../../Assets/bg-assets/wall4.jpg'
import '../../styles/wishlistpage.css';
import hoodie from '../../Assets/clothes/card-hoodie1.jpg';
import tee from '../../Assets/clothes/card-tee1.jpg';
import shirt from '../../Assets/clothes/shirt_side.png';
import sweat from '../../Assets/clothes/card_sweat1.jpg';
import Card from '../UI/Card.js'
import TemplatePage from './TemplatePage.js'
const WishlistPage = () => {
  const wishlistItems = [
    {
      id: 1,
      productName: "Tee",
      price: "$1000",
      imageUrl: tee
    },
    {
      id: 2,
      productName: "Hoodie",
      price: "$600",
      imageUrl: hoodie
    },
    {
      id: 3,
      productName: "Shirt",
      price: "$100",
      imageUrl: shirt
    },
    {
      id: 4,
      productName: "Sweatshirt",
      price: "$100",
      imageUrl: sweat
    },
  ];

  return (
    <TemplatePage src={bg} type="image">


      <div className="wishlist-container">
        <h2 className="wishlist-heading">Your Wishlist</h2>
        <div className="wishlist-items">
          {wishlistItems.map(item => (
            <Card image={item.imageUrl} title={item.productName} price={item.price}></Card>
          ))}
        </div>
      </div>
    </TemplatePage>
  );
};

export default WishlistPage;
