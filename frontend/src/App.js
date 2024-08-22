import React from "react";
import { Route, Routes} from "react-router-dom";
import "./App.css";
//import Home from "./Components/pages/Home";
import AddDepartment from "./Components/pages/AddDepartment";
import AllUsers from "./Components/pages/AllUsers";
import AddUsers from "./Components/pages/AddUsers";

import UpdateUser from "./Components/pages/UpdateUser.js";
import AllDepartments from "./Components/pages/AllDepartments.js";
function App() {
  return (
    <div>
    <React.Fragment>
    <Routes>
          {/* <Route exact path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} /> */}
          <Route path='/' element={<AllUsers/>} />
          <Route path='/addusers' element={<AddUsers/>} />
          <Route path='/adddepartment' element={<AddDepartment/>} />
          <Route path='/allusers' element={<AllUsers/>} />
          <Route path='/allusers/:id' element={<UpdateUser/>} />
          <Route path='/alldepartments' element={<AllDepartments/>} />


          </Routes>
    </React.Fragment>
    </div>
  );
}

export default App;
