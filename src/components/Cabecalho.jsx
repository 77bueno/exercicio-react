import styled from "styled-components";
import Menu from "./Menu";

function Cabecalho() {
    return (
        <StyledCabecalho>
            <Menu />
        </StyledCabecalho>
    )
}


const StyledCabecalho = styled.header`
    background-color: #000000;
`;

export default Cabecalho;