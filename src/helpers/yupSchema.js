import * as yup from 'yup';

export const validationSchemaRegistation = yup.object().shape({
  username: yup.string().min(3).required('Please Enter your name'),
  email: yup.string().email().required('Please Enter your email'),
  password: yup.string().min(6).max(16).required('Please Enter your password'),
});

export const validationSchemaLogin = yup.object().shape({
  email: yup.string().email().required('Please Enter your email'),
  password: yup.string().min(6).max(16).required('Please Enter your password'),
});
//   name: yup
//     .string()
//     .min(3)
//     .matches(regExp.name, 'Name is not valid')
//     .required('Please Enter your name'),
//   email: yup
//     .string()
//     .matches(regExp.email, 'Email is not valid')
//     .required('Please Enter your email'),
//   password: yup
//     .string()
//     .required('Please Enter your password')
//     .matches(
//       regExp.password,
//       'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number'
//     ),
