import styled from "styled-components"

export const Contrato = ({id, clienteRef, equipe, status, dt_inicio, dt_fim, valor, handleEditarContrato, handleAbrirModalDelete }) => {
  return (
    <StylesContrato>
    <table>
      <thead>
      </thead>
      <tbody>
        <tr>
          <td>Cliente</td>
          <td>{clienteRef}</td>
        </tr>

        <tr>
          <td>Equipe</td>
          <td>{equipe}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>{status}</td>
        </tr>
        <tr>
          <td>Data de início</td>
          <td>{dt_inicio}</td>
        </tr>
        <tr>
          <td>Data de término</td>
          <td>{dt_fim}</td>
        </tr>
        <tr>
          <td>Valor</td>
          <td>{valor}</td>
        </tr>
      </tbody>
    </table>
    <div className={'btn'}>
      <button onClick={() => handleEditarContrato({ id, clienteRef, equipe, status, dt_inicio, dt_fim, valor })}>Editar</button>
      <button onClick={() => handleAbrirModalDelete(id)} >Excluir</button>
    </div>
  </StylesContrato>
  )
}

export default Contrato

const StylesContrato = styled.li`
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: ${props => props.theme.white50};;
  >.btn {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`
