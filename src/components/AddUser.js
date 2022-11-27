import React from 'react'
import { useDispatch } from 'react-redux'
import { addUserAction } from '../redux/Actions/UserActions'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { setLocale } from 'yup'

setLocale({
  mixed: {
    required: 'Required Field',
  },
  string: {
    email: 'Invalid email',
    min: 'Too short (min ${min} characters)',
    max: 'Too long (max ${max} characters)',
  },
  number: {
    min: 'Minimum age ${min} year',
    max: 'Maximum age ${max} years',
  },
})
const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2).max(50).required(),
  lastName: Yup.string().min(2).max(50).required(),
  email: Yup.string().email().required(),
  age: Yup.number().min(1).max(100).required(),
})

const AddUser = () => {
  const dispatch = useDispatch()
  const addUser = (el) => {
    dispatch(addUserAction(el))
  }
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',

          lastName: '',

          email: '',
          age: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          addUser({
            firstname: values.firstName,
            lastname: values.lastName,
            email: values.email,
            age: values.age,
          })
          document.getElementById('add-form').reset()
        }}
      >
        {({ errors, touched }) => (
          <Form className="add-form" id="add-form">
            <table>
              <tr>
                <td>
                  <Field name="firstName" placeholder="firstName" />
                </td>

                <td>
                  <Field name="lastName" placeholder="lastName" />
                </td>

                <td>
                  <Field name="email" type="email" placeholder="email" />
                </td>

                <td>
                  <Field name="age" placeholder="age" />
                </td>
                <td>
                  <button type="submit">ADD</button>
                </td>
              </tr>
              <tr>
                <td>
                  {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
                  ) : null}
                </td>
                <td>
                  {errors.lastName && touched.lastName ? (
                    <div>{errors.lastName}</div>
                  ) : null}
                </td>
                <td>
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </td>
                <td>
                  {errors.age && touched.age ? <div>{errors.age}</div> : null}
                </td>
              </tr>
            </table>
          </Form>
        )}
      </Formik>
    </div>
  )
}
// const AddUser = () => {
//   const dispatch = useDispatch()
//   const user = useSelector((state) => state.userReducer.users)
//   const addUser = (el) => {
//     dispatch(addUserAction(el))
//   }

//   const users = {}
//   console.log(user)
//   return (
//     <form className="add-form" id="add-form">
//       <input
//         placeholder="First Name"
//         onChange={(e) => {
//           users[0] = e.target.value
//         }}
//       ></input>
//       <input
//         placeholder="Last Name"
//         onChange={(e) => {
//           users[1] = e.target.value
//         }}
//       ></input>
//       <input
//         placeholder="Email"
//         onChange={(e) => {
//           users[2] = e.target.value
//         }}
//       ></input>
//       <input
//         placeholder="Age"
//         onChange={(e) => {
//           users[3] = e.target.value
//         }}
//       ></input>
//       <button
//         type="button"
//         onClick={() => {
//           addUser({
//             firstname: users[0],
//             lastname: users[1],
//             email: users[2],
//             age: users[3],
//           })
//           document.getElementById('add-form').reset()
//         }}
//       >
//         ADD
//       </button>
//     </form>
//   )
// }

export default AddUser
