import {
  FilmIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';

interface Category {
  id: number;
  name: string;
  icon: string;
  path: string;
  color: string;
}

// .flaticon-church
// Author: #author-link-flaticon-church#

// .flaticon-logistics
// Author: #author-link-flaticon-logistics#

// .flaticon-passport
// Author: #author-link-flaticon-passport#

// .flaticon-government
// Author: #author-link-flaticon-government#

// .flaticon-coffee-cup
// Author: #author-link-flaticon-coffee-cup#

// .flaticon-beer
// Author: #author-link-flaticon-beer#

// .flaticon-paper
// Author: #author-link-flaticon-paper#

// .flaticon-today
// Author: #author-link-flaticon-today#

// .flaticon-job-seeker
// Author: #author-link-flaticon-job-seeker#

// .flaticon-stethoscope
// Author: #author-link-flaticon-stethoscope#

export const categories: Category[] = [
  {
    id: 1,
    name: 'Пошта',
    icon: 'flaticon-logistics',
    path: '/mail',
    color: 'bg-[#fc7bd5]',
  },
  {
    id: 2,
    name: "Кав'ярні",
    icon: 'flaticon-coffee-cup',
    path: '/cafe',
    color: 'bg-[#ae7dfa]',
  },
  {
    id: 8,
    name: 'Паби',
    icon: 'flaticon-beer',
    path: '/pubs',
    color: 'bg-[#7fc6fa]',
  },
  // { id: 3, name: 'Церкви', icon: 'flaticon-church', path: '/churches' },
  // { id: 4, name: 'Магазини', icon: 'flaticon-shopping-bag', path: '/shops' },
  // {
  //   id: 5,
  //   name: 'Паспортний стіл',
  //   icon: 'flaticon-passport',
  //   path: '/passport',
  // },
  {
    id: 6,
    name: 'Медицина',
    icon: 'flaticon-stethoscope',
    path: '/hospitals',
    color: 'bg-[#ffbd66]',
  },
  {
    id: 7,
    name: 'Держава',
    icon: 'flaticon-government',
    path: '/government',
    color: 'bg-[#fc7bd5]',
  },
  {
    id: 9,
    name: 'Робота',
    icon: 'flaticon-job-seeker',
    path: '/job',
    color: 'bg-[#ae7dfa]',
  },
  {
    id: 10,
    name: 'Послуги',
    icon: 'flaticon-paper',
    path: '/services',
    color: 'bg-[#7fc6fa]',
  },
  {
    id: 11,
    name: 'Діти',
    icon: 'flaticon-today',
    path: '/kids',
    color: 'bg-[#ffbd66]',
  },
];
