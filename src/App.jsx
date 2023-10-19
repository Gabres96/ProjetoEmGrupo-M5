import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Cliente from "./pages/Cliente/Cliente";
import Contrato from "./pages/Contratos/Contratos";
import { ThemeProvider } from "styled-components";
import { tema } from "./style/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={tema}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/contrato" element={<Contrato />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
