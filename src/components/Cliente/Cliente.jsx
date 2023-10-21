import styled from 'styled-components'

const Cliente = ({ id, nome, telefone, email, cnpj, endereco, handleEditarCliente, handleAbrirModalDelete }) => {

  return (
    <StylesCliente>
      <table>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td>Nome</td>
            <td>{nome}</td>
          </tr>

          <tr>
            <td>Fone</td>
            <td>{telefone}</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>CNPJ</td>
            <td>{cnpj}</td>
          </tr>
          <tr>
            <td>Endereço</td>
            <td>{endereco}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => handleEditarCliente({ id, nome, telefone, email, cnpj, endereco })}>Editar</button>
      <button onClick={() => handleAbrirModalDelete(id)} >Excluir</button>
    </StylesCliente>
  )

}
  

export default Cliente

const StylesCliente = styled.li`
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: ${props => props.theme.white50};;

  > .valor{
    font-weight: bold;
  }
`