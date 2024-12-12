'use client';

import {
  HandThumbUpIcon,
  UserIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import svgLocation from './logo-04.svg';

export function BottomNav() {
  const pathname = usePathname();

  const navigationIcons = [
    ['/profile', UserIcon],
    [
      '/locator',
      ({ className }: { className: string }) => (
        <Image src={svgLocation} alt="logo" className={className} />
      ),
    ],
    ['/home', HomeIcon],
    ['/donate', HandThumbUpIcon],
    ['/faq', QuestionMarkCircleIcon],
  ].map(([path, Icon], index) => (
    <li
      className={`relative transition ease-in-out  ${
        pathname === path ? 'text-primary-600 scale-150' : ''
      }`}
      key={index}
    >
      <Link href={path as string} className="">
        <Icon className={'size-6'} />
      </Link>
    </li>
  ));

  return (
    <footer className="fixed bottom-0 w-full">
      <ul className="mx-auto max-w-2xl flex flex-row justify-evenly px-2 py-4 bg-white text-slate-400 rounded-xl shadow-lg">
        {navigationIcons}
      </ul>
    </footer>
  );
}
