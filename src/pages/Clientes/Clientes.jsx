import { useEffect, useState } from "react";
import { StylesCliente } from "./clientes.styles.js";
import Cliente from "../../components/Cliente/Cliente.jsx";
import { deleteCliente, getClientes, postCliente, putCliente } from "../../service/api.js";
import Modal from './../../components/Modal/Modal';
import Button from './../../components/Button/Button';
import Notificacao from './../../components/Notificacao/Notificacao';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [modalTaAberto, setModalTaAberto] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [idCliente, setIdCliente] = useState('')
  const [data, setData] = useState({
    nome: '',
    telefone: '',
    email: '',
    cnpj: '',
    endereco: ''
  })
  const [infosNotificacao, setInfosNotificacao] = useState({
    tipo: '',
    texto: ''
  })
  const [eEdicao, setEEdicao] = useState(false)  
  const [abrirNotificacao, setAbrirNotificacao] = useState(false)


  const valueInput = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleGetClientes = async () => {
    try {
      const resposta = await getClientes()
      setClientes(resposta)
    } catch (error) {
      console.log(error)
    }
  }

 async function handlePostCliente() {
  const resposta = await postCliente(data)
  setInfosNotificacao({
    tipo: resposta.success ? 'success' : 'error',
    texto: resposta.message
  })
  handleGetClientes()
 }

 async function handlePutCliente(id, body) {
  const resposta = await putCliente(id, body)
  setInfosNotificacao({
    tipo: resposta.success ? 'success' : 'error',
    texto: resposta.message
  })
 }

 async function handleDeleteCliente() {
  const resposta = await deleteCliente(idCliente)
  console.log(resposta)
  setModalDelete(false)
  handleGetClientes()
  setInfosNotificacao({
    tipo: resposta.success ? 'success' : 'error',
    texto: resposta.message
  })
  setAbrirNotificacao(true)
 }

 function handleEditarCliente(cliente) {
  setModalTaAberto(true)
  setEEdicao(true)
  setData({
    nome: cliente.nome,
    telefone: cliente.telefone,
    email: cliente.email,
    cnpj: cliente.cnpj,
    endereco: cliente.endereco
  })
  console.log(cliente)
 }

 function handleAbrirModalDelete(idCliente) {
  setModalDelete(true)
  setIdCliente(idCliente)
  console.log(idCliente)
 }

  useEffect(() => {
    handleGetClientes()
  }, [])

  return (
    <>
      <StylesCliente>
        <h2>Clientes</h2>
        <ul>
          <Button
            onClick={() => setModalTaAberto(true)}
            texto={"Adicionar Cliente"}
            variant='primary' />
          {clientes.length === 0 ? (<p>Carragando</p>) : (
            clientes.map((cliente) => (
              <Cliente
                key={cliente._id}
                id={cliente._id}
                nome={cliente.nome}
                telefone={cliente.telefone}
                email={cliente.email}
                cnpj={cliente.cnpj}
                endereco={cliente.endereco}
                handleAbrirModalDelete={handleAbrirModalDelete}
                handleEditarCliente={handleEditarCliente}
              />
            )
          ))}
        </ul>
      </StylesCliente>
      {/* MODAL DE CRIAR E EDITAR A TRANSAÇÃO  */}
      <Modal title={eEdicao ? 'Editar cliente' : 'Adicionar Cliente'} open={modalTaAberto} fechaModal={() => setModalTaAberto(false)}>
        <label htmlFor="">Nome</label>
        <input type="text" name="nome" value={eEdicao ? data.nome : ''} onChange={valueInput} />
        <label htmlFor="">Fone</label>
        <input type="text" name="telefone" value={eEdicao ? data.telefone : ''} onChange={valueInput} />
        <label htmlFor="">E-mail</label>
        <input type="text" name="email" value={eEdicao ? data.email : ''} onChange={valueInput} />
        <label htmlFor="">CNPJ</label>
        <input type="text" name="cnpj" value={eEdicao ? data.cnpj : ''} onChange={valueInput} />
        <label htmlFor="">Endereço</label>
        <input type="text" name="endereco" value={eEdicao ? data.endereco : ''} onChange={valueInput} />

        <button onClick={eEdicao ? handlePutCliente : handlePostCliente}>{eEdicao ? 'Salvar alterações' : 'ADICIONAR'}</button>
      </Modal>
      {/* MODAL - EXCLUIR A TRANSACAO */}
      <Modal open={modalDelete} title={'Excluir'} fechaModal={() => setModalDelete(false)}>
        <h3>Você deseja realmente excluir essa transação?</h3>
        <Button texto={'sim'} variant={'primary'} onClick={handleDeleteCliente} />
      </Modal>
      {
        abrirNotificacao && <Notificacao
          texto={infosNotificacao.texto}
          tipo={infosNotificacao.tipo}
          fecharNotificacao={() => setAbrirNotificacao(false)}
          open={abrirNotificacao}
        />
      }

     
    </>
  )
}


export default Clientes