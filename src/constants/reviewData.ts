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
    name: 'Kyle Busch',
    rating: 5.0,
    date: '03/15/26',
    testimonial: 'The quality of Nascar Prime gear is unmatched. It’s the only apparel I trust for my team off the track. The durability and fit are second to none.'
  },
  {
    id: '2',
    name: 'Chase Elliott',
    rating: 5.0,
    date: '02/20/26',
    testimonial: 'Unbeatable savings on genuine brands. Nascar Prime is changing the game for fans. The Polo Republica Essentials Tee is a staple in my luggage.'
  },
  {
    id: '3',
    name: 'Bubba Wallace',
    rating: 5.0,
    date: '01/10/26',
    testimonial: 'Breathability is key for high-performance apparel. The Bamboo Collection from Nascar Prime delivers exactly what I need on and off the course.'
  },
  {
    id: '4',
    name: 'Denny Hamlin',
    rating: 5.0,
    date: '11/05/25',
    testimonial: 'Big brands, small prices—it’s not just a tagline. I’ve seen the quality firsthand, and Nascar Prime is the real deal for genuine quality gear.'
  }
];
