import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function User(props) {
  const {_id, firstName, lastName, email, Address, Department} = props.users;
  const navigate = useNavigate();

  const deletehandler = async () => {
    await axios.delete(`http://localhost:5000/users/${_id}`)
      .then(() => navigate("/"))
      .then(() => navigate("/allusers"));
  };

  return (
    <tr>
      <td>{_id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{Address}</td>
      <td>{Department}</td>
      <td>
        <Link to={`/allusers/${_id}`}>
          <button className="btn btn-success" >Update</button>
        </Link>
        <button  class="btn btn-danger" onClick={deletehandler}>Delete</button>
      </td>
    </tr>
  )
}

export default User;
