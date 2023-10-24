import axios from "axios";

const api = axios.create({
  baseURL: 'https://apidatadynamo.onrender.com/',
  // baseURL: 'http://localhost:3000/',
  headers: {
    'Content-type': 'application/json',
  }
})

export const getClientes = async () => {
  const resposta = await api.get('/cliente')
  return (resposta.data)
}

export const postCliente = async (body) => {
  try {
    const resposta = await api.post('/cliente/criar', body)
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

export const putCliente = async (idCliente, body) => {
  try {
    const resposta = await api.put(`/cliente/edit/${idCliente}`, body)
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

export const loginUsuario = async (payload) => {
  try {
    await api.post('/login', payload)
    return true
  } catch (error) {
    return false
  }
}

export default api