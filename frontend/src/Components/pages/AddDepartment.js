import React, { useState } from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';



function AddDepartment() {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    Department: "",
    description: ""
  });

  // Fetch all departments

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Add new department
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest();
    navigate('/alldepartments');
  };
  const sendRequest = async () => {
    await axios.post("http://localhost:5000/departments", {
      Department: String(inputs.Department),
      description: String(inputs.description)
    }).then(res => res.data);
  };
    
 



  return (
    <div>
      <Nav />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Add Department</h1>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="form-group">
            <label>Department:</label>
            <input 
              type='text' 
              name='Department' 
              onChange={handleChange} 
              value={inputs.Department} 
              className="form-control" 
              required 
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input 
              type='text' 
              name='description' 
              onChange={handleChange} 
              value={inputs.description} 
              className="form-control" 
              required 
            />
          </div>
          <button type='submit' className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );

};
export default AddDepartment;
