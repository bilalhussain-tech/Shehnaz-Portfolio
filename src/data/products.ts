import { Product, BlogPost } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Midnight Recovery Concentrate',
    brand: 'Lumière d\'Or',
    category: 'Skincare',
    price: 85,
    image: 'https://images.unsplash.com/photo-1594439167832-72013829f0f9?q=80&w=600&auto=format&fit=crop',
    description: 'An overnight elixir that restores skin\'s radiance while you sleep.',
    rating: 4.8,
    reviewsCount: 1240,
    concern: ['Aging', 'Dullness'],
    skinType: ['Normal', 'Dry', 'Combination'],
    ingredients: ['Squalane', 'Evening Primrose Oil', 'Lavender Essential Oil'],
    isBestseller: true
  },
  {
    id: '2',
    name: 'Velvet Matte Lipstick - Crimson Rose',
    brand: 'Éclat Beauté',
    category: 'Makeup',
    price: 32,
    image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=600&auto=format&fit=crop',
    description: 'A deeply pigmented matte lipstick with a weightless, petal-soft finish.',
    rating: 4.9,
    reviewsCount: 850,
    concern: ['Long-lasting', 'Hydration'],
    ingredients: ['Vitamin E', 'Seed Oil', 'Hyaluronic Acid'],
    isBestseller: true
  },
  {
    id: '3',
    name: 'Silk Infusion Hair Mask',
    brand: 'Tresse Paris',
    category: 'Haircare',
    price: 45,
    image: 'https://images.unsplash.com/photo-1527799822367-a2886701f662?q=80&w=600&auto=format&fit=crop',
    description: 'A transformative treatment that repairs damage and adds blinding shine.',
    rating: 4.7,
    reviewsCount: 620,
    concern: ['Damage Repair', 'Dryness'],
    ingredients: ['Keratin', 'Argan Oil', 'Biotin'],
    isNewArrival: true
  },
  {
    id: '4',
    name: 'L’Aube Eternal Parfum',
    brand: 'Shehnaz Signature',
    category: 'Fragrance',
    price: 120,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop',
    description: 'Notes of Jasmine, Sandalwood, and Bergamot create a timeless, ethereal scent.',
    rating: 5.0,
    reviewsCount: 310,
    concern: ['Long-lasting'],
    ingredients: ['Natural Essences', 'Organic Alcohol'],
    isBestseller: true
  },
  {
    id: '5',
    name: 'Hyaluronic Hydra-Filler',
    brand: 'Clinique Luxe',
    category: 'Skincare',
    price: 65,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop',
    description: 'Intense hydration for a plump, youthful complexion.',
    rating: 4.6,
    reviewsCount: 980,
    concern: ['Dryness', 'Fine Lines'],
    skinType: ['All Skin Types'],
    ingredients: ['Multi-weight Hyaluronic Acid', 'Vitamin B5'],
    isNewArrival: true
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
