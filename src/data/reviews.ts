import type { Review } from '../types';

export const reviews: Review[] = [
    // Monstera Deliciosa (ID: 1)
    {
        id: 'r1',
        productId: '1',
        userName: 'Sarah M.',
        rating: 5,
        date: '2023-10-15',
        comment: 'Absolutely stunning plant! It arrived in perfect condition and has already grown two new leaves. The packaging was incredible.',
        verifiedPurchase: true
    },
    {
        id: 'r2',
        productId: '1',
        userName: 'James Wilson',
        rating: 5,
        date: '2023-11-02',
        comment: 'Bigger than I expected. A true statement piece for my living room.',
        verifiedPurchase: true
    },
    {
        id: 'r3',
        productId: '1',
        userName: 'Emily Chen',
        rating: 4,
        date: '2023-09-28',
        comment: 'Beautiful plant, but one leaf had a small tear. Customer service was helpful though.',
        verifiedPurchase: true
    },

    // Snake Plant (ID: 2)
    {
        id: 'r4',
        productId: '2',
        userName: 'Mike R.',
        rating: 5,
        date: '2023-10-20',
        comment: 'I kill everything, but this guy is still thriving! Perfect for my dark office corner.',
        verifiedPurchase: true
    },
    {
        id: 'r5',
        productId: '2',
        userName: 'Jessica T.',
        rating: 5,
        date: '2023-11-10',
        comment: 'Sleek and modern. Love the pot it came in too.',
        verifiedPurchase: false
    },

    // Fiddle Leaf Fig (ID: 3)
    {
        id: 'r6',
        productId: '3',
        userName: 'David K.',
        rating: 4,
        date: '2023-10-05',
        comment: 'Gorgeous tree. It dropped a few leaves at first (as expected with fiddles), but it is happy now.',
        verifiedPurchase: true
    },
    {
        id: 'r7',
        productId: '3',
        userName: 'Amanda L.',
        rating: 5,
        date: '2023-11-15',
        comment: 'Came taller than described! Very happy with this purchase.',
        verifiedPurchase: true
    },

    // Peace Lily (ID: 4)
    {
        id: 'r8',
        productId: '4',
        userName: 'Robert P.',
        rating: 5,
        date: '2023-10-30',
        comment: 'So dramatic when it needs water, but bounces back instantly. Beautiful blooms.',
        verifiedPurchase: true
    },

    // Aloe Vera (ID: 5)
    {
        id: 'r9',
        productId: '5',
        userName: 'Lisa G.',
        rating: 5,
        date: '2023-09-15',
        comment: 'Healthy, plump leaves. Already used some for a kitchen burn!',
        verifiedPurchase: true
    },

    // Bird of Paradise (ID: 10)
    {
        id: 'r10',
        productId: '10',
        userName: 'Marcus J.',
        rating: 5,
        date: '2023-11-01',
        comment: 'This plant is a showstopper. It gives my apartment such a tropical vibe.',
        verifiedPurchase: true
    },
    {
        id: 'r11',
        productId: '10',
        userName: 'Sophie B.',
        rating: 4,
        date: '2023-10-12',
        comment: 'Needs a lot of light, so make sure you have a sunny spot. Plant is healthy and strong.',
        verifiedPurchase: true
    }
];
