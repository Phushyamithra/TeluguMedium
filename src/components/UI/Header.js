import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TiThListOutline } from "react-icons/ti";
import '../../styles/header.css';
import half_logo from '../../Assets/Half_logo.png';
import half_logo_white from '../../Assets/Half_logo-white.png'
import CartPage from '../Pages/CartPage.js';
import sweat_side from '../../Assets/clothes/sweat_side.png';
import hoodie_side from '../../Assets/clothes/hoodie_side.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Initial state: menu closed
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([
    { name: 'The ReTrack Half-Zip Sweatshirt', size: 'Medium', color: 'Heather Grey', price: 98, quantity: 1, image: hoodie_side },
    { name: 'The ReTrack Jogger', size: 'Small', color: 'Heather Grey', price: 98, quantity: 1, image: sweat_side }
  ]);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle cart visibility
  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };
  const [scrolled, setScrolled] = useState(false);
  // Effect to handle scroll event and change header background
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header-container');
      if (!isOpen && window.scrollY > 0 && window.innerWidth > 1024) {
        setScrolled(true);
        header.classList.add('header-scrolled');
      } else {
        setScrolled(false);
        header.classList.remove('header-scrolled');
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className={`header-container ${isOpen ? 'open' : ''}`}>
      <div className="nav-menu">
        <Link to="/" className="nav-link button_slide slide_down">HOME</Link>
        <Link to="/shop" className="nav-link button_slide slide_down">SHOP</Link>
        <Link to="/story" className="nav-link button_slide slide_down">OUR STORY</Link>

        <img className="nav-link logo" src={scrolled === false ? half_logo : half_logo_white} alt="Small Logo" />

        <Link to="/contact" className="nav-link button_slide slide_down">CONTACT</Link>
        <Link to="/account" className="nav-link button_slide slide_down">ACCOUNT</Link>
        <Link to="/account" className="nav-link button_slide slide_down">READ</Link>
      </div>
      <div className='nav-icons'>
        <Link to="/wishlist" className="nav-link button_slide slide_down"><FaHeart /></Link>

        <span className="nav-link button_slide slide_down"><FaShoppingCart onClick={toggleCart} /></span>
      </div>
      <div className="mobile">
        <img className="logoMedia" src={half_logo} alt="Small Logo" />
        <span className="mobile cart "><FaShoppingCart onClick={toggleCart} /></span>

        <TiThListOutline className='burger-icon burger-right' onClick={toggleMenu} />
        {isOpen && <div className="background-overlay" onClick={toggleMenu}></div>}
        {
          isOpen && (
            <div className="mobile-nav-menu">
              <Link to="/" className="nav-link button_slide slide_down">HOME</Link>
              <Link to="/shop" className="nav-link button_slide slide_down">SHOP</Link>
              <Link to="/story" className="nav-link button_slide slide_down">OUR STORY</Link>
              <Link to="/contact" className="nav-link button_slide slide_down">CONTACT</Link>
              <Link to="/account" className="nav-link button_slide slide_down">ACCOUNT</Link>
              <Link to="/wishlist" className="nav-link button_slide slide_down">WISHLIST</Link>

              <span className="nav-link button_slide slide_down" onClick={toggleCart}>CART</span>
            </div>
          )
        }
        {cartVisible && <CartPage items={cartItems} onClose={toggleCart} />}
      </div>
    </div>
  );
}

export default Header;
