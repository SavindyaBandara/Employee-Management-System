import React, { useEffect, useState } from 'react';
import axios from "axios";
import Department from './Department';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/adduser.css';
const URL = "http://localhost:5000/departments";

const fetchHandler1 = async () => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching departments:", error);
        return [];
    }
};

function AllDepartments() {
    const [deps, setDeps] = useState([]);

    useEffect(() => {
        fetchHandler1().then((data) => {
            if (data && data.depts) {
                setDeps(data.depts);
            } else {
                console.error("Invalid data format received:", data);
            }
        });
    }, []);
    
    return (
        <div className='background-image'>
            <Nav/>
            <div className="container mt-4">
            <h2 className="text-center mt-5">Departments List</h2>
            <table className="table table-bordered table-striped table-hover">
                <thead className="thead-dark">
                    <tr>   
                        <th>ID</th>
                        <th>Department Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {deps && deps.map((department, i) => (
                        <Department key={i} deps={department} />
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default AllDepartments;
