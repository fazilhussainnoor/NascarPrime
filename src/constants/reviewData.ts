export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  testimonial: string;
}

export const reviewData: Review[] = [
  {
    id: '1',
    name: 'awab a.',
    rating: 5.0,
    date: 'February 12, 2026',
    testimonial: 'Absolutely blown away by the quality of the Bamboo Collection. It lives up to the promise of being soft on skin and breathable. Nascar Prime is now my go-to for essentials!'
  },
  {
    id: '2',
    name: 'Malik A.',
    rating: 5.0,
    date: 'January 28, 2026',
    testimonial: 'Quickest shipping I have experienced in Pakistan. The Polo Essentials Tee fits perfectly and the fabric feels premium. Total value for money.'
  },
  {
    id: '3',
    name: 'Zahra K.',
    rating: 5.0,
    date: 'December 15, 2025',
    testimonial: 'Bought a bundle offer and the savings were unbeatable. The quality is consistent across all items. Highly recommend for high-quality export surplus.'
  },
  {
    id: '4',
    name: 'Sardar U.',
    rating: 5.0,
    date: 'November 10, 2025',
    testimonial: 'The returns process was so easy when I had a size issue. Customer support is very responsive. 100% genuine products.'
  }
];
