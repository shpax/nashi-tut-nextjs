import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export function Search() {
  return (
    <div className="z-10 w-full mt-20 flex flex-row justify-center">
      <div className="bg-white rounded-full shadow-lg overflow-hidden grow mx-10 max-w-xl flex flex-row py-2 px-3 items-center">
        <MagnifyingGlassIcon className="w-6 h-6 text-gray-300 ml-2 " />

        <input
          type="search"
          placeholder="Пошук"
          className="w-full px-4 py-2 text-lg text-gray-400 focus:outline-none"
        />
      </div>
    </div>
  );
}
