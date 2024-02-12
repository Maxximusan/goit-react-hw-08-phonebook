import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
// import { Formik, Field } from 'formik';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operations';
// import css from './RegisterForm.module.css';
import { validationSchemaRegistation } from '../../helpers/yupSchema';
// import { FormError } from 'helpers/formError';
import {MainContainer , TittleContainer , Title, Formm, Input } from 'components/RegisterForm/RegisterForm.styled'




export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchemaRegistation,
    onSubmit: async (values) => {
      const res = await dispatch(register( {
        name: values.username,
        email: values.email,
        password: values.password,
      }))
      console.log(res);
      console.log(values);

      if (res.type === 'auth/register/fulfilled') {
        formik.resetForm();
      }
      
      // formik.resetForm();
      
    },
  
  });


 

  // const handleSubmit = (values, actions) => {
  //   // e.preventDefault();

  //   console.log(values.password);
  //   console.log(values.username);
  //   console.log(values.email);
  //   console.log(actions);
  //   dispatch(
  //     register({
  //       name: values.username,
  //       email: values.email,
  //       password: values.password,
  //     })
  //   );
  //   actions.resetForm();
  // };

  return (
    <MainContainer >
    <CssBaseline />
      <TittleContainer >
        <Title>Create a PHONEBOOK account</Title>
      </TittleContainer>
      
        <Formm  autoComplete="off" onSubmit={formik.handleSubmit}>
          
            <Input
              type="text"
              name="username"
              id="username"
         
          label="username"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // required
              value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
              
            />
            {/* <FormError name="username" /> */}
          
          
            <Input
              type="email"
              name="email"
              id="email"
         
          label="email"
              // pattern="/^[ A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\s*?$/i"
              // required
              value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
            />
            {/* <FormError name="email" /> */}
          
          {/* <FormControl variant="outlined"> */}
          
            <Input
              type="password"
              name="password"
              id="password"
         
          label="Password"
              // pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/"
              // required
              value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
            />
            {/* <FormError name="password" /> */}
            {/* <FormHelperText>
              {formik.touched.password && formik.errors.password}
            </FormHelperText> */}
            
          
          {/* </FormControl> */}
          <Button  type="submit" color="primary"  variant="contained" fullWidth>
            Register
          </Button>
        </Formm>
      
    </MainContainer>
  );
};

// return (
//   <div className={css.mainContainer}>
//   <CssBaseline />
//     <div className={css.titleContainer}>
//       <h2 className={css.title}>Create a PHONEBOOK account</h2>
//     </div>
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={validationSchemaRegistation}
//     >
//       <Form className={css.form} autoComplete="off">
//         <label className={css.label}>
//           Username
//           <Field
//             type="text"
//             name="username"
//             // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             // required
//           />
//           <FormError name="username" />
//         </label>
//         <label className={css.label}>
//           Email
//           <Field
//             type="email"
//             name="email"
//             // pattern="/^[ A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\s*?$/i"
//             // required
//           />
//           <FormError name="email" />
//         </label>
//         <label className={css.label}>
//           Password
//           <Field
//             type="password"
//             name="password"
//             // pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/"
//             // required
//           />
//           <FormError name="password" />
//         </label>
//         <button className={css.button} type="submit">
//           Register
//         </button>
//       </Form>
//     </Formik>
//   </div>
// );
// };