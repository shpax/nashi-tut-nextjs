import { Background } from '@/components/background';
import { categories } from '@/data/categories';
import Link from 'next/link';
import { Fragment } from 'react';
import logoSvg from './logo-08.svg';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default async function Page() {
  const categoriesComponents = categories.map((category) => (
    <Link
      key={category.id}
      href={category.path}
      className={`block  ${category.color} brightness-100  content-center text-center rounded-3xl size-32 px-4 shadow text-gray-100`}
    >
      <i className={category.icon + ' items-center text-6xl block mt-3'} />
      <p>{category.name}</p>
    </Link>
  ));

  return (
    <Fragment>
      <Background />

      <div className="container mx-auto">
        <div className="size-52 mx-auto mt-12">
          <Image src={logoSvg} alt="logo" />
        </div>
        <div className="z-10 w-full mt-6">
          <div
            className="bg-secondary rounded-full shadow-lg overflow-hidden grow mx-10 max-w-xl flex flex-row py-2 px-3 items-center 
      transition-all	 ease-out duration-300
      focus-within:bg-white focus-within:text-gray-400 focus-within:px-5 focus-within:mx-8"
          >
            <MagnifyingGlassIcon className="w-6 h-6 ml-2 " />

            <input
              type="search"
              placeholder="Пошук"
              className="w-full bg-secondary px-4 py-2 text-lg text-white placeholder:text-gray-100 focus:placeholder:text-gray-400 focus:outline-none focus:bg-white transition ease-out duration-300 focus-within:text-gray-400"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-12 justify-items-center mt-12 z-10 px-8">
          {categoriesComponents}
        </div>
      </div>
    </Fragment>
  );
}
