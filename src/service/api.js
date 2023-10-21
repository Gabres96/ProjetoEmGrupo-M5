import axios from "axios";

const api = axios.create({
  baseURL: 'https://apidatadynamo.onrender.com',
  headers: {
    'Content-type': 'application/json',
  }
})

export const getClientes = async () => {
  const resposta = await api.get('/cliente')
  console.log(resposta.data)
  return (resposta.data)
}

export const postCliente = async (body) => {
  try {
    const resposta = await api.post('/put/cliente', body)
    console.log(resposta.data)
    return resposta.data
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.data.message,
        success: error.response.data.success,
      }
    } else {
      return {
        message: 'erro inesperado',
      }
    }
  }
}


export const putCliente = async ( idCliente, body) => {
  try {
    const resposta = await api.put(`/cliente/editar/${idCliente}`, body)
    return resposta.data
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.data.message,
        success: error.response.data.success,
      }
    } else {
      return {
        message: 'erro inesperado',
      }
    }
  }
}

export const deleteCliente = async (idCliente) => {
  try {
    const resposta = await api.delete(`/cliente/delete/${idCliente}`)
    return resposta.data
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.data.message,
        success: error.response.data.success,
      }
    } else {
      return {
        message: 'erro inesperado',
      }
    }
  }
}
export default api