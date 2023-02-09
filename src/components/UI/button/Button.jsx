import styled from "styled-components";

const Button = ({ onClick, children, id }) => {
  return <ButtonStyled onClick={onClick} id={id}>{children}</ButtonStyled>;
};
export default Button;
const ButtonStyled = styled.button`
  color: white;
  padding: 0.5rem;
  background-color: #47c29d;
  border-radius: 10px;
  border: none;
`;
