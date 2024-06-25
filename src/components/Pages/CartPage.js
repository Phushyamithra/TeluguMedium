import React from 'react';
import '../../styles/cartpage.css';

const CartPage = ({ items, onClose, onRemove }) => {
    const calculateTotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-overlay">
            <div className="cart-container">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>Your Cart</h2>
                <div className="cart-items">
                    {items.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p>{item.size} | {item.color}</p>
                                <p>${item.price}</p>
                                <div className="quantity-controls">
                                    <button>-</button>
                                    <span>{item.quantity}</span>
                                    <button>+</button>
                                </div>
                             <button className="remove-button" onClick={() => onRemove(index)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-total">
                    <p>Subtotal ({items.length} items): ${calculateTotal()}</p>
                    <button className="checkout-button">Continue To Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
