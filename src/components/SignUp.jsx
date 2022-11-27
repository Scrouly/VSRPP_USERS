import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { Forma } from './Form'
import { setUser } from '../redux/slices/userSlice'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = (email, password) => {
    const auth = getAuth()
    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(() => alert('Perhaps this user already exists!'))
  }

  return <Forma title="register" handleClick={handleRegister} />
}

export { SignUp }
