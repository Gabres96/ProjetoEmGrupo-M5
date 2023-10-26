import styled from "styled-components"
import Button from "../Button/Button"
export const Contrato = ({id, clienteRef, equipe, status, dt_inicio, dt_fim, valor, handleEditarContrato, handleAbrirModalDelete }) => {
  return (
    <StylesContrato>
    <table>
      <thead>
      </thead>
      <tbody>
        <tr>
          <td>Cliente: </td>
          <td>{clienteRef}</td>
        </tr>

        <tr>
          <td>Equipe: </td>
          <td>{equipe}</td>
        </tr>
        <tr>
          <td>Status: </td>
          <td>{status}</td>
        </tr>
        <tr>
          <td>Data de início: </td>
          <td>{dt_inicio}</td>
        </tr>
        <tr>
          <td>Data de término: </td>
          <td>{dt_fim}</td>
        </tr>
        <tr>
          <td>Valor: </td>
          <td>{valor}</td>
        </tr>
      </tbody>
    </table>
    <div className={'btn'}>
    <Button texto ="Editar" variant ="third" onClick={() => handleEditarContrato({ id, clienteRef, equipe, status, dt_inicio, dt_fim, valor })}/>
      <Button texto ="Excluir" variant ="third" onClick={() => handleAbrirModalDelete(id)}/>
    </div>
  </StylesContrato>
  )
}

export default Contrato

const StylesContrato = styled.li`
width: 544px;
padding: 15px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
border-radius: 8px;
background-color: ${props => props.theme.gray50};;
>.btn {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

section{
  display: flex;
}
`
