import * as yup from 'yup';

const regExp = {

   name: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
   email: /^[ A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\s*?$/i,
   password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
};

export const validationSchemaRegistation = yup.object().shape({
  username: yup.string().min(3).matches(regExp.name, 'Name is not valid').required('Please Enter your name'),
  email: yup.string().email().matches(regExp.email, 'Email is not valid').required('Please Enter your email'),
  password: yup.string().min(6).max(16).matches(
          regExp.password,
          'Must Contain 6 Characters, One Uppercase, One Lowercase, One Number'
        ).required('Please Enter your password'),
});

export const validationSchemaLogin = yup.object().shape({
  email: yup.string().email().matches(regExp.email, 'Email is not valid').required('Please Enter your email'),
  password: yup.string().min(6).max(16).required('Please Enter your password'),
});



