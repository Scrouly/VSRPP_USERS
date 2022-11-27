import React from 'react'
import User from './User'
import { useSelector } from 'react-redux'

const Users = () => {
  const users = useSelector((state) => state.userReducer.users)
  console.log(users)
  if (users.length > 0) {
    return (
      <div className="users">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    )
  } else {
    return (
      <div>
        <h3>Список пользователей пуст</h3>
      </div>
    )
  }
}

export default Users
