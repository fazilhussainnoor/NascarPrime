import poloImg from '../assets/polo-tee.png';
import hoodieImg from '../assets/product-hoodie.png';

export interface Product {
  id: string;
  title: string;
  price: string;
  rating: number;
  reviewCount: number;
  totalPossibleReviews: number;
  image: string;
  badge?: string;
  isBundle?: boolean;
}

export const productData: Product[] = [
  {
    id: '1',
    title: "Polo Republica Men's Essentials Tee",
    price: "Rs. 999.00",
    rating: 4.8,
    reviewCount: 2500,
    totalPossibleReviews: 3000,
    image: poloImg,
    badge: "Bundle Offer",
    isBundle: true
  },
  {
    id: '2',
    title: "Premium Essentials Hoodie",
    price: "Rs. 2,499.00",
    rating: 4.7,
    reviewCount: 1800,
    totalPossibleReviews: 2000,
    image: hoodieImg
  },
  {
    id: '3',
    title: "Classic Denim Utility Jacket",
    price: "Rs. 3,999.00",
    rating: 4.9,
    reviewCount: 450,
    totalPossibleReviews: 500,
    image: "https://picsum.photos/seed/denim/800/1000"
  },
  {
    id: '4',
    title: "Executive Chino Trousers",
    price: "Rs. 1,899.00",
    rating: 4.6,
    reviewCount: 1200,
    totalPossibleReviews: 1500,
    image: "https://picsum.photos/seed/chinos/800/1000"
  },
  {
    id: '5',
    title: "Urban Street Cargo Pants",
    price: "Rs. 2,199.00",
    rating: 4.5,
    reviewCount: 890,
    totalPossibleReviews: 1000,
    image: "https://picsum.photos/seed/cargo/800/1000"
  },
  {
    id: '6',
    title: "Minimalist Linen Shirt",
    price: "Rs. 1,799.00",
    rating: 4.8,
    reviewCount: 620,
    totalPossibleReviews: 700,
    image: "https://picsum.photos/seed/linen/800/1000"
  },
  {
    id: '7',
    title: "Performance Active Shorts",
    price: "Rs. 1,299.00",
    rating: 4.7,
    reviewCount: 1100,
    totalPossibleReviews: 1200,
    image: "https://picsum.photos/seed/shorts/800/1000"
  },
  {
    id: '8',
    title: "Graphic Heritage Tee",
    price: "Rs. 899.00",
    rating: 4.9,
    reviewCount: 3100,
    totalPossibleReviews: 3500,
    image: "https://picsum.photos/seed/tee2/800/1000"
  }
];
