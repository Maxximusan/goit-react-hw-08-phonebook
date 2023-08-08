import { ErrorMessage } from 'formik';
import styled from 'styled-components';

export const ErrorText = styled.div`
  color: red;
`;

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
