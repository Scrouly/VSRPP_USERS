import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserAction } from '../redux/Actions/UserActions'

const AddUser = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userReducer.users)
  const addUser = (el) => {
    dispatch(addUserAction(el))
  }

  const users = {}
  console.log(user)
  return (
    <form className="add-form" id="add-form">
      <input
        placeholder="First Name"
        onChange={(e) => {
          users[0] = e.target.value
        }}
      ></input>
      <input
        placeholder="Last Name"
        onChange={(e) => {
          users[1] = e.target.value
        }}
      ></input>
      <input
        placeholder="Email"
        onChange={(e) => {
          users[2] = e.target.value
        }}
      ></input>
      <input
        placeholder="Age"
        onChange={(e) => {
          users[3] = e.target.value
        }}
      ></input>
      <button
        type="button"
        onClick={() => {
          addUser({
            firstname: users[0],
            lastname: users[1],
            email: users[2],
            age: users[3],
          })
          document.getElementById('add-form').reset()
        }}
      >
        ADD
      </button>
    </form>
  )
}

export default AddUser
