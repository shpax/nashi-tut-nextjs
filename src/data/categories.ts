interface Category {
  id: number;
  name: string;
  icon: string;
  path: string;
  locations: number;
}

export const categories: Category[] = [
  {
    id: 2,
    name: 'Їсти і пити',
    icon: 'flaticon-iftar',
    path: '/locations/food',
    locations: 4,
  },
  {
    id: 7,
    name: 'Держава',
    icon: 'flaticon-government',
    path: '/locations/government',
    locations: 4,
  },
  {
    id: 1,
    name: 'Пошта',
    icon: 'flaticon-email',
    path: '/locations/mail',
    locations: 4,
  },
  {
    id: 11,
    name: 'Діти',
    icon: 'flaticon-boy',
    path: '/locations/kids',
    locations: 4,
  },
  {
    id: 12,
    name: 'Магазини',
    icon: 'flaticon-store',
    path: '/locations/stores',
    locations: 4,
  },
  {
    id: 8,
    name: 'Здоровʼя',
    icon: 'flaticon-lifeline-in-a-heart-outline',
    path: '/locations/health',
    locations: 4,
  },
  {
    id: 9,
    name: 'Краса',
    icon: 'flaticon-woman-hair',
    path: '/locations/beauty',
    locations: 0,
  },
  {
    id: 6,
    name: 'Сервіс',
    icon: 'flaticon-customer-service',
    path: '/locations/services',
    locations: 4,
  },
  {
    id: 10,
    name: 'Культура',
    icon: 'flaticon-theatre',
    path: '/locations/culture',
    locations: 4,
  },
  {
    id: 13,
    name: 'Інше',
    icon: 'flaticon-option',
    path: '/locations/other',
    locations: 4,
  },
];
