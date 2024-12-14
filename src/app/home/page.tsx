'use client';
import { Background } from '@/components/background';
import Link from 'next/link';
import { Fragment } from 'react';
import logoSvg from './logo-08.svg';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useCategories } from '@/api/hooks';

export default function Page() {
  const { data } = useCategories();
  // const data = MOCKED_CATEGORIES;

  const categoriesComponents = data.map((category) => (
    <Link
      key={category.id}
      href={category.path}
      className={`block  relative ${
        category.locations > 0 ? 'bg-primary' : 'bg-gray-500'
      }  flex flex-row gap-2 items-center rounded-full w-40 h-12 shadow text-gray-100`}
    >
      <div
        className={`h-full aspect-square px-1 ${
          category.locations > 0 ? 'bg-primary-200' : 'bg-gray-400'
        } rounded-full flex justify-center items-center`}
      >
        <i className={`${category.icon} mt-1 text-2xl`} />
      </div>
      <div className="justify-self-end">
        <p>{category.name}</p>
      </div>
      <div className="absolute -top-2 -right-2 bg-white rounded-full size-6 p-1 align-bottom  shadow-md text-gray-500  text-center text-sm">
        {category.locations}
      </div>
    </Link>
  ));

  return (
    <Fragment>
      <Background />

      <div className="container mx-auto pb-40">
        <div className="size-56 mx-auto mt-12">
          <Image src={logoSvg} alt="logo" />
        </div>
        <div className="z-10 w-full mt-6">
          <div
            className="bg-primary rounded-full shadow-lg w-40 mx-auto max-w-xl flex flex-row py-1 px-3 items-center 
      transition-all ease-out duration-300
      focus-within:bg-white focus-within:text-gray-400 focus-within:w-80 "
          >
            <MagnifyingGlassIcon className="w-6 h-6 ml-2 " />

            <input
              type="search"
              placeholder="Пошук"
              className="w-full bg-inherit px-4 py-2  text-white placeholder:text-gray-100 
              
              focus:placeholder:text-gray-400 focus:outline-none focus-within:text-gray-400"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 justify-items-center mt-12 z-10 px-8">
          {categoriesComponents}
        </div>
      </div>
    </Fragment>
  );
}
