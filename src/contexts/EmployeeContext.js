import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext()

const EmployeeContextProvider = (props) => {

    const [employees, setemployees] = useState([
        { id: uuidv4(), name: 'Tushar Khunt', email: 'tusharkhunt@gmail.com', address: 'Malay Infotech', phone: '1234567890' },
        { id: uuidv4(), name: 'Dhavan Chaudhary', email: 'dhavanchaudhary@gmail.com', address: 'Malay Infotech', phone: '2345678901' },
        { id: uuidv4(), name: 'Chintan Patel', email: 'chintanpatel@gmail.com', address: 'Malay Infotech', phone: '3456789012' },
        { id: uuidv4(), name: 'Rajan Shah', email: 'rajanshah@gmail.com', address: 'Malay Infotech', phone: '4567890123' },
        { id: uuidv4(), name: 'Karan Prajapati', email: 'karanprajapati@gmail.com', address: 'Malay Infotech', phone: '5678901234' },
        { id: uuidv4(), name: 'Priyesh Modha', email: 'priyeshmodha@gmail.com', address: 'Malay Infotech', phone: '6789012345' },
        { id: uuidv4(), name: 'MunjalSir Pandya', email: 'munjalsirpandya@gmail.com', address: 'Malay Infotech', phone: '7890123456' },
    ])

    useEffect(() => {
        setemployees(JSON.parse(localStorage.getItem('employees')))
    }, [])

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    })


    const addEmployee = (name, email, address, phone) => {
        setemployees([...employees, { id: uuidv4(), name, email, address, phone }])
    }

    const deleteEmployee = (id) => {
        setemployees(employees.filter(Employee => Employee.id !== id))
    }

    const updateEmployee = (id, updatedEmployee) => {
        setemployees(employees.map((Employee) => Employee.id === id ? updatedEmployee : Employee))
    }

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, deleteEmployee, updateEmployee }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;