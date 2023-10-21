import { useEffect, useState } from "react";
import { StylesCliente } from "./clientes.styles.js";
import Cliente from "../../components/Cliente/Cliente.jsx";
import { getClientes } from "../../service/api.js";
import Modal from './../../components/Modal/Modal';
import Button from './../../components/Button/Button';

const Clientes = () => {
  // const params = useParams()
  const [clientes, setClientes] = useState([]);
  const [modalTaAberto, setModalTaAberto] = useState(false)
  const [idCliente, setIdCliente] = useState()
  const [valorNome, setValorNome] = useState()
  const [valorTelefone, setValorTelefone] = useState()
  const [valorEmail, setValorEmail] = useState()
  const [valorCnpj, setValorCnpj] = useState()
  const [valorEndereco, setValorEndereco] = useState()
  const [eEdicao, setEEdicao] = useState(false)

  const handleGetClientes = async () => {
    try {
      const resposta = await getClientes()
      setClientes(resposta)
    } catch (error) {
      console.log(error)
    }
  }

  function handleEditarCliente(cliente) {
    setEEdicao(true)
    setValorNome(cliente.nome)
    setValorTelefone(cliente.telefone)
    setValorEmail(cliente.email)
    setValorCnpj(cliente.cnpj)
    setValorEndereco(cliente.endereco)
    console.log(cliente)
    setModalTaAberto(true)
  }

  function handlePutTransacao() {
    setEEdicao(false)
    setModalTaAberto(false)
    handleGetClientes()
  }



  // function handleAbrirModalDelete(id) {
  //   setIdCliente(id)
  //   setModalTaAberto(true)
  // }

  // function fechaModal() {
  //   setModalTaAberto(false)
  // }

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
                key={cliente.id}
                id={cliente.id}
                nome={cliente.nome}
                telefone={cliente.telefone}
                email={cliente.email}
                cnpj={cliente.cnpj}
                endereco={cliente.endereco}
                // handleAbrirModalDelete={handleAbrirModalDelete}
                handleEditarCliente={handleEditarCliente}
              />
            )
            ))}
        </ul>
      </StylesCliente>
      {/* MODAL DE CRIAR E EDITAR A TRANSAÇÃO  */}
      <Modal title={"Adicionar Clientes"} open={modalTaAberto} fechaModal={() => setModalTaAberto(false)}>

        <label htmlFor="">Nome</label>
        <input type="text" value={valorNome} onChange={(evento) => setValorNome(evento.target.value)} />
        <label htmlFor="">Fone</label>
        <input type="text" value={valorTelefone} onChange={(evento) => setValorTelefone(evento.target.value)} />
        <label htmlFor="">E-mail</label>
        <input type="text" value={valorEmail} onChange={(evento) => setValorEmail(evento.target.value)} />
        <label htmlFor="">CNPJ</label>
        <input type="text" value={valorCnpj} onChange={(evento) => setValorCnpj(evento.target.value)} />
        <label htmlFor="">Endereço</label>
        <input type="text" value={valorEndereco} onChange={(evento) => setValorEndereco(evento.target.value)} />

        {/* <button onClick={eEdicao ? handlePutTransacao : handleSalvarTransacao}>{eEdicao ? 'Salvar alterações' : 'ADICIONAR'}</button> */}
      </Modal>
    </>
  )
}


export default Clientes