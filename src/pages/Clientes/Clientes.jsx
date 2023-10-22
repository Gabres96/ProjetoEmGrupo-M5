import { useEffect, useState } from "react";
import { StylesCliente, Topo } from "./clientes.styles.js";
import Cliente from "../../components/Cliente/Cliente.jsx";
import { deleteCliente, getClientes, postCliente, putCliente } from "../../service/api.js";
import Modal from './../../components/Modal/Modal';
import Button from './../../components/Button/Button';
import Notificacao from './../../components/Notificacao/Notificacao';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [modalCriarCliente, setModalCriarCliente] = useState(false)
  const [modalEditarCliente, setModalEditarCliente] = useState(false)
  const [data, setData] = useState({
    nome: '',
    telefone: '',
    email: '',
    cnpj: '',
    endereco: ''
  })
  const [idCliente, setIdCliente] = useState('')
  const [infosNotificacao, setInfosNotificacao] = useState({
    tipo: '',
    texto: ''
  })
  const [modalDelete, setModalDelete] = useState(false)
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

  const handlePostCliente = async () => {   
    try {
      await postCliente(data)
      setModalCriarCliente(false)
      handleGetClientes()
      setInfosNotificacao({
        tipo: 'sucesso',
        texto: 'Cliente adicionado com sucesso'
      })
      handleGetClientes()
      setAbrirNotificacao(true)
      setModalCriarCliente(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleEditarCliente = async (cliente) => {
    setData({
      id: cliente.id,
      nome: cliente.nome,
      telefone: cliente.telefone,
      email: cliente.email,
      cnpj: cliente.cnpj,
      endereco: cliente.endereco
    })
    setIdCliente(cliente.id)
    setModalEditarCliente(true)
  }

  const handlePutCliente = async () => {
    try {
      await putCliente(idCliente, data)
      setModalEditarCliente(false)
      handleGetClientes()
      setInfosNotificacao({
        tipo: 'sucesso',
        texto: 'Cliente atualizado com sucesso'
      })
      handleGetClientes()
      setAbrirNotificacao(true)
      setModalEditarCliente(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteCliente = async () => {
    try {
      await deleteCliente(idCliente)
      setModalDelete(false)
      handleGetClientes()
      setInfosNotificacao({
        tipo: 'sucesso',
        texto: 'Cliente deletado com sucesso'
      })
      handleGetClientes()
      setAbrirNotificacao(true)
      setModalDelete(false)
    }catch (error) {
      console.log(error)
    }
  }

  const handleAbrirModalDelete = (id) => {
    setIdCliente(id)
    setModalDelete(true)
  }

  useEffect(() => {
    handleGetClientes()
  }, [])

  return (
    <>
    <Topo>
      <h2>Clientes</h2>
      <Button
      onClick={() => setModalCriarCliente(true)}
      texto={"Adicionar Cliente"}
      variant='primary' />
    </Topo>
      <StylesCliente>
        <ul>

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

      {/* MODAL DE CRIAR CLIENTE  */}
      <Modal title={'Adicionar Cliente'} open={modalCriarCliente} fechaModal={() => setModalCriarCliente(false)}>
        <label htmlFor="">Nome</label>
        <input type="text" name="nome" onChange={valueInput} />
        <label htmlFor="">Fone</label>
        <input type="fone" name="telefone" onChange={valueInput} />
        <label htmlFor="">E-mail</label> 
        <input type="email" name="email" onChange={valueInput} />
        <label htmlFor="">CNPJ</label>
        <input type="text" name="cnpj" onChange={valueInput} />
        <label htmlFor="">Endereço</label>
        <input type="text" name="endereco" onChange={valueInput} />

        <button onClick={handlePostCliente}>{'ADICIONAR'}</button>
      </Modal>
      {/* MODAL DE EDITAR CLIENTE  */}
      <Modal title={'Editar Cliente'} open={modalEditarCliente} fechaModal={() => setModalEditarCliente(false)}>
        <label htmlFor="">Nome</label>
        <input type="text" name="nome" defaultValue={data.nome} onChange={valueInput} />
        <label htmlFor="">Fone</label>
        <input type="text" name="telefone" defaultValue={data.telefone} onChange={valueInput} />
        <label htmlFor="">E-mail</label> 
        <input type="email" name="email" defaultValue={data.email} onChange={valueInput} />
        <label htmlFor="">CNPJ</label>
        <input type="text" name="cnpj" defaultValue={data.cnpj} onChange={valueInput} />
        <label htmlFor="">Endereço</label>
        <input type="text" name="endereco" defaultValue={data.endereco} onChange={valueInput} />

        <button onClick={handlePutCliente}>{'EDITAR'}</button>
      </Modal>
      <Modal open={modalDelete} title={'Excluir'} fechaModal={() => setModalDelete(false)}>
        <h3>Você deseja realmente excluir esse cliente?</h3>
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