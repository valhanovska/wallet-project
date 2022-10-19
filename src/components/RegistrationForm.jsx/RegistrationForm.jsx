import { useFormik } from 'formik';
import {
  Button,
  Form,
  Input,
  NavLink,
  Div,
  Label,
} from './RegistrationForm.styled';
import icon from '../../assets/icons/sprite.svg';
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
        <Label>
          <svg>
            <use href={icon + '#icon-icon-Lock'}></use>
          </svg>
          <Input
            placeholder="Confirm password"
            id="confirmPassword"
            name="confirmPassword"
            type="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
        </Label>

        <Label>
          <svg>
            <use href={icon + '#icon-icon-Profile'}></use>
          </svg>
          <Input
            placeholder="First name"
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </Label>
        <Button type="submit">register</Button>
      </Form>
      <NavLink type="button" to="/register">
        log in
      </NavLink>
    </Div>
  );
};

export default RegistrationForm;
