import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import axios from "axios";
import User from "../pages/User";
const URL = "http://localhost:5000/users";

// const fetchHandler = async() => {
//     return await axios.get(URL).then((res)=>res.data);

// }
const fetchHandler = async () => {
  try {
      const response = await axios.get(URL);
      return response.data;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Optional: re-throw the error if you want to handle it upstream
  }
};
function AllUsers() {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetchHandler().then((data) => setUsers(data.users));

    },[])
  return (
    <div>
        <Nav/>
      <h1>All user details</h1>
      <div>
        {users && users.map((user, i)=>(
            <div key={i}>
                <User user={user}/>
          </div>

        ))}
      </div>
    </div>
  )
}

export default AllUsers
