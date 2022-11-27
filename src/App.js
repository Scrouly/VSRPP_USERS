import React from 'react'
import { useDispatch } from 'react-redux'
import Header from './components/Header'
import Users from './components/Users'
import AddUser from './components/AddUser'

import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import UpMain from './components/UpMain'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import { useAuth } from 'hooks/use-auth'
import { removeUser } from './redux/slices/userSlice'
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       // users: [
//       //   {
//       //     id: 1,
//       //     firstname: 'Jhon',
//       //     lastname: 'Conte',
//       //     email: 'some@mail.com',
//       //     age: 32,
//       //   },
//       //   {
//       //     id: 2,
//       //     firstname: 'Nika',
//       //     lastname: 'Zalman',
//       //     email: 'some@mail.com',
//       //     age: 41,
//       //   },
//       // ],
//       login: [],
//       registration: [],
//       redirect: [],
//     }
//     // this.addUser = this.addUser.bind(this)
//     // this.delUser = this.delUser.bind(this)
//     this.loginIn = this.loginIn.bind(this)
//     this.registration = this.registration.bind(this)
//     this.regCheck = this.regCheck.bind(this)
//     this.join = this.join.bind(this)
//   }

//   delUser = (user) => {
//     dispatch(delUserAction(user))
//   }
//   render() {
//     return (
//       <div>
//         <Header title="Список пользователей"></Header>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<UpMain></UpMain>}>
//               <Route
//                 index
//                 element={
//                   !this.state.redirect ? (
//                     <>
//                       <aside>
//                         <AddUser onAdd={this.addUser}></AddUser>
//                       </aside>
//                       <div>
//                         <Users
//                           users={this.state.users}
//                           delUser={this.delUser}
//                         ></Users>
//                       </div>
//                     </>
//                   ) : (
//                     <Login
//                       loginIn={this.loginIn}
//                       regCheck={this.regCheck}
//                       redirect={this.join}
//                     ></Login>
//                   )
//                 }
//               ></Route>
//               <Route path="*" element={<NotFound></NotFound>}></Route>
//               <Route
//                 path="login"
//                 element={
//                   <Login
//                     loginIn={this.loginIn}
//                     regCheck={this.regCheck}
//                     redirect={this.join}
//                   ></Login>
//                 }
//               ></Route>
//               <Route
//                 path="register"
//                 element={<Register registration={this.registration}></Register>}
//               ></Route>
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </div>
//     )
//   }
//   join(redirect) {
//     this.setState({ redirect: redirect })
//   }
//   regCheck() {
//     for (var prop in this.state.registration) {
//       if (
//         this.state.login.username &&
//         this.state.login.password &&
//         this.state.registration[prop].username &&
//         this.state.registration[prop].password
//       ) {
//         if (
//           this.state.login.username == this.state.registration[prop].username &&
//           this.state.login.password == this.state.registration[prop].password
//         ) {
//           return true
//         }
//       }
//     }
//   }

//   registration(regInfo) {
//     this.setState({ registration: [...this.state.registration, regInfo] })
//   }
//   loginIn(logInfo) {
//     this.setState({ login: logInfo })
//   }
//   delUser(id) {
//     this.setState({ users: this.state.users.filter((el) => el.id != id) })
//   }
//   addUser(user) {
//     if (this.state.users.length === 0) {
//       const id = this.state.users.length + 1
//       this.setState({ users: [...this.state.users, { id, ...user }] })
//     } else {
//       const id = this.state.users.slice(-1)[0].id + 1
//       this.setState({ users: [...this.state.users, { id, ...user }] })
//     }
//   }
// }

const App = () => {
  const { isAuth, email } = useAuth()
  const dispatch = useDispatch()
  return (
    <div>
      {isAuth ? (
        <Header
          title={
            <button onClick={() => dispatch(removeUser())}>
              Log out from {email}
            </button>
          }
        ></Header>
      ) : (
        <Header title="Список пользователей"></Header>
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UpMain></UpMain>}>
            <Route
              index
              element={
                isAuth ? (
                  <div>
                    <aside>
                      <AddUser></AddUser>
                    </aside>
                    <div>
                      <Users></Users>
                    </div>
                  </div>
                ) : (
                  <Navigate to="login" />
                )
              }
            ></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
            <Route exact path="login" element={<LoginPage></LoginPage>} />
            <Route
              exact
              path="register"
              element={<RegisterPage></RegisterPage>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
