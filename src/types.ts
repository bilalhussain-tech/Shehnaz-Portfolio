export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'Skincare' | 'Makeup' | 'Haircare' | 'Fragrance';
  price: number;
  image: string;
  description: string;
  rating: number;
  reviewsCount: number;
  concern: string[];
  skinType?: string[];
  ingredients: string[];
  isBestseller?: boolean;
  isNewArrival?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
}
