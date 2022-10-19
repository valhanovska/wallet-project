import { Button, Form, Input, NavLink, Div, Label } from './LoginForm.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operationsAuth';
import icon from '../../assets/icons/sprite.svg';
const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values);
      dispatch(logIn(values));
    },
  });

  return (
    <Div>
      <Form onSubmit={formik.handleSubmit}>
        <Label>
          <svg>
            <use href={icon + '#icon-icon-Email'}></use>
          </svg>
          <Input
            placeholder="E-mail"
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Label>
        <Label>
          <svg>
            <use href={icon + '#icon-icon-Lock'}></use>
          </svg>
          <Input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
        </Label>
        <Button type="submit">log in</Button>
      </Form>
      <NavLink type="button" to="/register">
        register
      </NavLink>
    </Div>
  );
};

export default LoginForm;
