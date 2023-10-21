import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cliente from "./pages/Clientes/Clientes";
import { ThemeProvider } from "styled-components";
import { tema } from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyle";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={tema}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cliente" element={<Cliente />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
