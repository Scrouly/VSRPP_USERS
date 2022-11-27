import React from 'react'

import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { delUserAction } from '../redux/Actions/UserActions'
const User = (props) => {
  const user = props.user
  const dispatch = useDispatch()
  const delUser = (user) => {
    dispatch(delUserAction(user))
  }
  return (
    <div className="user">
      <AiOutlineClose
        onClick={() => delUser(user.id)}
        className="delete-icon"
      ></AiOutlineClose>
      <h3>id: {user.id}</h3>
      <p>
        name: {user.firstname} {user.lastname}
      </p>
      <p>email: {user.email}</p>
      <p>age: {user.age}</p>
    </div>
  )
}

export default User
