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
    name: 'Alex M. - New York, NY',
    rating: 5.0,
    date: '02/12/26',
    testimonial: 'Absolutely blown away by the quality of the Bamboo Collection. It lives up to the promise of being soft on skin and breathable. Nascar Prime is now my go-to for essentials!'
  },
  {
    id: '2',
    name: 'Jordan S. - Austin, TX',
    rating: 5.0,
    date: '01/28/26',
    testimonial: 'Quickest shipping I have experienced. The Polo Essentials Tee fits perfectly and the fabric feels premium. Total value for money.'
  },
  {
    id: '3',
    name: 'Emma R. - Chicago, IL',
    rating: 5.0,
    date: '12/15/25',
    testimonial: 'Bought a bundle offer and the savings were unbeatable. The quality is consistent across all items. Highly recommend for high-quality apparel essentials.'
  },
  {
    id: '4',
    name: 'Taylor B. - Seattle, WA',
    rating: 5.0,
    date: '11/10/25',
    testimonial: 'The returns process was so easy when I had a size issue. Customer support is very responsive. 100% genuine products.'
  }
];
