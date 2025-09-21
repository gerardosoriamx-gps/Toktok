export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  whatsapp: string;
}

export const dummyProducts: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    description: 'A very good laptop for programming.',
    price: 1200,
    whatsapp: '1122334455',
  },
  {
    id: 2,
    name: 'Keyboard',
    description: 'A mechanical keyboard with RGB lights.',
    price: 150,
    whatsapp: '1122334455',
  },
  {
    id: 3,
    name: 'Mouse',
    description: 'An ergonomic mouse for long working hours.',
    price: 80,
    whatsapp: '5566778899',
  },
  {
    id: 4,
    name: 'Monitor',
    description: 'A 27-inch 4K monitor with high refresh rate.',
    price: 400,
    whatsapp: '5566778899',
  },
  {
    id: 5,
    name: 'Webcam',
    description: 'A 1080p webcam for video conferencing.',
    price: 90,
    whatsapp: '1234567890',
  },
];
