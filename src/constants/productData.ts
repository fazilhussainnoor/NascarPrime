import poloImg from '../assets/polo-tee.png';
import hoodieImg from '../assets/product-hoodie.png';

export interface Product {
  id: string;
  title: string;
  price: string;
  rating: number;
  reviewCount: string;
  image: string;
  badge?: string;
  isBundle?: boolean;
}

export const productData: Product[] = [
  {
    id: '1',
    title: "Polo Republica Men's Essentials Tee",
    price: "$9.99",
    rating: 4.8,
    reviewCount: "2.5K",
    image: poloImg,
    badge: "Bundle Offer",
    isBundle: true
  },
  {
    id: '2',
    title: "Premium Essentials Hoodie",
    price: "$24.99",
    rating: 4.7,
    reviewCount: "1.8K",
    image: hoodieImg
  },
  {
    id: '3',
    title: "Classic Denim Utility Jacket",
    price: "$39.99",
    rating: 4.9,
    reviewCount: "0.5K",
    image: "https://picsum.photos/seed/denim/800/1000"
  },
  {
    id: '4',
    title: "Executive Chino Trousers",
    price: "$18.99",
    rating: 4.6,
    reviewCount: "1.2K",
    image: "https://picsum.photos/seed/chinos/800/1000"
  },
  {
    id: '5',
    title: "Urban Street Cargo Pants",
    price: "$21.99",
    rating: 4.5,
    reviewCount: "0.9K",
    image: "https://picsum.photos/seed/cargo/800/1000"
  },
  {
    id: '6',
    title: "Minimalist Linen Shirt",
    price: "$17.99",
    rating: 4.8,
    reviewCount: "0.6K",
    image: "https://picsum.photos/seed/linen/800/1000"
  },
  {
    id: '7',
    title: "Performance Active Shorts",
    price: "$12.99",
    rating: 4.7,
    reviewCount: "1.1K",
    image: "https://picsum.photos/seed/shorts/800/1000"
  },
  {
    id: '8',
    title: "Graphic Heritage Tee",
    price: "$8.99",
    rating: 4.9,
    reviewCount: "3.1K",
    image: "https://picsum.photos/seed/tee2/800/1000"
  }
];
