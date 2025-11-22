import type { Product } from '../types';

export const products: Product[] = [
    {
        id: '1',
        name: 'Monstera Deliciosa',
        scientificName: 'Monstera deliciosa',
        price: 45.00,
        image: '/monstera.png',
        category: 'indoor',
        light: 'bright',
        care: 'moderate',
        description: 'The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its natural leaf holes. It loves bright, indirect light and adds a tropical feel to any room.'
    },
    {
        id: '2',
        name: 'Snake Plant',
        scientificName: 'Sansevieria trifasciata',
        price: 30.00,
        image: '/snake-plant.png',
        category: 'indoor',
        light: 'low',
        care: 'easy',
        description: 'Perfect for beginners, the Snake Plant is incredibly resilient and can tolerate low light and irregular watering. It also acts as a natural air purifier.'
    },
    {
        id: '3',
        name: 'Fiddle Leaf Fig',
        scientificName: 'Ficus lyrata',
        price: 65.00,
        image: '/fiddle-leaf.png',
        category: 'indoor',
        light: 'bright',
        care: 'expert',
        description: 'With its large, violin-shaped leaves, the Fiddle Leaf Fig is a statement piece. It requires consistent care and bright, indirect light to thrive.'
    }
];
