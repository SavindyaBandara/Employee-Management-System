import React from 'react'
//import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Department(props) {
    const {_id, Department, description} = props.deps;
  const navigate = useNavigate();

  const deleteHandler = async () => {
    await axios.delete(`http://localhost:5000/departments/${_id}`)
      .then(() => navigate("/"))
      .then(() => navigate("/alldepartments"));
  };
  return (
    <tr>
      <td>{_id}</td> 
      <td>{Department}</td>
      <td>{description}</td>
      <td>
        {/* <Link to={`/alldepartment/${_id}`}>
          <button className="btn btn-success" >Update</button>
        </Link> */}
        <button className="btn btn-success">Update</button>
        <button  class="btn btn-danger" onClick={deleteHandler}>Delete</button>
      </td>
    </tr>

  )
}

export default Department
