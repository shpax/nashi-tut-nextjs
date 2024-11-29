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
    path: '/food',
    locations: 4,
  },
  {
    id: 7,
    name: 'Держава',
    icon: 'flaticon-government',
    path: '/government',
    locations: 4,
  },
  {
    id: 1,
    name: 'Пошта',
    icon: 'flaticon-email',
    path: '/mail',
    locations: 4,
  },
  {
    id: 11,
    name: 'Діти',
    icon: 'flaticon-boy',
    path: '/kids',
    locations: 4,
  },
  {
    id: 12,
    name: 'Магазини',
    icon: 'flaticon-store',
    path: '/stores',
    locations: 4,
  },
  {
    id: 8,
    name: 'Здоровʼя',
    icon: 'flaticon-lifeline-in-a-heart-outline',
    path: '/health',
    locations: 4,
  },
  {
    id: 9,
    name: 'Краса',
    icon: 'flaticon-woman-hair',
    path: '/beauty',
    locations: 0,
  },
  {
    id: 6,
    name: 'Сервіс',
    icon: 'flaticon-customer-service',
    path: '/services',
    locations: 4,
  },
  {
    id: 10,
    name: 'Культура',
    icon: 'flaticon-theatre',
    path: '/culture',
    locations: 4,
  },
  {
    id: 13,
    name: 'Інше',
    icon: 'flaticon-option',
    path: '/other',
    locations: 4,
  },
];
