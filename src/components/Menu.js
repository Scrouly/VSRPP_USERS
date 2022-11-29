import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <>
      <nav>
        <NavLink to="." end>
          Home
        </NavLink>
        <NavLink to="login">Login</NavLink>
        <NavLink to="register">Register</NavLink>
        <NavLink to="api">Api</NavLink>
      </nav>
    </>
  )
}

export default Menu
