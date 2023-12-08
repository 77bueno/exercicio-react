import styled from "styled-components";

function Conteudo({children}) {
    return (
        <StyledConteudo>  
            {children}
        </StyledConteudo>

    )
}

const StyledConteudo = styled.main`

`;


export default Conteudo;