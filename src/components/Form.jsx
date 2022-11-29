import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string()
    .label('password')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    )
    .required('This field is required'),
})

const Forma = ({ title, handleClick, google }) => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => handleClick(values.email, values.password)}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <Field name="email" type="email" placeholder="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </div>
          <div>
            <Field type="password" name="password" placeholder="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
          </div>
          <div>
            <button type="submit">{title}</button>
          </div>
        </Form>
      )}
    </Formik>
    {title === 'sign in' ? (
      <div>
        <button onClick={() => google()}>Sing in with google</button>
      </div>
    ) : (
      <></>
    )}
  </div>
)
export { Forma }
