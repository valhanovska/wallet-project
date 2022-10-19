import { useFormik } from 'formik';
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
} from './RegistrationForm.styled';

import icon from '../../assets/icons/sprite.svg';
import { registerUser } from '../../redux/auth/operationsAuth';
import { useDispatch } from 'react-redux';
const RegistrationForm = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
  email: yup.string().email().required('enter your E-mail, please'),
  password: yup
    .string().min(6, "min Password 6 simvols").max(12, "max Password 12 simvols")
      .required('enter your Password, please'),
  confirmPassword: yup
    .string().min(6, "min Password 6 simvols").max(12, "max Password 12 simvols")
      .required('enter your Password, please'),
  firstName:yup
    .string().min(6, "min Password 6 simvols").max(12, "max Password 12 simvols")
      .required('enter your Password, please'),
  });


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      const user = {
        username: values.firstName,
        email: values.email,
        password: values.confirmPassword,
      };

      console.log(values);
      dispatch(registerUser(user));
    },
  });

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
              <use href={icon + "#icon-icon-Lock"}></use>
            </svg>
            <Input
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Label>
          {formik.errors.password && formik.touched.password ? (
            <Validation>{formik.errors.password}</Validation>
          ) : null}
        </DivInput>
        
        <DivInput>
          <Label>
            <svg>
              <use href={icon + '#icon-icon-Lock'}></use>
            </svg>
            <Input
              placeholder="Confirm password"
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
          </Label>
        </DivInput>
        <DivInput>
          <Label>
            <svg>
              <use href={icon + '#icon-icon-Profile'}></use>
            </svg>
            <Input
              placeholder="First Name"
              id="firstName"
              name="firstName"
              type="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </Label>
          {formik.errors.firstName && formik.touched.firstName ? (
            <Validation>{formik.errors.firstName}</Validation>
          ) : null}
        </DivInput>
        <Button type="submit">register</Button>
      </Form>
      <NavLink type="button" to="/register">
        log in
      </NavLink>
    </Div>
  );
};

export default RegistrationForm;
