import { useFormik } from 'formik';

// import Box from '@mui/material/Box';
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
import Logo from 'components/Logo/Logo';
import { BorderLinearProgress, schema } from './Validation';
import { useState } from 'react';
import { ShowPasswordButton } from 'components/Common/ShowPasswordButton';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState('password');
  const switchPasswordVisibility = () => {
    if (!showPassword) {
      setShowPassword(true);
      setInputType('text');
      return;
    }
    setShowPassword(false);
    setInputType('password');
  };
  const progresLine = () => {
    const configPass = formik.values.confirmPassword;
    const pass = formik.values.password;

    if (configPass === '') {
      return 0;
    } else if (configPass === pass) {
      return 100;
    } else if (configPass.length >= 6) {
      return 60;
    } else if (pass.includes(configPass)) {
      return 30;
    }
  };

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
        password: values.password,
      };
      dispatch(registerUser(user));
    },
  });

  return (
    <>
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
                type={inputType}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <ShowPasswordButton
                showPassword={showPassword}
                onClick={switchPasswordVisibility}
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
                id="confirmPassword"
                name="confirmPassword"
                type={inputType}
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
            </Label>
            <BorderLinearProgress
              formik={formik}
              variant="determinate"
              value={progresLine()}
            />
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
        <NavLink type="button" to="/login">
          log in
        </NavLink>
      </Div>
    </>
  );
};

export default RegistrationForm;
