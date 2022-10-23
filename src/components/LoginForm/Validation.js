import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email().required('enter your E-mail, please'),
  password: yup
    .string()
    .min(6, 'min Password 6 simvols')
    .max(12, 'max Password 12 simvols')
    .required('enter your Password, please'),
});
