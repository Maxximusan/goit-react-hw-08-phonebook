import CssBaseline from '@mui/material/CssBaseline';

import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/operations';
import css from './LoginForm.module.css';
import { validationSchemaLogin } from '../../helpers/yupSchema';
import { FormError } from 'helpers/formError';

const initialValue = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    // e.preventDefault();
    // const form = e.currentTarget;
    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
    resetForm();
  };

  return (
    <div className={css.mainContainer}>
       <CssBaseline />
      <div className={css.titleContainer}>
        <h2 className={css.title}>Login to PHONEBOOK</h2>
      </div>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={validationSchemaLogin}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Email
            <Field type="email" name="email" required />
            <FormError name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" required />
            <FormError name="password" />
          </label>
          <button className={css.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};
