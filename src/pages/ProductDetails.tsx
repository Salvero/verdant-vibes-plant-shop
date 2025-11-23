import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { Button } from '../components/Button';
import { Reviews } from '../components/Reviews';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Minus, Plus, Sun, Droplets, ShieldCheck } from 'lucide-react';

export const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Product not found</h2>
                <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
            </div>
        );
    }

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
    };

    return (
        <div className="product-details-page container">
            <button className="back-btn" onClick={() => navigate(-1)}>
                <ArrowLeft size={20} /> Back
            </button>

            <div className="product-details-grid">
                <div className="product-gallery">
                    <img src={product.image} alt={product.name} className="main-image" />
                </div>

                <div className="product-info-section">
                    <span className="product-scientific-lg">{product.scientificName}</span>
                    <h1 className="product-title-lg">{product.name}</h1>
                    <p className="product-price-lg">${product.price.toFixed(2)}</p>

                    <div className="product-description">
                        <p>{product.description}</p>
                    </div>

                    <div className="care-guide">
                        <h3>Care Guide</h3>
                        <div className="care-items">
                            <div className="care-item">
                                <Sun className="care-icon" />
                                <div>
                                    <strong>Light</strong>
                                    <p>{product.light === 'bright' ? 'Bright Indirect' : product.light === 'medium' ? 'Medium Light' : 'Low Light'}</p>
                                </div>
                            </div>
                            <div className="care-item">
                                <Droplets className="care-icon" />
                                <div>
                                    <strong>Water</strong>
                                    <p>{product.water === 'weekly' ? 'Water Weekly' : product.water === 'bi-weekly' ? 'Every 2 Weeks' : 'Monthly'}</p>
                                </div>
                            </div>
                            <div className="care-item">
                                <ShieldCheck className="care-icon" />
                                <div>
                                    <strong>Difficulty</strong>
                                    <p style={{ textTransform: 'capitalize' }}>{product.difficulty}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="add-to-cart-section">
                        <div className="quantity-selector">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={16} /></button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}><Plus size={16} /></button>
                        </div>
                        <Button size="lg" className="add-btn" onClick={handleAddToCart}>
                            Add to Cart - ${(product.price * quantity).toFixed(2)}
                        </Button>
                    </div>
                </div>
            </div>

            <Reviews productId={product.id} />
        </div>
    );
};
