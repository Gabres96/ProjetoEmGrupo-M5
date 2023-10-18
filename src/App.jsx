import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Cliente from "./pages/Cliente/Cliente";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/contrato" element={<Contrato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
