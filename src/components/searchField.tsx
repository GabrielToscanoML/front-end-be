'use client'

import Image from "next/image";
import SearchIcon from "../../public/search-icon.svg";

export default function SearchField() {
  return (
      <div className="flex flex-col gap-7 lg:flex-row lg:justify-between lg:items-center lg:w-[1024px] lg:mx-auto my-8 px-8">
        <h1 className="black font-medium text-2xl">Funcionários</h1>
        <div className="flex justify-between items-center w-[290px] h-12 rounded-lg bg-white border">
          <input
            type="search"
            className="h-8 outline-none px-4 py-3 w-48 placeholder-gray-20"
            placeholder="Pesquisar"
          />
          <button
            type="button"
            onClick={() => console.log("Pesquisou")}
            className="w-12 items-center flex justify-center  h-12 text-lg rounded-xl">
            <Image
              src={SearchIcon}
              alt="Search Icon"
            />
          </button>
        </div>
      </div>
  );
}