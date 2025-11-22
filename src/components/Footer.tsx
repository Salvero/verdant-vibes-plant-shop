import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3 className="footer-logo">Verdant Vibes</h3>
                    <p>Bringing nature into your home, one plant at a time.</p>
                </div>

                <div className="footer-section">
                    <h4>Shop</h4>
                    <Link to="/shop?category=indoor">Indoor Plants</Link>
                    <Link to="/shop?category=outdoor">Outdoor Plants</Link>
                    <Link to="/shop?category=succulents">Succulents</Link>
                </div>

                <div className="footer-section">
                    <h4>Support</h4>
                    <Link to="/care">Care Guide</Link>
                    <Link to="/shipping">Shipping & Returns</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="#" className="social-link"><Instagram size={20} /></a>
                        <a href="#" className="social-link"><Facebook size={20} /></a>
                        <a href="#" className="social-link"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Verdant Vibes. All rights reserved.</p>
            </div>
        </footer>
    );
};
