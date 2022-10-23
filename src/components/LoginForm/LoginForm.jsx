
import {
  Button,
  Form,
  Input,
  NavLink,
  Div,
  Label,
  Validation,
  DivInput,
} from './LoginForm.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../redux/auth/operationsAuth';
import icon from '../../assets/icons/sprite.svg';
import Logo from 'components/Logo/Logo';
import { schema } from './Validation';

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,

    onSubmit: values => {
      dispatch(logInUser(values));
    },
  });

  

  return (
    <Div>
      <Logo />
      <Form onSubmit={formik.handleSubmit}>
        <DivInput>
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
        </DivInput>
        <DivInput>
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
          {formik.errors.password && formik.touched.password ? (
            <Validation>{formik.errors.password}</Validation>
          ) : null}
        </DivInput>
        <Button type="submit">log in</Button>
      </Form>
      <NavLink  to="/register">
        register
      </NavLink>
    </Div>
  );
};

export default LoginForm;
