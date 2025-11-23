import React from 'react';
import { Star, CheckCircle, User } from 'lucide-react';
import { reviews } from '../data/reviews';
import { Button } from './Button';

interface ReviewsProps {
    productId: string;
}

export const Reviews: React.FC<ReviewsProps> = ({ productId }) => {
    const productReviews = reviews.filter(r => r.productId === productId);

    const averageRating = productReviews.length > 0
        ? productReviews.reduce((acc, curr) => acc + curr.rating, 0) / productReviews.length
        : 0;

    return (
        <div className="reviews-section">
            <div className="reviews-header">
                <h2 className="reviews-title">Customer Reviews</h2>

                {productReviews.length > 0 ? (
                    <div className="reviews-summary">
                        <div className="summary-rating">
                            <span className="big-rating">{averageRating.toFixed(1)}</span>
                            <div className="summary-stars">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={20}
                                        fill={star <= Math.round(averageRating) ? "#F59E0B" : "none"}
                                        color={star <= Math.round(averageRating) ? "#F59E0B" : "#CBD5E1"}
                                    />
                                ))}
                            </div>
                            <span className="review-count">Based on {productReviews.length} reviews</span>
                        </div>
                        <Button variant="outline">Write a Review</Button>
                    </div>
                ) : (
                    <div className="no-reviews">
                        <p>No reviews yet. Be the first to review this plant!</p>
                        <Button variant="outline">Write a Review</Button>
                    </div>
                )}
            </div>

            <div className="reviews-list">
                {productReviews.map((review) => (
                    <div key={review.id} className="review-card">
                        <div className="review-header">
                            <div className="reviewer-info">
                                <div className="reviewer-avatar">
                                    <User size={20} />
                                </div>
                                <div>
                                    <span className="reviewer-name">{review.userName}</span>
                                    {review.verifiedPurchase && (
                                        <span className="verified-badge">
                                            <CheckCircle size={12} /> Verified Buyer
                                        </span>
                                    )}
                                </div>
                            </div>
                            <span className="review-date">
                                {new Date(review.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>

                        <div className="review-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    size={14}
                                    fill={star <= review.rating ? "#F59E0B" : "none"}
                                    color={star <= review.rating ? "#F59E0B" : "#CBD5E1"}
                                />
                            ))}
                        </div>

                        <p className="review-comment">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
