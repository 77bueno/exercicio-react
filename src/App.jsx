import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Racionais from "./pages/Racionais";
import Home from "./pages/Home";
import Rzo from "./pages/Rzo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
        <Conteudo>
          <Routes>
            <Route Component={Home} exact path="/" />
            <Route Component={Racionais} path="/racionais"  />
            <Route Component={Rzo} path="/rzo" />
          </Routes>
        </Conteudo>
    </BrowserRouter>
  );
}

export default App