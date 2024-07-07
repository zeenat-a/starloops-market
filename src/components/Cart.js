import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className="cart-container">
            <main className="cart-main">
                <h1>Checkout</h1>
                <div className="cart-steps">
                    <div className="step completed">
                        <span>1. Cart</span>
                    </div>
                    <div className="step">
                        <span>2. Details</span>
                    </div>
                    <div className="step">
                        <span>3. Payment</span>
                    </div>
                </div>
                <div className="cart-item">
                    <img src="blueberry.webp" alt="Blueberry Bucket Hat" />
                    <div className="item-details">
                        <h2>Blueberry Bucket Hat</h2>
                        <p>$25.00</p>
                    </div>
                    <div className="item-quantity">
                        <button className="quantity-btn">-</button>
                        <span>1</span>
                        <button className="quantity-btn">+</button>
                    </div>
                </div>
                <div className="cart-summary">
                    <p>Subtotal</p>
                    <p>$25.00</p>
                </div>
            </main>
        </div>
    );
};

export default Cart;