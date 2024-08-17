import React from 'react'
import '../../Styles/nav.css';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <div className="nav">
        <ul className="nav-ul">
        <li className="nav-li">
                <Link to = "/home">
                <p>Home</p>
                </Link>
                
            </li>
            <li className="nav-li">
                <Link to = "/addusers">
                <p>Add User </p>
                </Link>
                
            </li>
            <li className="nav-li">
                <Link to = "/adddepartment">
                <p>Add Department</p>

                </Link>
            </li>
            <li className="nav-li">
                <Link to= "/allusers">
                <p>User Details </p>
                </Link>
                
            </li>
            
        </ul>
    </div>
  )
}

export default Nav
