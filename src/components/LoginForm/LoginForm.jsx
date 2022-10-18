import { Form, Input, NavLink } from './LoginForm.styled';
import React from 'react';
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
        <button type="submit">log in</button>
      </Form>
      <NavLink type="button" to="/register">register</NavLink>
    </>
  );
};

// const LoginForm = () => {
//     return (<>
//         <div>
//             <h2>Wallet</h2>
//             <Form action="">
//                 <input placeholder="E-mail" type="text" />
//                 <input placeholder="Password" type="text" />
//                 <button type="button">Log in</button>
//             </Form>
//             <button>Register</button>
//         </div>
//     </>);
// }

export default LoginForm;
