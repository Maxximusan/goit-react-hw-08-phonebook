// import { Formik } from 'formik'
import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operations';
import css from './RegisterForm.module.css';

// const initialValues = {
//   username: '',
//   email: '',
//   password: '',
// }


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.mainContainer}>
      <div className={css.titleContainer}>
        <h2 className={css.title}>Create a PHONEBOOK account</h2>
      </div>
    {/* <Formik initialValues={initialValues}> */}
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        
      <label className={css.label}>
        Username
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
      </label>
      <label className={css.label}>
        Email
          <input
            type="email"
            name="email"
            // pattern="/^[ A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\s*?$/i"
             required
          />
      </label>
      <label className={css.label}>
        Password
          <input
            type="password"
            name="password"
            // pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/"
            required
          />
      </label>
        <button className={css.button} type="submit">Register</button>
      </form>
    {/* </Formik> */}
      </div>
  );
};
