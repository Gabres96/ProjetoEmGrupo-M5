import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { tema } from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyle";
import Clientes from "./pages/Clientes/Clientes";
import Login from "./components/Login/Login";

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={tema}>
        <GlobalStyle />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cliente" element={<Clientes />} />
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
    
  );
}

export default App;
