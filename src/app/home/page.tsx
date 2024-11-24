import { Background } from '@/components/background';
import { Search } from '@/components/search';
import { categories } from '@/data/categories';
import Link from 'next/link';
import { Fragment } from 'react';

export default async function Page() {
  const categoriesComponents = categories.map((category) => (
    <Link
      key={category.id}
      href={category.path}
      className={`block ${category.color} brightness-100  content-center text-center rounded-3xl size-32 px-4 shadow`}
    >
      <i className={category.icon + ' items-center text-6xl block '} />
      {/* <p className="text-zinc-100">{category.name}</p> */}
    </Link>
  ));

  return (
    <Fragment>
      <Search />

      <Background />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-12 justify-items-center mt-12 z-10 px-8">
          {categoriesComponents}
        </div>
      </div>
    </Fragment>
  );
}
