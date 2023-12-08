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
`;


export default Menu;