'use client';

import {
  MapPinIcon,
  HandThumbUpIcon,
  UserIcon,
  Cog6ToothIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomNav() {
  const pathname = usePathname();

  const navigationIcons = [
    ['/profile', UserIcon],
    ['/locator', MapPinIcon],
    ['/home', HomeIcon],
    ['/donate', HandThumbUpIcon],
    ['/settings', Cog6ToothIcon],
  ].map(([path, Icon], index) => (
    <li
      className={`relative transition ease-in-out hover:scale-125 ${
        pathname === path ? 'text-secondary scale-125' : ''
      }`}
      key={index}
    >
      <Link href={path as string} className="">
        <Icon className="size-6" />
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
