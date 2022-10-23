import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import * as yup from 'yup';
import { styled } from '@mui/material/styles';

export const BorderLinearProgress = styled(LinearProgress)(
  ({ theme, formik }) => ({
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
  })
);

export const schema = yup.object().shape({
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
