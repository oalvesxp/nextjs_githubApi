import styled from 'styled-components'

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${(props) => (props.$error ? '#ff0000' : '#ddd')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
  }
`
