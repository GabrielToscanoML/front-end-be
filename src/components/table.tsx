'use client'

import { Employee, getAllEmloyeesData } from "@/api/getEmployees";
import Image from "next/image";
import { useEffect, useState } from "react";
import downIcon from "../../public/down-icon.svg";
import upIcon from "../../public/up-icon.svg";
import React from "react";

export default function Table() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [expandedRows, setExpandedRows] = useState<number[]>([]);

    async function requestEmployeesData() {
        const result = await getAllEmloyeesData();
        setEmployees(result);
    }

    useEffect(() => {
        requestEmployeesData();
    }, []); // Array vazio para executar apenas quando a página for atualizada

    const toggleRow = (id: number) => {
        setExpandedRows(prevExpandedRows =>
            prevExpandedRows.includes(id)
                ? prevExpandedRows.filter(rowId => rowId !== id)
                : [...prevExpandedRows, id]
        );
    };

    return (
        <main className="w-full md:w-[768px] lg:w-[1024px] lg:mx-auto px-4 mx-auto">
            <div className="rounded-lg overflow-hidden bg-white shadow mx-4">
                <table className="w-full">
                    <thead className="h-12 bg-gradient-to-b from-gradient-start to-gradient-end text-white drop-shadow-lg">
                        <tr>
                            <th className="font-medium text-base">FOTO</th>
                            <th className="font-medium text-base">NOME</th>
                            <th className="font-medium text-base hidden sm:table-cell">CARGO</th>
                            <th className="font-medium text-base hidden md:table-cell">DATA DE ADMISSÃO</th>
                            <th className="font-medium text-base hidden lg:table-cell">TELEFONE</th>
                            <th className="font-medium text-base lg:hidden">
                                <div className="w-2 h-2 mx-auto bg-white rounded-full"></div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.length > 0 &&
                            employees.map((employee) => (
                                <React.Fragment key={employee.id}>
                                    <tr key={employee.id} className="bg-white border-t-[1px] border-gray-10">
                                        <td className="flex justify-center p-2 rounded-full">
                                            <Image src={employee.image} className="rounded-full w-auto h-auto" alt="Imagem do funcionário" width={34} height={34} />
                                        </td>
                                        <td className="p-2 text-center align-center">{employee.name}</td>
                                        <td className="p-2 text-center align-center hidden sm:table-cell">{employee.job}</td>
                                        <td className="p-2 text-center align-center hidden md:table-cell">{employee.admission_date}</td>
                                        <td className="p-2 text-center align-center hidden lg:table-cell">{employee.phone}</td>
                                        <td className="p-2 text-center align-center lg:hidden">
                                            <button onClick={() => toggleRow(employee.id)}>
                                                <Image src={expandedRows.includes(employee.id) ? upIcon : downIcon} alt="Botão de expandir e encolher" width={24} height={24} />
                                            </button>
                                        </td>
                                    </tr>
                                    {expandedRows.includes(employee.id) && (
                                        <tr key={`${employee.id}-expanded`} className="lg:hidden">
                                            <td colSpan={6} className="py-2 px-4 text-center align-center w-full">
                                                <div className="flex flex-col items-start">
                                                    <div className="sm:hidden w-full flex justify-between font-medium">Cargo <p className="font-normal">{employee.job}</p></div>
                                                    <div className="md:hidden w-full flex justify-between font-medium">Data de Admissão <p className="font-normal">{employee.admission_date}</p></div>
                                                    <div className="lg:hidden w-full flex justify-between font-medium">Telefone <p className="font-normal">{employee.phone}</p></div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))  
                        }
                    </tbody>
                </table>
            </div>
        </main>
    );
}
