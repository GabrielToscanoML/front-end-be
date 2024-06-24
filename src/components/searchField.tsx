'use client'

import Image from "next/image";
import SearchIcon from "../../public/search-icon.svg";
import { useEffect, useState } from "react";
import { Employee, getFilteredEmployeesData } from "@/api/getEmployees";

interface SearchFieldProps {
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchField({ setEmployees, setLoading }: SearchFieldProps) {

  const [filter, setFilter] = useState('');
  const [debouncedFilter, setDebouncedFilter] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  }

  const getEmployeesFiltered = async () => {
      const filteredEmployees = await getFilteredEmployeesData(filter)
      filteredEmployees?.length === 0 ? setEmployees([]) : setEmployees(filteredEmployees)
  }


  // Adicionando debounce para diminuir a quantidade de requisições feitas e deixando mais eficiente
  useEffect(() => {
    setLoading(true)
    const handler = setTimeout(() => {
      setDebouncedFilter(filter);
      setLoading(false)
    }, 500); // Tempo de espera antes de aplicar o debounce
    return () => {
      clearTimeout(handler);
    };
  }, [filter]);

  useEffect(() => {
    if (filter == '' || debouncedFilter !== '') { // Importante para fazer uma requisição quando o input estiver limpo
      getEmployeesFiltered();
    }
  }, [debouncedFilter]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        getEmployeesFiltered()
      }
  };

  return (
      <div className="flex flex-col gap-7 sm:flex-row sm:justify-between sm:items-center sm:w-full lg:mx-auto my-8 px-8">
        <h1 className="black font-medium text-2xl">Funcionários</h1>
        <div className="flex justify-between items-center w-[290px] h-12 rounded-lg bg-white border">
          <input
            type="search"
            className="h-8 outline-none px-4 py-3 w-48 placeholder-gray-20"
            placeholder="Pesquisar"
            value={filter}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyPress(e)}
          />
          <button
            type="button"
            onClick={() => getEmployeesFiltered()}
            className="w-12 items-center flex justify-center h-12 text-lg rounded-xl">
            <Image
              src={SearchIcon}
              alt="Search Icon"
            />
          </button>
        </div>
      </div>
  );
}