import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#9e9e9e')};
  border: none;
  color: ${({ disabled }) => (disabled ? '#666' : 'white')};
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#bdbdbd')};
  }
`;

export const DismissButton = styled(Button)`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#fc5f78')};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#f70058')};
  }
`;

export const SubmitButton = styled(Button)`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#4caf50')};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#45a049')};
  }
`;
