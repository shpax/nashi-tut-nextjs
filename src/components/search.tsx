import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export function Search() {
  return (
    <div className="z-10 w-full mt-6">
      <div
        className="bg-[#ffbd66] rounded-full shadow-lg overflow-hidden grow mt-12 mx-10 max-w-xl flex flex-row py-2 px-3 items-center 
      transition-all	 ease-out duration-300
      focus-within:bg-white focus-within:text-gray-400 focus-within:px-5 focus-within:mx-8"
      >
        <MagnifyingGlassIcon className="w-6 h-6 ml-2 " />

        <input
          type="search"
          placeholder="Пошук"
          className="w-full bg-[#ffbd66] px-4 py-2 text-lg text-white placeholder:text-gray-100 focus:placeholder:text-gray-400 focus:outline-none focus:bg-white transition ease-out duration-300 focus-within:text-gray-400"
        />
      </div>
    </div>
  );
}
