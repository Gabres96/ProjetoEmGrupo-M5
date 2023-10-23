import styled from 'styled-components'
import Button from '../Button/Button'
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
      <div className={'btn'}>
      <Button texto={'editar'} variant={'third'} onClick={() => handleEditarCliente({ id, nome, telefone, email, cnpj, endereco })} />
        <Button texto={'excluir'} variant={'third'} onClick={() => handleEditarCliente({ id, nome, telefone, email, cnpj, endereco })} >Excluir</Button>
      </div>
    </StylesCliente>
  )

}

export default Cliente