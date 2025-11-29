import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, Search, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
    const { cartCount, setIsCartOpen } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className="navbar" role="navigation" aria-label="Main navigation">
                <div className="navbar-container">
                    <Link
                        to="/"
                        className="navbar-logo"
                        aria-label="Growhaus - Go to homepage"
                    >
                        <img src="/logo.svg" alt="" className="navbar-logo-icon" aria-hidden="true" />
                        Growhaus
                    </Link>

                    <div className="navbar-links" role="menubar">
                        <Link to="/" className="nav-link" role="menuitem">Home</Link>
                        <Link to="/shop" className="nav-link" role="menuitem">Shop</Link>
                        <Link to="/care" className="nav-link" role="menuitem">Care</Link>
                    </div>

                    <div className="navbar-actions">
                        <Link
                            to="/shop"
                            className="icon-btn"
                            aria-label="Search for plants"
                        >
                            <Search size={24} aria-hidden="true" />
                        </Link>
                        <button
                            className="icon-btn"
                            onClick={() => setIsCartOpen(true)}
                            aria-label={`Shopping cart with ${cartCount} item${cartCount !== 1 ? 's' : ''}`}
                        >
                            <ShoppingBag size={24} aria-hidden="true" />
                            {cartCount > 0 && (
                                <span className="cart-badge" aria-live="polite" aria-atomic="true">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button
                            className="icon-btn mobile-menu-btn"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open navigation menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <Menu size={24} aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="mobile-menu-overlay"
                    onClick={closeMobileMenu}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Menu Drawer */}
            <div
                id="mobile-menu"
                className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
            >
                <div className="mobile-menu-header">
                    <span className="mobile-menu-title" id="mobile-menu-title">Menu</span>
                    <button
                        className="icon-btn"
                        onClick={closeMobileMenu}
                        aria-label="Close navigation menu"
                    >
                        <X size={24} aria-hidden="true" />
                    </button>
                </div>
                <nav className="mobile-menu-nav" aria-labelledby="mobile-menu-title">
                    <Link
                        to="/"
                        className="mobile-nav-link"
                        onClick={closeMobileMenu}
                        tabIndex={isMobileMenuOpen ? 0 : -1}
                    >
                        Home
                    </Link>
                    <Link
                        to="/shop"
                        className="mobile-nav-link"
                        onClick={closeMobileMenu}
                        tabIndex={isMobileMenuOpen ? 0 : -1}
                    >
                        Shop
                    </Link>
                    <Link
                        to="/care"
                        className="mobile-nav-link"
                        onClick={closeMobileMenu}
                        tabIndex={isMobileMenuOpen ? 0 : -1}
                    >
                        Care
                    </Link>
                </nav>
            </div>
        </>
    );
};
