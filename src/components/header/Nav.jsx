import {  NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navigation = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <NavLink
            style={({isActive}) => ({
              textDecoration: "none",
              color: isActive ? "black" : "white",
            })}
            to="/product"
          >
            {" "}
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({isActive}) => ({
              textDecoration: "none",
              color: isActive ? "black" : "white",
            })}
            to="/cart"
          >
            {" "}
            My Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({isActive}) => ({
              textDecoration: "none",
              color: isActive ? "black" : "white",
            })}
            to="/order"
          >
            {" "}
            My Orders
          </NavLink>
        </li>
      </ul>
    </NavStyled>
  );
};
const NavStyled = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }
  li {
    margin-left: 0.5rem;
    font-size: 20px;
  }
`;
