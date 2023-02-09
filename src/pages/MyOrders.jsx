import Button from "../components/UI/button/Button";
import Card from "../components/UI/card/Card";
import styled from "styled-components";
import { useNav } from "../components/hook/useNavigate";
export const MyOrders = () => {
    const {BtnGoBackHandler}=useNav('/cart')
  return (
    <Container>
      <Card>
        {" "}
        <p>My Orders</p>
      </Card>
      <Button onClick={BtnGoBackHandler}>Go Back</Button>
    </Container>
  );
};
const Container = styled.div`
  text-align: center;
  Button {
    margin-left: -9rem;
    margin-top: 1rem;
  }
`;
