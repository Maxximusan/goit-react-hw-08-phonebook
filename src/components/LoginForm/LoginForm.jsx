
import * as React from 'react';

import {InputAdornment, IconButton, InputLabel, OutlinedInput, FormHelperText,  Alert,} from '@mui/material';
import {Visibility, VisibilityOff}from '@mui/icons-material';
import Button from '@mui/material/Button';


import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/operations';

import { validationSchemaLogin  } from '../../helpers/yupSchema';

import {MainContainer , TittleContainer , Title, Formm, Input, InputFormControl, RegisterOrLoginBox, RegisterOrLoginLink } from 'components/LoginForm/LoginForm.styled'




export const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchemaLogin ,
    onSubmit: async (values) => {
      const res = await dispatch(logIn( {
        email: values.email,
        password: values.password,
      }))
      // console.log(res);
      // console.log(values);

      if (res.type === 'auth/login/fulfilled') {
        formik.resetForm();
      }
      
      else if (res.type === 'auth/login/rejected'){
        setErrorMessage('We have not found user for this email/password')
      }
      // formik.resetForm();
      
    },
  
  });


  

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <MainContainer elevation={1}>
     
      <TittleContainer>
        <Title>Login to PHONEBOOK</Title>
        {errorMessage && 
          <Alert variant="outlined" severity="error">
            {errorMessage}
            </Alert>}
      </TittleContainer>

      
        <Formm autoComplete="off" onSubmit={formik.handleSubmit}>
        <Input
              type="email"
              name="email"
              id="email"
         
          label="email"
             
              value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
            />
            
          
            <InputFormControl
            variant="outlined"
            error={formik.touched.password && Boolean(formik.errors.password)}
           
            
            >
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput 
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}

              endAdornment={
                <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
               }
              />

              <FormHelperText id="password">
                 {formik.touched.password && formik.errors.password}
               </FormHelperText>
              </InputFormControl> 

           
          <Button  type="submit" color="primary"  variant="contained" fullWidth>
            Log In
          </Button>
        </Formm>
      
        <RegisterOrLoginBox>
        Haven't had an account yet?   <RegisterOrLoginLink to="/register">Register</RegisterOrLoginLink>
        
        </RegisterOrLoginBox>

    </MainContainer>
  );
};
