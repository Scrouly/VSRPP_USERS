import { Login } from '../components/Login'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <Login />
      <p>
        <Link to="/register">Create an account</Link>
      </p>
    </div>
  )
}

export default LoginPage
