import styled from 'styled-components'
import Button from '../Button/Button'
const Cliente = ({ id, nome, telefone, email, cnpj, endereco, handleEditarCliente, handleAbrirModalDelete }) => {

  return (
    <section>
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
      <div className={'btn'}>
        <Button texto ="editar" variant ="third" onClick={() => handleEditarCliente({ id, nome, telefone, email, cnpj, endereco })}/>
        <Button texto ="excluir" variant ="third" onClick={() => handleEditarCliente({ id, nome, telefone, email, cnpj, endereco })}/>
      </div>
    </StylesCliente>
    </section>
  )

}

export default Cliente

const StylesCliente = styled.li`
  width: 500px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 8px;
  background-color: ${props => props.theme.white50};;
  >.btn {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  section{
    display: flex;
  }
`