import { useFormik } from 'formik';
import * as yup from 'yup';
import { styled } from '@mui/material/styles';
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
  BorderProgress,
} from './RegistrationForm.styled';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

import icon from '../../assets/icons/sprite.svg';
import { registerUser } from '../../redux/auth/operationsAuth';
import { useDispatch } from 'react-redux';
import Logo from 'components/Logo/Logo';

const RegistrationForm = () => {
  const dispatch = useDispatch();

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
    // pass.includes(configPass) && configPass !== "" ? (configPass === pass ? 100 : 30) : 0
    // const sum = pass.includes(configPass) && configPass !== "" ? 30 && (configPass > 6 ? 60 && (configPass === pass ? 100: 60): 30 ) : 0
    // return sum
  };
  const schema = yup.object().shape({
    email: yup.string().email().required('enter your E-mail, please'),
    password: yup
      .string()
      .min(6, 'min Password 6 simvols')
      .max(12, 'max Password 12 simvols')
      .required('enter your Password, please'),
    firstName: yup.string().required('enter your First Name, please'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    
    height: 5,
    borderRadius: 4,
    marginTop: 8,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:
        formik.errors.confirmPassword && formik.touched.confirmPassword
          ? theme.palette.mode === 'light'
            ? '#ff4747;'
            : '#ff4747;'
          : null || theme.palette.mode === 'light'
          ? '#24CCA7'
          : '#24CCA7',
    },
  }));

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

  return (<>
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
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
          </Label>
          <BorderProgress>
            <BorderLinearProgress variant="determinate" value={progresLine()} />
            </BorderProgress>
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
