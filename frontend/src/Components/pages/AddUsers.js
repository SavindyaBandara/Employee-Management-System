import React, { useState } from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/adduser.css';
function AddUsers() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Address: "",
    Department: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest();
    navigate('/allusers');
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/users", {
      firstName: String(inputs.firstName),
      lastName: String(inputs.lastName),
      email: String(inputs.email),
      Address: String(inputs.Address),
      Department: String(inputs.Department),
    }).then(res => res.data);
  };

  return (
    <div >
      <Nav />
      <div className="container mt-5" >
        <h1 className="text-center">Add User</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="form-group">
            <label>First Name</label>
            <input 
              type='text' 
              name='firstName' 
              onChange={handleChange} 
              value={inputs.firstName} 
              className="form-control"
              required 
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input 
              type='text' 
              name='lastName' 
              onChange={handleChange} 
              value={inputs.lastName} 
              className="form-control"
              required 
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type='email' 
              name='email' 
              onChange={handleChange} 
              value={inputs.email} 
              className="form-control"
              required 
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input 
              type='text' 
              name='Address' 
              onChange={handleChange} 
              value={inputs.Address} 
              className="form-control"
              required 
            />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input 
              type='text'  
              name='Department' 
              onChange={handleChange} 
              value={inputs.Department} 
              className="form-control"
              required 
            />
          </div>
          <button type='submit' class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddUsers;
