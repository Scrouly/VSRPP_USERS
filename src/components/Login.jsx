import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Forma } from './Form'
import { setUser } from '../redux/slices/userSlice'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
        navigate('/')
      })
      .catch(() => alert('Invalid user!'))
  }

  return <Forma title="sign in" handleClick={handleLogin} />
}

export { Login }
