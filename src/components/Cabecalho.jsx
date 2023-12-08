import styled from "styled-components";
import Menu from "./Menu";

function Cabecalho() {
    return (
        <StyledCabecalho>
            <Menu />
        </StyledCabecalho>
    )
}


const StyledCabecalho = styled.header``;

export default Cabecalho;