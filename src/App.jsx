import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { tema } from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyle";
import Clientes from "./pages/Clientes/Clientes";
import Login from "./components/Login/Login";
import { Home } from './pages/Home/Home';
import { Contratos } from "./pages/Contratos/Contratos";

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={tema}>
        <GlobalStyle />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cliente" element={<Clientes />} />
            <Route path="/contrato" element={<Contratos />} />
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
    
  );
}

export default App;
