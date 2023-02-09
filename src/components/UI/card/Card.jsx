import styled from "styled-components";

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

const CardContainer = styled.div`
  background-color: white;
  width: 30rem;
  height: 3rem;
  margin-top: 2rem;
`;
export default Card;
