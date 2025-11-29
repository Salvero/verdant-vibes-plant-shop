import React, { useState } from 'react';
import { ArrowRight, Star, Truck, Leaf, Package, Heart, Users, TrendingUp, Clock, Sparkles, ChevronRight, ShoppingCart } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Button } from '../components/Button';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export const Home: React.FC = () => {
    const { isInWishlist, toggleWishlist } = useWishlist();
    const { addToCart } = useCart();

    // Animation variants for orchestrated entrance
    const titleWords = ["Bring", "Nature", "Indoors"];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2
            }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as const // ease-out-expo
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.34, 1.56, 0.64, 1] as const // ease-bounce
            }
        }
    };

    // Scroll animation variants
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
        }
    };

    const staggerContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // Product filter state
    const [activeFilter, setActiveFilter] = useState('all');
    const filters = [
        { id: 'all', label: 'All Plants' },
        { id: 'easy', label: 'Beginner Friendly', key: 'difficulty' },
        { id: 'low', label: 'Low Light', key: 'light' },
        { id: 'bright', label: 'Bright Light', key: 'light' }
    ];

    const filteredProducts = products.filter(product => {
        if (activeFilter === 'all') return true;
        const filter = filters.find(f => f.id === activeFilter);
        if (!filter || !filter.key) return true;
        return product[filter.key as keyof typeof product] === activeFilter;
    });

    // Quiz state
    const [quizStep, setQuizStep] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
    const [showResults, setShowResults] = useState(false);

    const quizQuestions = [
        {
            question: "How much natural light does your space get?",
            options: [
                { value: 'bright', label: 'Bright', icon: '☀️' },
                { value: 'medium', label: 'Medium', icon: '⛅' },
                { value: 'low', label: 'Low', icon: '🌙' }
            ]
        },
        {
            question: "How often can you water?",
            options: [
                { value: 'weekly', label: 'Weekly', icon: '💧' },
                { value: 'bi-weekly', label: 'Bi-weekly', icon: '💦' },
                { value: 'monthly', label: 'Monthly', icon: '🌊' }
            ]
        },
        {
            question: "Your experience level?",
            options: [
                { value: 'easy', label: 'Beginner', icon: '🌱' },
                { value: 'medium', label: 'Intermediate', icon: '🪴' },
                { value: 'expert', label: 'Expert', icon: '🌳' }
            ]
        }
    ];

    const handleQuizAnswer = (value: string) => {
        setQuizAnswers({ ...quizAnswers, [quizStep]: value });
        if (quizStep < quizQuestions.length - 1) {
            setTimeout(() => setQuizStep(quizStep + 1), 300);
        } else {
            setTimeout(() => setShowResults(true), 300);
        }
    };

    const resetQuiz = () => {
        setQuizStep(0);
        setQuizAnswers({});
        setShowResults(false);
    };

    const getRecommendedPlants = () => {
        const lightPreference = quizAnswers[0];
        const waterPreference = quizAnswers[1];
        const difficultyPreference = quizAnswers[2];

        return products
            .filter(p =>
                p.light === lightPreference &&
                p.water === waterPreference &&
                p.difficulty === difficultyPreference
            )
            .slice(0, 3);
    };

    // Testimonial carousel
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const testimonials = [
        {
            quote: "My Monstera from Growhaus is thriving! The packaging was impeccable and the plant arrived in perfect condition. Couldn't be happier!",
            author: "Sarah Mitchell",
            role: "Plant Enthusiast",
            avatar: "https://i.pravatar.cc/150?img=1"
        },
        {
            quote: "As a beginner, I was nervous about plant care. The expert guidance and easy-care selections made it so simple. My home is now a jungle!",
            author: "Marcus Chen",
            role: "New Plant Parent",
            avatar: "https://i.pravatar.cc/150?img=12"
        },
        {
            quote: "The quality and variety are unmatched. I've ordered from many places, but Growhaus is now my go-to for rare finds and reliable care advice.",
            author: "Emma Rodriguez",
            role: "Plant Collector",
            avatar: "https://i.pravatar.cc/150?img=5"
        }
    ];

    // Featured blog posts
    const blogPosts = [
        {
            title: "5 Signs Your Plant Needs More Light",
            excerpt: "Learn to recognize when your green friends are craving more sunshine and how to fix it.",
            tag: "Care Tips",
            readTime: "5 min",
            image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?w=800&q=80"
        },
        {
            title: "The Ultimate Monstera Care Guide",
            excerpt: "Everything you need to know about growing healthy, fenestrated Monstera deliciosa.",
            tag: "Plant Spotlight",
            readTime: "8 min",
            image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80"
        },
        {
            title: "Small Space Plant Styling Tips",
            excerpt: "Transform your tiny apartment into a lush oasis with these space-saving strategies.",
            tag: "Styling",
            readTime: "6 min",
            image: "https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=800&q=80"
        }
    ];

    // Refs for scroll animations
    const featuresRef = React.useRef(null);
    const productsRef = React.useRef(null);
    const categoryRef = React.useRef(null);
    const socialProofRef = React.useRef(null);
    const blogRef = React.useRef(null);

    const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
    const productsInView = useInView(productsRef, { once: true, margin: "-100px" });
    const categoryInView = useInView(categoryRef, { once: true, margin: "-100px" });
    const socialProofInView = useInView(socialProofRef, { once: true, margin: "-100px" });
    const blogInView = useInView(blogRef, { once: true, margin: "-100px" });

    const getDifficultyLeaves = (difficulty: string) => {
        const count = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3;
        return Array.from({ length: 3 }, (_, i) => (
            <Leaf
                key={i}
                size={14}
                className={`difficulty-leaf ${i < count ? 'filled' : ''}`}
                fill={i < count ? 'currentColor' : 'none'}
            />
        ));
    };

    return (
        <div className="home-page">
            {/* Hero Section - Portfolio-worthy with animations */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        {/* Staggered headline animation */}
                        <motion.h1
                            className="hero-title"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {titleWords.slice(0, 2).map((word, index) => (
                                <motion.span
                                    key={index}
                                    className="hero-title-word"
                                    variants={wordVariants}
                                >
                                    {word}
                                </motion.span>
                            ))}
                            <br />
                            <motion.span
                                className="text-accent hero-title-word"
                                variants={wordVariants}
                            >
                                {titleWords[2]}
                            </motion.span>
                        </motion.h1>

                        {/* Fade-up subtitle with improved copy */}
                        <motion.p
                            className="hero-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.6,
                                ease: [0.16, 1, 0.3, 1] as const
                            }}
                        >
                            Expert-selected plants that actually thrive indoors. From low-light lovers to statement trees — find your perfect plant match.
                        </motion.p>

                        {/* Enhanced trust signals with icons */}
                        <motion.div
                            className="hero-social-proof"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.8,
                                ease: [0.16, 1, 0.3, 1] as const
                            }}
                        >
                            <div className="social-proof-item">
                                <div className="star-rating">
                                    <Star size={20} fill="currentColor" />
                                    <Star size={20} fill="currentColor" />
                                    <Star size={20} fill="currentColor" />
                                    <Star size={20} fill="currentColor" />
                                    <Star size={20} fill="currentColor" />
                                </div>
                                <span className="rating-text">4.9/5 Stars</span>
                            </div>
                            <span className="social-proof-divider">•</span>
                            <div className="social-proof-item">
                                <span className="benefit-text">
                                    <Truck size={20} className="trust-icon" />
                                    Free Shipping $99+
                                </span>
                            </div>
                        </motion.div>

                        {/* Animated buttons with stagger */}
                        <motion.div
                            className="hero-actions"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1,
                                        delayChildren: 1.0
                                    }
                                }
                            }}
                        >
                            <motion.div variants={buttonVariants}>
                                <Link to="/shop">
                                    <Button size="lg" className="btn-primary">
                                        Shop Now
                                        <ArrowRight size={18} className="button-arrow" />
                                    </Button>
                                </Link>
                            </motion.div>
                            <motion.div variants={buttonVariants}>
                                <Link to="/care">
                                    <Button variant="outline" size="lg" className="btn-outline">
                                        Care Guide
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Hero image with animated reveal */}
                <div className="hero-image-container">
                    <img src="/hero.png" alt="Lush indoor plants in modern interior" className="hero-image" />
                </div>
            </section>

            {/* Enhanced Features Section */}
            <motion.section
                ref={featuresRef}
                className="features-section"
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
                variants={staggerContainerVariants}
            >
                <div className="container features-grid">
                    <motion.div className="feature-card" variants={fadeUpVariants}>
                        <div className="feature-icon-wrapper">
                            <Leaf size={32} className="feature-icon" />
                        </div>
                        <h3>Sustainably Sourced</h3>
                        <p>Partnered with 500+ eco-certified nurseries committed to sustainable growing practices.</p>
                        <span className="feature-stat">Carbon-neutral shipping</span>
                    </motion.div>

                    <motion.div className="feature-card" variants={fadeUpVariants}>
                        <div className="feature-icon-wrapper">
                            <Package size={32} className="feature-icon" />
                        </div>
                        <h3>Arrives Healthy</h3>
                        <p>Our specialized packaging ensures your plants arrive in perfect condition, ready to thrive.</p>
                        <span className="feature-stat">99.5% healthy arrival rate</span>
                    </motion.div>

                    <motion.div className="feature-card" variants={fadeUpVariants}>
                        <div className="feature-icon-wrapper">
                            <Heart size={32} className="feature-icon" />
                        </div>
                        <h3>Expert Support</h3>
                        <p>Our plant care specialists are here to answer questions and help your plants flourish.</p>
                        <span className="feature-stat">24-hour response time</span>
                    </motion.div>
                </div>
            </motion.section>

            {/* Enhanced Product Grid with Filters */}
            <motion.section
                ref={productsRef}
                className="featured-section container"
                initial="hidden"
                animate={productsInView ? "visible" : "hidden"}
                variants={fadeUpVariants}
            >
                <div className="section-header">
                    <h2>Trending Plants</h2>
                    <Link to="/shop" className="view-all-link">
                        View All <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Product Filters */}
                <div className="product-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <motion.div
                    key={activeFilter}
                    className="product-grid"
                    variants={staggerContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredProducts.slice(0, 9).map((product, index) => (
                        <motion.div key={product.id} variants={fadeUpVariants}>
                            <Link to={`/product/${product.id}`} className="product-card">
                                <div className="product-image-wrapper">
                                    {index === 0 && <span className="product-badge bestseller">Bestseller</span>}
                                    {index === 1 && <span className="product-badge new">New</span>}
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
                                    <button
                                        className="quick-add-btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            addToCart(product);
                                        }}
                                    >
                                        <ShoppingCart size={18} style={{ display: 'inline', marginRight: '0.5rem' }} />
                                        Quick Add
                                    </button>
                                </div>
                                <div className="product-info">
                                    <div className="difficulty-indicator">
                                        {getDifficultyLeaves(product.difficulty)}
                                        <span style={{ fontSize: '0.75rem', marginLeft: '0.5rem', color: 'var(--color-text-muted)' }}>
                                            {product.difficulty}
                                        </span>
                                    </div>
                                    <p className="product-scientific">{product.scientificName}</p>
                                    <h3 className="product-name">{product.name}</h3>
                                    <div className="product-meta">
                                        <span className="product-price">${product.price.toFixed(2)}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Category Showcase - Bento Grid */}
            <motion.section
                ref={categoryRef}
                className="category-showcase"
                initial="hidden"
                animate={categoryInView ? "visible" : "hidden"}
                variants={fadeUpVariants}
            >
                <div className="container">
                    <div className="section-intro">
                        <h2>Shop by Vibe</h2>
                        <p>Find plants that match your space and lifestyle</p>
                    </div>

                    <div className="bento-grid">
                        {/* Card 1: Large - Low Light Lovers */}
                        <div className="category-card">
                            <img
                                src="https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=1200&q=80"
                                alt="Low Light Lovers"
                                className="category-image"
                                loading="lazy"
                            />
                            <div className="category-overlay">
                                <h3 className="category-name">Low Light Lovers</h3>
                                <p className="category-count">Perfect for apartments • 45 plants</p>
                            </div>
                        </div>

                        {/* Card 2: Top Right - Pet Safe */}
                        <div className="category-card">
                            <img
                                src="https://images.unsplash.com/photo-1463320726281-696a485928c7?w=800&q=80"
                                alt="Pet Safe Plants"
                                className="category-image"
                                loading="lazy"
                            />
                            <div className="category-overlay">
                                <h3 className="category-name">Pet Safe</h3>
                                <p className="category-count">Non-toxic varieties • 32 plants</p>
                            </div>
                        </div>

                        {/* Card 3: Small - Beginner */}
                        <div className="category-card">
                            <img
                                src="https://images.unsplash.com/photo-1459156212016-c812468e2115?w=600&q=80"
                                alt="Beginner Friendly"
                                className="category-image"
                                loading="lazy"
                            />
                            <div className="category-overlay">
                                <h3 className="category-name">Beginner</h3>
                                <p className="category-count">56 plants</p>
                            </div>
                        </div>

                        {/* Card 4: Small - Rare Finds */}
                        <div className="category-card">
                            <img
                                src="https://images.unsplash.com/photo-1558603668-6570496b66f8?w=600&q=80"
                                alt="Rare Finds"
                                className="category-image"
                                loading="lazy"
                            />
                            <div className="category-overlay">
                                <h3 className="category-name">Rare Finds</h3>
                                <p className="category-count">18 plants</p>
                            </div>
                        </div>

                        {/* Card 5: Small - Statement Trees */}
                        <div className="category-card">
                            <img
                                src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=800&q=80"
                                alt="Statement Trees"
                                className="category-image"
                                loading="lazy"
                            />
                            <div className="category-overlay">
                                <h3 className="category-name">Statement Trees</h3>
                                <p className="category-count">24 plants</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Plant Quiz Interactive Element */}
            <section className="plant-quiz">
                <div className="container quiz-container">
                    <div className="quiz-intro">
                        <h2>Find Your Perfect Plant</h2>
                        <p>Answer 3 quick questions to get personalized recommendations</p>
                    </div>

                    <div className="quiz-content">
                        {!showResults ? (
                            <>
                                {/* Progress Indicator */}
                                <div className="quiz-progress">
                                    {quizQuestions.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`progress-dot ${index < quizStep ? 'completed' : index === quizStep ? 'active' : ''}`}
                                        />
                                    ))}
                                </div>

                                {/* Current Question */}
                                <motion.div
                                    key={quizStep}
                                    className="quiz-question"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3>{quizQuestions[quizStep].question}</h3>
                                    <div className="quiz-options">
                                        {quizQuestions[quizStep].options.map((option) => (
                                            <button
                                                key={option.value}
                                                className={`quiz-option ${quizAnswers[quizStep] === option.value ? 'selected' : ''}`}
                                                onClick={() => handleQuizAnswer(option.value)}
                                            >
                                                <div className="quiz-option-icon">{option.icon}</div>
                                                <div className="quiz-option-label">{option.label}</div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Navigation */}
                                {quizStep > 0 && (
                                    <div className="quiz-navigation">
                                        <Button variant="outline" onClick={() => setQuizStep(quizStep - 1)}>
                                            Back
                                        </Button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <motion.div
                                className="quiz-results"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Sparkles size={48} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
                                <h3>Your Perfect Matches!</h3>
                                <p>Based on your preferences, we recommend these plants:</p>

                                <div className="recommended-plants">
                                    {getRecommendedPlants().length > 0 ? (
                                        getRecommendedPlants().map((plant) => (
                                            <Link to={`/product/${plant.id}`} key={plant.id} className="recommended-plant">
                                                <img src={plant.image} alt={plant.name} />
                                                <h4>{plant.name}</h4>
                                                <p>${plant.price}</p>
                                            </Link>
                                        ))
                                    ) : (
                                        <p>We're curating perfect matches for you! Browse our full collection.</p>
                                    )}
                                </div>

                                <div className="quiz-navigation">
                                    <Button onClick={resetQuiz}>Retake Quiz</Button>
                                    <Link to="/shop">
                                        <Button>Shop All Plants</Button>
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <motion.section
                ref={socialProofRef}
                className="social-proof"
                initial="hidden"
                animate={socialProofInView ? "visible" : "hidden"}
                variants={fadeUpVariants}
            >
                <div className="container">
                    {/* Animated Stats */}
                    <motion.div className="stats-bar" variants={staggerContainerVariants}>
                        <motion.div className="stat-item" variants={fadeUpVariants}>
                            <Users size={32} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
                            <div className="stat-number">50,000+</div>
                            <div className="stat-label">Happy Plant Parents</div>
                        </motion.div>

                        <motion.div className="stat-item" variants={fadeUpVariants}>
                            <Star size={32} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
                            <div className="stat-number">4.9★</div>
                            <div className="stat-label">Average Rating</div>
                        </motion.div>

                        <motion.div className="stat-item" variants={fadeUpVariants}>
                            <TrendingUp size={32} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
                            <div className="stat-number">98%</div>
                            <div className="stat-label">Would Recommend</div>
                        </motion.div>
                    </motion.div>

                    {/* Testimonial Carousel */}
                    <div className="testimonials-carousel">
                        <div className="testimonial-track">
                            <div className="testimonial-slide">
                                <p className="testimonial-quote">"{testimonials[testimonialIndex].quote}"</p>
                                <div className="testimonial-author">
                                    <img
                                        src={testimonials[testimonialIndex].avatar}
                                        alt={testimonials[testimonialIndex].author}
                                        className="author-avatar"
                                    />
                                    <div className="author-info">
                                        <h4>{testimonials[testimonialIndex].author}</h4>
                                        <p>{testimonials[testimonialIndex].role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-controls">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`carousel-dot ${index === testimonialIndex ? 'active' : ''}`}
                                    onClick={() => setTestimonialIndex(index)}
                                    aria-label={`View testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Blog Preview Section */}
            <motion.section
                ref={blogRef}
                className="blog-preview"
                initial="hidden"
                animate={blogInView ? "visible" : "hidden"}
                variants={fadeUpVariants}
            >
                <div className="container">
                    <div className="section-intro">
                        <h2>From Our Journal</h2>
                        <p>Expert tips and plant care wisdom</p>
                    </div>

                    <motion.div className="blog-grid" variants={staggerContainerVariants}>
                        {blogPosts.map((post, index) => (
                            <motion.article key={index} className="blog-card" variants={fadeUpVariants}>
                                <div className="blog-image-wrapper">
                                    <img src={post.image} alt={post.title} className="blog-image" />
                                    <span className="blog-tag">{post.tag}</span>
                                </div>
                                <div className="blog-content">
                                    <h3 className="blog-title">{post.title}</h3>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <div className="blog-meta">
                                        <span className="read-time">
                                            <Clock size={14} />
                                            {post.readTime} read
                                        </span>
                                        <ChevronRight size={16} />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Newsletter CTA */}
            <section className="newsletter-cta">
                <div className="container newsletter-content">
                    <h2>Join the Growhaus Family</h2>
                    <p>
                        Get care tips, early access to rare plants, and 15% off your first order
                    </p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                    <div className="trust-line">
                        <span>Join 25,000+ plant lovers</span>
                        <div className="avatar-stack">
                            <img src="https://i.pravatar.cc/32?img=1" alt="Customer" />
                            <img src="https://i.pravatar.cc/32?img=2" alt="Customer" />
                            <img src="https://i.pravatar.cc/32?img=3" alt="Customer" />
                            <img src="https://i.pravatar.cc/32?img=4" alt="Customer" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
