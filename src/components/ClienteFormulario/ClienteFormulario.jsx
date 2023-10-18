import { useState } from "react";

const ClienteFormulario = () => {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefaut()
    Console.log(nome);
    Console.log(endereco);
    Console.log(telefone);
    Console.log(email);

  };

  return (
    <div>
      <h2>Cadastro de Clientes</h2>
      <form>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e)}
          />
        </div>
        <div>
          <label>Endereço:</label>
          <input
            type="text"
            name="endereco"
            value={endereco}
            onChange={(e) => setEndereco(e)}
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e)}
          />
        </div>
        <button onSubmit={handleSubmit} type="submit">Cadastrar Cliente</button>
      </form>
    </div>
  );
};

export default ClienteFormulario;
