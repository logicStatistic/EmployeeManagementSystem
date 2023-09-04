import React, { useState } from 'react';
import Employeeservice from './service/Employeeservice';

const Registeremployee = () => {
    const [employee, setEmployee] = useState({
        id: "",
        firstName:"",
        lastName: "",
        email:"",
    });
        const handleChange = (e) =>{
            const value = e.target.value;
            setEmployee({ ...employee, [e.target.name]: value});
        };
        const saveEmployee =(e)=>{
            e.preventDefault();
            Employeeservice.saveEmployee(employee).then((response)=>{
                console.log(response);
            }).catch((error)=>{
            console.log(error);
            });
        };
    return (
    <div className= "flex max-w-2xl mx-auto shadow boarder-b">
        <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
        <h1>Add employee</h1>
        </div>
        <div className=" item-center justify-center h-14 w-full my-4">
            <label className = "block font-normal text-gray-600 text-sm">
                First Name
            </label>
            <input type="text" name="firstName" value={employee.firstName} onChange={(e)=>handleChange(e)}
            className="h-10 boarder w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className=" item-center justify-center h-14 w-full my-4">
            <label className = "block font-normal text-gray-600 text-sm">
                Last Name
            </label>
            <input type="text" name="lastName" value={employee.lastName} onChange={(e)=>handleChange(e)}
            className="h-10 boarder w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className=" item-center justify-center h-14 w-full my-4">
            <label className = "block font-normal text-gray-600 text-sm">
                Email
            </label>
            <input type="email" name="email" value={employee.email} onChange={(e)=>handleChange(e)}
            className="h-10 boarder w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className=" item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button onClick={saveEmployee} className = "rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-2">
                Save
            </button>
            <button className = "rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-2">
                Cancel
            </button>
        </div>
        </div>
    </div>
    )
}

export default Registeremployee
