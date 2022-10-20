import * as yup from 'yup';
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

const LoginForm = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup.string().email().required('enter your E-mail, please'),
    password: yup
      .string()
      .min(6, 'min Password 6 simvols')
      .max(12, 'max Password 12 simvols')
      .required('enter your Password, please'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,

    onSubmit: values => {
      //console.log(values);
      dispatch(logInUser(values));
    },
  });
  console.log(formik);
  return (
    <Div>
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
          {formik.errors.email && formik.touched.email ? (
            <Validation>{formik.errors.email}</Validation>
          ) : null}
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
      <NavLink type="button" to="/register">
        register
      </NavLink>
    </Div>
  );
};

export default LoginForm;
