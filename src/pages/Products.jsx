import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNav } from "../components/hook/useNavigate";
import Button from "../components/UI/button/Button";
import Card from "../components/UI/card/Card";
export const Products = () => {
    const {BtnGoBackHandler}=useNav('/')
  return (
    <Container>
      <Card>
        <Content>
          <li>Product Name 1</li>
          <Link to={"/product/productId1"}>
            <Button>Details</Button>
          </Link>
        </Content>
      </Card>
      <Card>
        <Content>
          <li>Product Name 2</li>
          <Link to={"/product/productId2"}>
            <Button>Details</Button>
          </Link>
        </Content>
      </Card>
      <Button onClick={BtnGoBackHandler} id="goBack">Go Back</Button>
    </ Container>
  );
};

const Content = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  font-size: 20px;
`;
const Container = styled.div`
   #goBack{
    margin-left: 30rem;
    margin-top: 1rem;
   }
`
