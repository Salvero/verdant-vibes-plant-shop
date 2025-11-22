import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import { Button } from '../components/Button';
import { Star, Filter, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useWishlist } from '../context/WishlistContext';

export const Shop: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedLight, setSelectedLight] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const { isInWishlist, toggleWishlist } = useWishlist();

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            if (selectedCategory && product.category !== selectedCategory) return false;
            if (selectedLight && product.light !== selectedLight) return false;
            if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                !product.scientificName.toLowerCase().includes(searchQuery.toLowerCase())) return false;
            return true;
        });
    }, [selectedCategory, selectedLight, searchQuery]);

    const categories = ['indoor', 'outdoor', 'succulent'];
    const lightLevels = ['low', 'medium', 'bright'];

    return (
        <div className="shop-page container">
            <div className="shop-header">
                <h1>All Plants</h1>
                <p>Find the perfect green companion for your space.</p>
            </div>

            <div className="shop-layout">
                {/* Mobile Filter Toggle */}
                <button
                    className="filter-toggle-btn"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                    <Filter size={20} /> Filters
                </button>

                {/* Sidebar Filters */}
                <aside className={`shop-filters ${isFilterOpen ? 'open' : ''}`}>
                    <div className="filter-header-mobile">
                        <h3>Filters</h3>
                        <button onClick={() => setIsFilterOpen(false)}><X size={20} /></button>
                    </div>

                    <div className="filter-group search-group">
                        <div className="search-input-wrapper">
                            <Search size={18} className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search plants..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Category</h3>
                        <div className="filter-options">
                            <label className="filter-checkbox">
                                <input
                                    type="radio"
                                    name="category"
                                    checked={selectedCategory === null}
                                    onChange={() => setSelectedCategory(null)}
                                />
                                <span>All Categories</span>
                            </label>
                            {categories.map(cat => (
                                <label key={cat} className="filter-checkbox">
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={selectedCategory === cat}
                                        onChange={() => setSelectedCategory(cat)}
                                    />
                                    <span style={{ textTransform: 'capitalize' }}>{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Light Requirement</h3>
                        <div className="filter-options">
                            <label className="filter-checkbox">
                                <input
                                    type="radio"
                                    name="light"
                                    checked={selectedLight === null}
                                    onChange={() => setSelectedLight(null)}
                                />
                                <span>Any Light</span>
                            </label>
                            {lightLevels.map(level => (
                                <label key={level} className="filter-checkbox">
                                    <input
                                        type="radio"
                                        name="light"
                                        checked={selectedLight === level}
                                        onChange={() => setSelectedLight(level)}
                                    />
                                    <span style={{ textTransform: 'capitalize' }}>{level}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="shop-products">
                    <div className="results-count">
                        Showing {filteredProducts.length} results
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="product-grid">
                            {filteredProducts.map((product) => (
                                <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                                    <div className="product-image-wrapper">
                                        <img src={product.image} alt={product.name} className="product-image" />
                                        <button
                                            className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleWishlist(product.id);
                                            }}
                                        >
                                            <Star size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                                        </button>
                                    </div>
                                    <div className="product-info">
                                        <p className="product-scientific">{product.scientificName}</p>
                                        <h3 className="product-name">{product.name}</h3>
                                        <div className="product-meta">
                                            <span className="product-price">${product.price.toFixed(2)}</span>
                                            <Button size="sm" variant="outline" onClick={(e) => {
                                                e.preventDefault();
                                            }}>View</Button>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <p>No plants found matching your criteria.</p>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setSelectedCategory(null);
                                    setSelectedLight(null);
                                    setSearchQuery('');
                                }}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
