import { useFormik } from 'formik';
import { Button, Form, Input, NavLink, Div } from './RegistrationForm.styled';
// import { useDispatch } from 'react-redux';
const RegistrationForm = () => {
  //   const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <Div>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          placeholder="E-mail"
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Input
          placeholder="Confirm password"
          id="confirmPassword"
          name="confirmPassword"
          type="confirmPassword"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        <Input placeholder="First name"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
             />
        <Button type="submit">register</Button>
      </Form>
      <NavLink type="button" to="/register">
        log in
      </NavLink>
    </Div>
  );
};

export default RegistrationForm;
