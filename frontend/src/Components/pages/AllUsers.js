import React, { useEffect, useRef, useState } from 'react';
import Nav from './Nav';
import axios from "axios";
import User from "../pages/User";
import { useReactToPrint } from "react-to-print";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/adduser.css';
const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
}

function AllUsers() {
  const [users, setUsers] = useState([]);
  const ComponentsRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: "User Report",
    onAfterPrint: () => alert("User Report Downloaded Successfully.")
  });

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredUsers = data.users.filter((user) =>
        Object.values(user).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setUsers(filteredUsers);
      setNoResult(filteredUsers.length === 0);
    });
  };

  return (
    <div className="background-image">
      <Nav />
      <div className="container mt-4">
        <h1 className="text-center">Emplyoee Management System</h1>
        <h3>All Employees</h3>
        <div className="d-flex justify-content-center mb-4">
          <input 
            onChange={(e) => setSearchQuery(e.target.value)} 
            type='text' 
            name='Search' 
            placeholder='Search users' 
            className="form-control w-50"
          />
          <button onClick={handleSearch} class="btn btn-dark">Search</button>
        </div>
        {noResult ? (
          <div className="text-center">No User Found</div>
        ) : (
          <div ref={ComponentsRef} className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Department</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users && users.map((user, i) => (
                  <User key={i} users={user} />
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="text-center">
          <button onClick={handlePrint} class="btn btn-info">Download Report</button>
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
