import { Button, Form, Input, NavLink } from './LoginForm.styled';
import { useFormik } from 'formik';
// import { useDispatch } from 'react-redux';

const LoginForm = () => {
  //   const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values);
      //   dispatch();
    },
  });

  return (
    <>
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
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button type="submit">log in</Button>
      </Form>
      <NavLink type="button" to="/register">
        register
      </NavLink>
    </>
  );
};

export default LoginForm;
