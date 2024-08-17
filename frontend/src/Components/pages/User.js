import React from 'react'

function User(props) {
    const {_id,firstName,lastName,email,Address,Department} = props.users;
  return (
    <div>
      <p>User Display</p>
      <p>ID:{_id}</p>
      <p>Firstname:{firstName}</p>
      <p>Lastname:{lastName}</p>
      <p>Gmail:{email}</p>
      <p>Address:{Address}</p>
      <p>Department:{Department}</p>


    </div>
  )
}

export default User
