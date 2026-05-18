import { Product, BlogPost } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Midnight Recovery Oil',
    brand: 'Shehnaz Luxe',
    category: 'Skincare',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
    description: 'An overnight elixir that restores skin\'s radiance while you sleep.',
    rating: 4.8,
    reviewsCount: 1240,
    concern: ['Aging', 'Dullness'],
    skinType: ['Normal', 'Dry', 'Combination'],
    ingredients: ['Squalane', 'Evening Primrose Oil', 'Lavender Essential Oil'],
    isBestseller: true
  },
  {
    id: 'loreal-skin-1',
    name: 'Revitalift Hyaluronic Acid Serum',
    brand: 'L\'Oréal Paris',
    category: 'Skincare',
    price: 3850,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop',
    description: 'Deeply hydrates and replumps skin for a youthful glow.',
    rating: 4.7,
    reviewsCount: 5200,
    concern: ['Hydration', 'Plumping'],
    skinType: ['All Skin Types'],
    ingredients: ['1.5% Hyaluronic Acid', 'Vitamin B5', 'Glycerin'],
    isBestseller: true
  },
  {
    id: 'loreal-makeup-1',
    name: 'Infallible 24H Fresh Wear Foundation',
    brand: 'L\'Oréal Paris',
    category: 'Makeup',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1599733594230-6b823276abcc?q=80&w=800&auto=format&fit=crop',
    description: 'Long-wear foundation with weightless feel and natural finish.',
    rating: 4.6,
    reviewsCount: 8900,
    concern: ['Full Coverage', 'Long-wear'],
    ingredients: ['Oxygen Technology', 'Vitamin E'],
    isBestseller: true
  },
  {
    id: 'loreal-frag-1',
    name: 'Paradise Enchanted Fragrance',
    brand: 'L\'Oréal Paris',
    category: 'Fragrance',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop',
    description: 'A light, tropical scent with notes of coconut and jasmine.',
    rating: 4.5,
    reviewsCount: 1200,
    concern: ['Casual Wear'],
    ingredients: ['Floral Essences', 'Citrus Notes'],
    isNewArrival: true
  },
  {
    id: '2',
    name: 'Velvet Matte Lipstick',
    brand: 'Shehnaz Makeup',
    category: 'Makeup',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=800&auto=format&fit=crop',
    description: 'A deeply pigmented matte lipstick with a weightless finish.',
    rating: 4.9,
    reviewsCount: 850,
    concern: ['Long-lasting'],
    ingredients: ['Vitamin E', 'Seed Oil'],
    isBestseller: true
  },
  {
    id: '3',
    name: 'Silk Infusion Mask',
    brand: 'Shehnaz Haircare',
    category: 'Haircare',
    price: 6800,
    image: 'https://images.unsplash.com/photo-1527799822367-a2886701f662?q=80&w=800&auto=format&fit=crop',
    description: 'A transformative treatment that repairs damage.',
    rating: 4.7,
    reviewsCount: 620,
    concern: ['Damage Repair'],
    ingredients: ['Keratin', 'Argan Oil'],
    isNewArrival: true
  },
  {
    id: '4',
    name: 'L’Aube Eternal Parfum',
    brand: 'Shehnaz Signature',
    category: 'Fragrance',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop',
    description: 'Notes of Jasmine and Sandalwood create a timeless scent.',
    rating: 5.0,
    reviewsCount: 310,
    concern: ['Luxury'],
    ingredients: ['Natural Essences'],
    isBestseller: true
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Platinum Night Routine',
    excerpt: 'Discover how to layering active ingredients for maximum overnight rejuvenation.',
    author: 'Elena Shehnaz',
    date: 'May 12, 2024',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop',
    category: 'Routines'
  },
  {
    id: '2',
    title: 'Mastering the Glow',
    excerpt: 'A guide to achieving the perfect dewy finish without the shine.',
    author: 'Marcus V.',
    date: 'May 08, 2024',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop',
    category: 'Makeup Tips'
  }
];
