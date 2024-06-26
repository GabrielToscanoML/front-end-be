export type Employee = {
    id: number,
    name: string,
    job: string,
    admission_date: string,
    phone: string,
    image: string,
}

const URL = 'http://localhost:3000' || 'http://localhost:3001'; // Ambiente de desenvolvimento

function formatPhone(phone: string): string {
    const country = phone.slice(0, 2); // Pega os dois primeiros digitos
    const area = phone.slice(2, 4); // Pega o terceiro e quarto digito
    const number = phone.slice(4); // Pega o resto dos digitos, ou seja, a partir do quarto digito
    return `+${country} (${area}) ${number.slice(0, 5)}-${number.slice(5)}`;
}

function formatEmployeeData(data: any[]): Employee[] {
    return data.map(item => ({
        id: item.id,
        name: item.name,
        job: item.job,
        admission_date: new Date(item.admission_date).toLocaleDateString(), // Formata a data para o formato dd-mm-yyyy
        phone: formatPhone(item.phone),
        image: item.image || "/user-default-icon.png" // Adiciona uma imagem padrão se não houver imagem
    }));
}

export async function getAllEmloyeesData(): Promise<Employee[]> {
    try {
        const response = await fetch(`${URL}/employees`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data: Employee[] = await response.json();
        return formatEmployeeData(data); // enviando os dados já formatados
    } catch (error) {
        console.error('Failed to fetch employees: ', error);
        return [];
    }
}

export async function getFilteredEmployeesData(filter: string): Promise<Employee[]> {
    const AllDataFormated = await getAllEmloyeesData(); // Pegando todos os dados já formatados usando a função acima
    const result = AllDataFormated.filter(employee => {
        return (
            employee.name.toLowerCase().includes(filter.toLowerCase()) // filtro por nome
            || employee.job.toLowerCase().includes(filter.toLowerCase()) // filtro por cargo
            || employee.phone.toLowerCase().includes(filter.toLowerCase()) // filtro por telefone
        );
   });
   return result;
}
