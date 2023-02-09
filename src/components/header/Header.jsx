import styled from "styled-components";
import { Navigation } from "./Nav";
export const Header = () => {
  return (
    <HeaderStyled>
      <h2>LOGO</h2> <Navigation />
    </HeaderStyled>
  );
};

const HeaderStyled= styled.header`
    height: 5rem;
    background-color: blue;
    color: white;
    display: flex;
`