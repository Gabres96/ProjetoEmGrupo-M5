import { StyleContatoLista } from "./contratoLista.styles";

const ContratoLista = ({id, cliente, status, dataInicio, dataTermino, valor, handleEditarTransacao}) => {

  return (
    <StyleContatoLista>
      <form>
        <h2>Lista de Contratos</h2>
          <div className={"fields"}>
            <div className={"field"}>
                <p>{cliente}</p>
                <p>{status}teste teste</p>
                <p>{dataInicio}</p>
                <p>{dataTermino}</p>
                <p>{valor}</p>
                <button onClick={() => handleEditarTransacao({ id, valor, categoria, data, tipo, descricao })}>Editar</button>
            </div>
            <div className={"field"}>
            </div>
          </div>
          <div className={"field"}>
            <input type="text" placeholder="Digite o assunto" required />
          </div>
          <div className={"field"}>
              <textarea cols="30" rows="10" placeholder="Digite o conteúdo" required></textarea>
          </div>

          <div className={"buttonArea"}>
              <button type="submit">Enviar</button>
          </div>
      </form>
    </StyleContatoLista>
  );
};

export default ContratoLista;