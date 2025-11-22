import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
    const { cartCount, setIsCartOpen } = useCart();

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    Verdant Vibes
                </Link>

                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/shop" className="nav-link">Shop</Link>
                    <Link to="/care" className="nav-link">Care</Link>
                </div>

                <div className="navbar-actions">
                    <button
                        className="icon-btn"
                        onClick={() => setIsCartOpen(true)}
                    >
                        <ShoppingBag size={24} />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </button>
                    <button className="icon-btn mobile-menu-btn">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>
    );
};
