import { useEffect, useState } from "react"
import Button from "../../components/Button/Button"
import Contrato from "../../components/Contrato/Contrato"
import { Topo, StylesContratos } from "./contratos.styles"
import { deleteContrato, getContratos, postContrato, putContrato } from "../../service/apiContrato"
import Modal from "../../components/Modal/Modal"
import { getClientes } from "../../service/api"
import Notificacao from "../../components/Notificacao/Notificacao"


export const Contratos = () => {
  const [contratos, setContratos] = useState([])
  const [clientes, setClientes] = useState([])
  const [idContrato, setIdContrato] = useState('')
  const [modalEditarContrato, setModalEditarContrato] = useState(false)
  const [modalCriarContrato, setModalCriarContrato] = useState(false)
  const [abrirNotificacao, setAbrirNotificacao] = useState(false)
  const [infosNotificacao, setInfosNotificacao] = useState({
    tipo: '',
    texto: ''
  })
  const [modalDelete, setModalDelete] = useState(false)
  const [data, setData] = useState({
    clienteRef: '',
    equipe: '',
    status: '',
    dt_inicio: '',
    dt_fim: '',
    valor: '',
  })

  // const valueInput = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleGetContratos = async () => {
    try {
      const resposta = await getContratos()
      setContratos(resposta)
    } catch (error) {
      console.log(error)
    }
  }

  const handleGetClientes = async () => {
    try {
      const resposta = await getClientes(); // Supondo que resposta seja um array de objetos com informações dos clientes
      const nomesClientes = resposta.map(cliente => cliente.nome);
      setClientes(nomesClientes); // Define o estado com a lista de nomes de clientes
    } catch (error) {
      console.log(error);
    }
  }

  const handlePostContratos = async () => {
    try {
      await postContrato(data)
      setModalCriarContrato(false)
      handleGetContratos()
      setInfosNotificacao({
        tipo: 'sucesso',
        texto: 'Contrato adicionado com sucesso'
      })
      handleGetContratos()
      setAbrirNotificacao(true)
      setModalCriarContrato(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleEditarContrato = async (contrato) => {
    setData({
      id: contrato.id,
      clienteRef: contrato.clienteRef,
      equipe: contrato.equipe,
      status: contrato.status,
      dt_inicio: contrato.dt_inicio,
      dt_fim: contrato.dt_fim,
      valor: contrato.valor
    })
    setIdContrato(contrato.id)
    setModalEditarContrato(true)
  }

  const handlePutContrato = async () => {
    try {
      const resposta = await putContrato(idContrato, data);
      console.log(resposta); // Exiba a resposta da API no console para depuração
      setModalEditarContrato(false);
      handleGetContratos();
      setInfosNotificacao({
        tipo: 'sucesso',
        texto: 'Contrato atualizado com sucesso'
      });
      setAbrirNotificacao(true);
      setModalEditarContrato(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteContrato = async () => {
    try {
      await deleteContrato(idContrato)
      setModalDelete(false)
      handleGetContratos()
      setInfosNotificacao({
        tipo: 'sucesso',
        texto: 'Contrato deletado com sucesso'
      })
      handleGetContratos()
      setAbrirNotificacao(true)
      setModalDelete(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAbrirModalDelete = (id) => {
    setIdContrato(id)
    setModalDelete(true)
  }

  useEffect(() => {
    handleGetContratos()
    handleGetClientes()
  }, [])

  return (
    <>
      <Topo>
        <h2>Contratos</h2>
        <Button
          onClick={() => setModalCriarContrato(true)}
          texto={"Adicionar Contrato"}
          variant='primary'
        />
      </Topo>
      <StylesContratos>
        <ul>
          {contratos.length === 0 ? (<p>Carragando</p>) : (
            contratos.map((contrato) => (
              <Contrato
                key={contrato._id}
                id={contrato._id}
                clienteRef={contrato.clienteRef}
                equipe={contrato.equipe}
                status={contrato.status}
                dt_inicio={contrato.dt_inicio}
                dt_fim={contrato.dt_fim}
                valor={contrato.valor}
                handleEditarContrato={handleEditarContrato}
                handleAbrirModalDelete={handleAbrirModalDelete}
              />
            )
            ))}
        </ul>
      </StylesContratos>
      {/* MODAL DE CRIAR CONTRATO  */}
      <Modal title={'Adicionar Contrato'} open={modalCriarContrato} fechaModal={() => setModalCriarContrato(false)}>
        <label htmlFor="">Clientes</label>
        <select
          id="clienteRef"
          value={data.clienteRef}
          onChange={(e) => setData({ ...data, clienteRef: e.target.value })}
        >
          <option value="" selected >Selecione um cliente</option>
          {clientes.map((nome, index) => (
            <option key={index} value={nome}>
              {nome}
            </option>
          ))}
        </select>
        <label htmlFor="">Equipe</label>
        <textarea value={data.equipe} onChange={(e) => setData({ ...data, equipe: e.target.value })} />
        <label htmlFor="">Status</label>
        <label>
          <input type="radio" name="status" value="Ativo" onChange={(e) => setData({ ...data, status: e.target.value })} />
          Ativo
        </label>
        <label>
          <input type="radio" name="status" value="Inativo" onChange={(e) => setData({ ...data, status: e.target.value })} />
          Inativo
        </label>
        <label htmlFor="">Data de inicio</label>
        <input type="date" name="dt_inicio" onChange={(e) => setData({ ...data, dt_inicio: e.target.value })} />
        <label htmlFor="">Data de término</label>
        <input type="date" name="dt_fim" onChange={(e) => setData({ ...data, dt_fim: e.target.value })} />
        <label htmlFor="">Valor</label>
        <input type="number" name="valor" onChange={(e) => setData({ ...data, valor: e.target.value })} />
        <button onClick={handlePostContratos}>{'ADICIONAR'}</button>
      </Modal>
      {/* MODAL DE EDITAR CLIENTE  */}
      <Modal title={'Editar Contrato'} open={modalEditarContrato} fechaModal={() => setModalEditarContrato(false)}>
        <label htmlFor="clienteRef">Clientes</label>
        <select
          id="clienteRef"
          name="clienteRef"
          value={data.clienteRef}
          onChange={handleInputChange}
        >
          <option value=''>{data.clienteRef}</option>
          {clientes.map((nome, index) => (
            <option key={index} value={nome}>
              {nome}
            </option>
          ))}
        </select>


        <label htmlFor="equipe">Equipe</label>
        <textarea name="equipe" value={data.equipe} onChange={handleInputChange} />

        <label htmlFor="status">Status</label>
        <label>
          <input
            type="radio"
            name="status"
            value="Ativo"
            checked={data.status === 'Ativo'} // Use 'checked' para selecionar o status correto
            onChange={handleInputChange}
          />
          Ativo
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="Inativo"
            checked={data.status === 'Inativo'} // Use 'checked' para selecionar o status correto
            onChange={handleInputChange}
          />
          Inativo
        </label>

        <label htmlFor="dt_inicio">Data de início</label>
        <input type="date" name="dt_inicio" value={data.dt_inicio} onChange={handleInputChange} />

        <label htmlFor="dt_fim">Data de término</label>
        <input type="date" name="dt_fim" value={data.dt_fim} onChange={handleInputChange} />

        <label htmlFor="valor">Valor</label>
        <input type="number" name="valor" value={data.valor} onChange={handleInputChange} />

        <button onClick={handlePutContrato}>{'EDITAR'}</button>
      </Modal>
      {/* MODAL DE DELETAR CLIENTE  */}
      <Modal open={modalDelete} title={'Excluir'} fechaModal={() => setModalDelete(false)}>
        <h3>Você deseja realmente excluir esse cliente?</h3>
        <Button texto={'sim'} variant={'primary'} onClick={handleDeleteContrato} />
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
