import styled from "styled-components";
import RapBrasileiro from "../pages/Home";
import Racionais from "../pages/Racionais";
import Rzo from "../pages/Rzo";

function Conteudo() {
    return (
        <StyledConteudo>  
            <h2>Exerício Usando React</h2>
            <RapBrasileiro />
        </StyledConteudo>

    )
}

const StyledConteudo = styled.main`

`;


export default Conteudo;