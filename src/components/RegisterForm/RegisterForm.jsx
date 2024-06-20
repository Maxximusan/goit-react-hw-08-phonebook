import * as React from 'react';

import {InputAdornment, IconButton, InputLabel, OutlinedInput, FormHelperText} from '@mui/material';
import {Visibility, VisibilityOff}from '@mui/icons-material';
import Button from '@mui/material/Button';

import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operations';

import { validationSchemaRegistation } from '../../helpers/yupSchema';

import {MainContainer , TittleContainer , Title, Formm, Input, InputFormControl, RegisterOrLoginBox, RegisterOrLoginLink } from 'components/RegisterForm/RegisterForm.styled'




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
      // console.log(res);
      // console.log(values);

      if (res.type === 'auth/register/fulfilled') {
        formik.resetForm();
      }
      
      // formik.resetForm();
      
    },
  
  });


  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  return (
    <MainContainer elevation={1}>
    
    
      <TittleContainer >
        <Title>Create a PHONEBOOK account</Title>
      </TittleContainer>
      
        <Formm  autoComplete="off" onSubmit={formik.handleSubmit}>
          
            <Input
              type="text"
              name="username"
              id="username"
              // variant="standard" 
          label="username"
         
              value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
              
            />
          
          
          
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
            Register
          </Button>
        </Formm>

        <RegisterOrLoginBox>
        Already have an account?   <RegisterOrLoginLink to="/login">Log In</RegisterOrLoginLink>
        
        </RegisterOrLoginBox>
      
    </MainContainer>
  );
};

