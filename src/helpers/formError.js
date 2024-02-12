import { ErrorMessage } from 'formik';
import styled from '@emotion/styled';

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
