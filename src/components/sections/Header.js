import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TiThListOutline } from "react-icons/ti";
import '../../styles/header.css';
import Cart from '../pages/Cart';
import sweat_side from '../../Assets/shop-assets/sweat_side.png';
import hoodie_side from '../../Assets/shop-assets/hoodie_side.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Initial state: menu closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([
      { name: 'The ReTrack Half-Zip Sweatshirt', size: 'Medium', color: 'Heather Grey', price: 98, quantity: 1, image: hoodie_side },
      { name: 'The ReTrack Jogger', size: 'Small', color: 'Heather Grey', price: 98, quantity: 1, image: sweat_side }
  ]);

  // Function to toggle cart visibility
  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div className={`header-container ${isOpen ? 'open' : ''}`}>
      <div className="nav-menu left">
        <Link to="/" className="nav-link button_slide slide_down ">HOME</Link>
        <Link to="/shop" className="nav-link button_slide slide_down ">SHOP</Link>
        <Link to="/story" className="nav-link button_slide slide_down ">OUR STORY</Link>
      </div>
      <img className="nav-link logo" src="/Half_logo.png" alt="Small Logo" />
      <div className="nav-menu right">
        <Link to="/contact" className="nav-link button_slide slide_down ">CONTACT</Link>
        <Link to="/account" className="nav-link button_slide slide_down ">ACCOUNT</Link>
        <Link to="/favorites" className="nav-link button_slide slide_down "><FaHeart /></Link>
        <span className="nav-link button_slide slide_down "><FaShoppingCart onClick={toggleCart}/></span> {/* <-- Changed Link to span to prevent page navigation */}
      </div>

      <TiThListOutline className='burger-icon burger-right' onClick={toggleMenu} />
      {isOpen && <div className="background-overlay" onClick={toggleMenu}></div>}
      {
        isOpen && (
          <div className="mobile-nav-menu">
            <Link to="/" className="nav-link button_slide slide_down ">HOME</Link>
            <Link to="/shop" className="nav-link button_slide slide_down ">SHOP</Link>
            <Link to="/story" className="nav-link button_slide slide_down ">OUR STORY</Link>
            <Link to="/contact" className="nav-link button_slide slide_down ">CONTACT</Link>
            <Link to="/account" className="nav-link button_slide slide_down ">ACCOUNT</Link>
            <Link to="/favorites" className="nav-link button_slide slide_down ">WISHLIST</Link>
            <span className="nav-link button_slide slide_down " onClick={toggleCart}>CART</span> {/* <-- Changed Link to span and added onClick handler */}
          </div>
        )
      }
      {cartVisible && <Cart items={cartItems} onClose={toggleCart} />} {/* <-- Conditional rendering of Cart */}
    </div>
  );
}

export default Header;
