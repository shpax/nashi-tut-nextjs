interface Category {
  id: number;
  name: string;
  icon: string;
  path: string;
  color: string;
  locations: number;
}

export enum Color {
  Green = 'bg-[#7dfad2]',
  Blue = 'bg-[#5b78e6]',
  Yellow = 'bg-[#ffec99]',
  Brown = 'bg-[#d9a880]',
  LogoBlue = 'bg-[#0fa5fd]',
  LogoYellow = 'bg-[#fde009]',
}

export const categories: Category[] = [
  {
    id: 2,
    name: "Кав'ярні",
    icon: 'flaticon-coffee-cup',
    path: '/cafe',
    color: Color.Brown,
    locations: 4,
  },
  {
    id: 8,
    name: 'Паби',
    icon: 'flaticon-beer',
    path: '/pubs',
    color: Color.Brown,
    locations: 4,
  },
  {
    id: 1,
    name: 'Пошта',
    icon: 'flaticon-logistics',
    path: '/mail',
    color: Color.Blue,
    locations: 4,
  },
  {
    id: 9,
    name: 'Робота',
    icon: 'flaticon-job-seeker',
    path: '/job',
    color: Color.Blue,
    locations: 4,
  },
  {
    id: 6,
    name: 'Медицина',
    icon: 'flaticon-stethoscope',
    path: '/hospitals',
    color: Color.Green,
    locations: 4,
  },
  {
    id: 11,
    name: 'Діти',
    icon: 'flaticon-today',
    path: '/kids',
    color: Color.Green,
    locations: 4,
  },
  {
    id: 7,
    name: 'Держава',
    icon: 'flaticon-government',
    path: '/government',
    color: Color.Yellow,
    locations: 4,
  },
  {
    id: 10,
    name: 'Послуги',
    icon: 'flaticon-paper',
    path: '/services',
    color: Color.Yellow,
    locations: 4,
  },
];
