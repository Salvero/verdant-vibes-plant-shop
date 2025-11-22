import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/Button';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
    const featuredProducts = products.slice(0, 3);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content container">
                    <div className="hero-text">
                        <h1 className="hero-title">Bring Nature <br /> <span className="text-accent">Indoors</span></h1>
                        <p className="hero-subtitle">
                            Discover our curated collection of premium plants to transform your living space into a green sanctuary.
                        </p>
                        <div className="hero-actions">
                            <Link to="/shop">
                                <Button size="lg">Shop Now</Button>
                            </Link>
                            <Link to="/care">
                                <Button variant="outline" size="lg">Care Guide</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hero-image-container">
                    <img src="/hero.png" alt="Lush indoor plants" className="hero-image" />
                    <div className="hero-overlay"></div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🌱</div>
                        <h3>Sustainably Sourced</h3>
                        <p>We partner with eco-friendly nurseries to bring you the best plants.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🚚</div>
                        <h3>Secure Shipping</h3>
                        <p>Our specialized packaging ensures your plants arrive healthy and happy.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💚</div>
                        <h3>Expert Support</h3>
                        <p>Our plant doctors are here to help you with any care questions.</p>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="featured-section container">
                <div className="section-header">
                    <h2>Trending Plants</h2>
                    <Link to="/shop" className="view-all-link">
                        View All <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="product-grid">
                    {featuredProducts.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                            <div className="product-image-wrapper">
                                <img src={product.image} alt={product.name} className="product-image" />
                                <button className="wishlist-btn" onClick={(e) => e.preventDefault()}><Star size={18} /></button>
                            </div>
                            <div className="product-info">
                                <p className="product-scientific">{product.scientificName}</p>
                                <h3 className="product-name">{product.name}</h3>
                                <div className="product-meta">
                                    <span className="product-price">${product.price.toFixed(2)}</span>
                                    <Button size="sm" variant="outline" onClick={(e) => {
                                        e.preventDefault();
                                        // Add to cart logic here if needed, or just let it go to details
                                    }}>View</Button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section className="newsletter-section">
                <div className="container newsletter-content">
                    <h2>Join Our Green Community</h2>
                    <p>Get plant care tips, new arrival alerts, and exclusive offers.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <Button>Subscribe</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};
