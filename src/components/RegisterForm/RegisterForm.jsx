import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operations';
import css from './RegisterForm.module.css';
import { validationSchemaRegistation } from '../../helpers/yupSchema';
import { FormError } from 'helpers/formError';

const initialValues = {
  username: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // e.preventDefault();

    console.log(values.password);
    console.log(values.username);
    console.log(values.email);
    console.log(actions);
    dispatch(
      register({
        name: values.username,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  return (
    <div className={css.mainContainer}>
      <div className={css.titleContainer}>
        <h2 className={css.title}>Create a PHONEBOOK account</h2>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchemaRegistation}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Username
            <Field
              type="text"
              name="username"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // required
            />
            <FormError name="username" />
          </label>
          <label className={css.label}>
            Email
            <Field
              type="email"
              name="email"
              // pattern="/^[ A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\s*?$/i"
              // required
            />
            <FormError name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field
              type="password"
              name="password"
              // pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/"
              // required
            />
            <FormError name="password" />
          </label>
          <button className={css.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};
