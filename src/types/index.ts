export interface Product {
    id: string;
    name: string;
    scientificName: string;
    price: number;
    image: string;
    category: 'indoor' | 'outdoor' | 'succulent';
    light: 'low' | 'medium' | 'bright';
    water: 'weekly' | 'bi-weekly' | 'monthly';
    difficulty: 'easy' | 'medium' | 'expert';
    description: string;
}

export interface Review {
    id: string;
    productId: string;
    userName: string;
    rating: number;
    date: string;
    comment: string;
    verifiedPurchase: boolean;
}
