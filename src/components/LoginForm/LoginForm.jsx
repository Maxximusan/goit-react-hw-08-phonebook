import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.mainContainer}>
      <div className={css.titleContainer}>
        <h2 className={css.title}>Login to PHONEBOOK</h2>
      </div>
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" required/>
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" required/>
      </label>
      <button className={css.button} type="submit">Log In</button>
      </form>
      </div>
  );
};