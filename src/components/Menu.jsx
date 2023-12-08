import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Menu() {
    return <StyledMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/racionais">Racionais Mc's</NavLink>
      <NavLink to="/rzo">Rzo</NavLink>
    </StyledMenu>
}

const StyledMenu = styled.nav`
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    a {
    color: #ffffff;
    text-decoration: none;
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 100ms;

    &:hover {
      background-color: #121212;
      color: #e2e2e2;
      transform: scale(1.05);
    }
  }
`;


export default Menu;