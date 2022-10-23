import * as yup from 'yup';

export const schema = yup.object().shape({
  //   email: yup.string().email().required('enter your E-mail, please'),
  //   password: yup
  //     .string()
  //     .min(6, 'min Password 6 simvols')
  //     .max(12, 'max Password 12 simvols')
  //         .required('enter your Password, please'),
  amount: yup.string().required('enter your amount, please'),
  comment: yup.string().required('enter your conemt, please'),
  categoryId: yup.string().required('cange your category, please'),
});
