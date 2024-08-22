import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';

function UpdateUser() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios.get(`http://localhost:5000/users/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios.put(`http://localhost:5000/users/${id}`, {
      firstName: String(inputs.firstName),
      lastName: String(inputs.lastName),
      email: String(inputs.email),
      Address: String(inputs.Address),
      Department: String(inputs.Department),
    }).then(res => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => navigate('/allusers'));
  }

  return (
    <div>
      <Nav />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Update User</h1>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="form-group">
            <label>First Name:</label>
            <input 
              type='text' 
              name='firstName' 
              onChange={handleChange} 
              value={inputs.firstName || ''} 
              className="form-control" 
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input 
              type='text' 
              name='lastName' 
              onChange={handleChange} 
              value={inputs.lastName || ''} 
              className="form-control" 
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type='email' 
              name='email' 
              onChange={handleChange} 
              value={inputs.email || ''} 
              className="form-control" 
              required
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input 
              type='text' 
              name='Address' 
              onChange={handleChange} 
              value={inputs.Address || ''} 
              className="form-control" 
              required
            />
          </div>
          <div className="form-group">
            <label>Department:</label>
            <input 
              type='text'  
              name='Department' 
              onChange={handleChange} 
              value={inputs.Department || ''} 
              className="form-control" 
              required
            />
          </div>
          <button type='submit' className="btn btn-primary btn-block mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
