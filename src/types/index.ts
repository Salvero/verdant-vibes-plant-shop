export interface Product {
    id: string;
    name: string;
    scientificName: string;
    price: number;
    image: string;
    category: 'indoor' | 'outdoor' | 'succulent';
    light: 'low' | 'medium' | 'bright';
    care: 'easy' | 'moderate' | 'expert';
    description: string;
}
