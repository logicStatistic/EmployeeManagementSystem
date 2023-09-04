import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Employeeservice from './service/Employeeservice';

const Employeelist = () => {
const navigator = useNavigate();

const [loading, setLoading] = useState(true);
const [employee, setEmployee] = useState(null);

useEffect(() => {
    const fetchData = async () =>{
        setLoading(true);
        try{
            const response = await Employeeservice.getEmployee();
                setEmployee(response.data);
            }catch(error){
            console.log(error);
        }
        setLoading(false);
    };
    fetchData();
}, []);
return (
    <div className="container mx-auto my-8">
        <div className="h-12">
            <button
            onClick = {()=> navigator("/add-employee")}
            className="bg-gray-600 hover:bg-gray-700  shadow-sm text-white  rounded py-2 px-6">
                Add Employee
            </button>
        </div>
        <div className="flex shadow border-b">
        <table className="min-w-full ">
            <thead className="bg-white">
                <tr>
                    <th className="uppercase text-left tracking-wider text-gray-600 font-medium py-3 px-6">
                        First Name
                        </th>
                    <th className="uppercase text-left tracking-wider text-gray-600 font-medium py-3 px-6">
                        Last Name
                        </th>
                    <th className="uppercase text-left tracking-wider text-gray-600 font-medium py-3 px-6">
                        Email
                        </th>
                    <th className="uppercase text-right tracking-wider text-gray-600 font-medium py-3 px-6">
                        Action
                        </th>
                </tr>
            </thead>
            {!loading && (
            <tbody className="bg-white">
                {employee.map((employee) =>(
                <tr key = {employee.id}>
                <td className="text-left py-4 px-6 whitespace-nowrap">
                    <div className=" text-sm text-gray-600">
                        {employee.firstName}
                    </div>
                </td>
                <td className="text-left py-4 px-6 whitespace-nowrap">
                    <div className=" text-sm text-gray-600">
                        {employee.lastName}
                    </div>
                </td>
                <td className="text-left py-4 px-6 whitespace-nowrap">
                    <div className=" text-sm text-gray-600">
                    {employee.email}
                    </div>
                </td>
                <td className="text-right py-4 px-6 whitespace-nowrap text-sm font-medium">
                <a href="#" className = "text-blue-500 hover:text-blue-700 px-4">Edit</a>
                <a href="#" className="text-red-500 hover:text-red-700">Delete</a>
                </td>
                </tr>
            ))}
            </tbody>
            )}
        </table>
        </div>
    </div>
)
}

export default Employeelist
