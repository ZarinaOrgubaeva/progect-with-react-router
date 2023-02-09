import styled from "styled-components";
import { useNav } from "../components/hook/useNavigate";
import Button from "../components/UI/button/Button";
import Card from "../components/UI/card/Card";

export const MyCart = () => {
  const { BtnGoBackHandler } = useNav();
  return (
    <Container>
      <Card>
        <p> My Cart</p>
      </Card>
      <Button onClick={BtnGoBackHandler}>Go Back</Button>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  Button {
    margin-left: -10rem;
    margin-top: 1rem;
  }
`;
