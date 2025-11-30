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

    // Spider Plant (ID: 6)
    {
        id: 'r12',
        productId: '6',
        userName: 'Jennifer S.',
        rating: 5,
        date: '2023-10-18',
        comment: 'Love this plant! It has already produced three baby plants that I gave to friends. Super easy to care for.',
        verifiedPurchase: true
    },
    {
        id: 'r13',
        productId: '6',
        userName: 'Tom H.',
        rating: 5,
        date: '2023-11-05',
        comment: 'Perfect for my hanging planter. The variegated leaves are beautiful and it grows so fast!',
        verifiedPurchase: true
    },
    {
        id: 'r14',
        productId: '6',
        userName: 'Rachel M.',
        rating: 4,
        date: '2023-09-22',
        comment: 'Great air purifying plant. Very forgiving if you forget to water it occasionally.',
        verifiedPurchase: false
    },

    // Rubber Plant (ID: 7)
    {
        id: 'r15',
        productId: '7',
        userName: 'Chris D.',
        rating: 5,
        date: '2023-10-25',
        comment: 'The burgundy leaves are stunning! Arrived in excellent condition. Makes a bold statement in my office.',
        verifiedPurchase: true
    },
    {
        id: 'r16',
        productId: '7',
        userName: 'Nicole W.',
        rating: 4,
        date: '2023-11-08',
        comment: 'Beautiful plant but be careful, it can grow quite tall. Needs wiping down occasionally to keep leaves shiny.',
        verifiedPurchase: true
    },

    // ZZ Plant (ID: 8)
    {
        id: 'r17',
        productId: '8',
        userName: 'Brian K.',
        rating: 5,
        date: '2023-10-14',
        comment: 'Best plant for my windowless office. Thrives on neglect! Still looks perfect after 3 months.',
        verifiedPurchase: true
    },
    {
        id: 'r18',
        productId: '8',
        userName: 'Hannah P.',
        rating: 5,
        date: '2023-11-12',
        comment: 'Absolutely indestructible! I travel for work and this plant doesn\'t care. Highly recommend for busy people.',
        verifiedPurchase: true
    },
    {
        id: 'r19',
        productId: '8',
        userName: 'Kevin L.',
        rating: 5,
        date: '2023-09-30',
        comment: 'Glossy green leaves look almost fake, they\'re so perfect. Very slow growing but very rewarding.',
        verifiedPurchase: true
    },

    // Golden Pothos (ID: 9)
    {
        id: 'r20',
        productId: '9',
        userName: 'Megan R.',
        rating: 5,
        date: '2023-10-22',
        comment: 'My first plant and I haven\'t killed it yet! The golden variegation is gorgeous. Already propagated several cuttings.',
        verifiedPurchase: true
    },
    {
        id: 'r21',
        productId: '9',
        userName: 'Alex T.',
        rating: 5,
        date: '2023-11-07',
        comment: 'Growing like crazy! Perfect for beginners. I have it trailing from a bookshelf and it looks amazing.',
        verifiedPurchase: true
    },
    {
        id: 'r22',
        productId: '9',
        userName: 'Olivia F.',
        rating: 4,
        date: '2023-10-03',
        comment: 'Very easy to care for. Would be 5 stars but the variegation isn\'t as golden as I expected, still beautiful though.',
        verifiedPurchase: false
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
