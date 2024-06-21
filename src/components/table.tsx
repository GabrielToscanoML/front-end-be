'use client'

import { Employee, getAllEmloyeesData } from "@/api/getEmployees";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Table() {
    const [employees, setEmployees] = useState<Employee[]>([]);

    async function requestEmployeesData() {
        const result = await getAllEmloyeesData();
        setEmployees(result);
    }

    useEffect(() => {
        requestEmployeesData();
    }, []) // Array vazio para executar apenas quando a página for atualizada

    return (
        <main className="w-[335px] lg:w-[1024px] lg:mx-auto px-8">
            <div className="rounded-lg overflow-hidden bg-white shadow">
                <table className="w-full">
                    <thead className="h-12 bg-gradient-to-b from-gradient-start to-gradient-end text-white drop-shadow-lg">
                        <tr>
                            <th className="font-medium text-base">FOTO</th>
                            <th className="font-medium text-base">NOME</th>
                            <th className="font-medium text-base">CARGO</th>
                            <th className="font-medium text-base">DATA DE ADMISSÃO</th>
                            <th className="font-medium text-base">TELEFONE</th>
                        </tr>
                    </thead>
                        <tbody>
                        {employees.length > 0 &&
                            employees.map((employee) => (
                                <tr key={employee.id} className="bg-white border-b-[1px] border-gray-10">
                                    <td className="flex justify-center p-2 rounded-full">
                                        <Image src={employee.image} className="rounded-full" alt="Imagem do funcionário" width={34} height={34} />
                                    </td>
                                    <td className="p-2 text-center align-center">{employee.name}</td>
                                    <td className="p-2 text-center align-center">{employee.job}</td>
                                    <td className="p-2 text-center align-center">{employee.admission_date}</td>
                                    <td className="p-2 text-center align-center">{employee.phone}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                </table>
            </div>
        </main>
    );
}
