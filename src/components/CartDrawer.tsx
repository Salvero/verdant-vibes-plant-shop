import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from './Button';

export const CartDrawer: React.FC = () => {
    const {
        items,
        removeFromCart,
        updateQuantity,
        cartTotal,
        isCartOpen,
        setIsCartOpen
    } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
            <div className="cart-drawer">
                <div className="cart-header">
                    <h2>Shopping Cart</h2>
                    <button className="close-btn" onClick={() => setIsCartOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <div className="cart-items">
                    {items.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your cart is empty.</p>
                            <Button onClick={() => setIsCartOpen(false)}>Continue Shopping</Button>
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <h4>{item.name}</h4>
                                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                                    <div className="cart-item-controls">
                                        <div className="quantity-selector sm">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                                        </div>
                                        <button
                                            className="remove-btn"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Subtotal</span>
                            <span className="total-amount">${cartTotal.toFixed(2)}</span>
                        </div>
                        <p className="shipping-note">Shipping calculated at checkout</p>
                        <Button className="checkout-btn" style={{ width: '100%' }}>
                            Checkout
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
};
