'use client'
import { Employee, getAllEmloyeesData } from "@/api/getEmployees";
import Header from "@/components/header";
import SearchField from "@/components/searchField";
import Table from "@/components/table";
import { useEffect, useState } from "react";

export default function Home() {

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  
  async function requestEmployeesData() {
      const result = await getAllEmloyeesData();
      setEmployees(result);
  }

  useEffect(() => {
      requestEmployeesData();
  }, []); // Array vazio para executar apenas quando a página for atualizada

  return (
    <div className="flex flex-col bg-gray-100 h-screen">
      <Header />
      <main className="lg:w-[1024px] lg:mx-auto pb-16">
        <SearchField setEmployees={setEmployees} setLoading={setLoading} />
        <Table employees={employees} isLoading={isLoading} />
      </main>
    </div>
  );
}