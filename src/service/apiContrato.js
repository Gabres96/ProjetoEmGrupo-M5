import axios from "axios";

const apiContrato = axios.create({
  baseURL: 'https://apidatadynamo.onrender.com/',
  // baseURL: 'http://localhost:3000/',
  headers: {
    'Content-type': 'application/json',
  }
})

export const getContratos = async () => {
  const resposta = await apiContrato.get('/contrato')
  console.log(resposta.data)
  return (resposta.data)
}

export const postContrato = async (body) => {
  try {
    const resposta = await apiContrato.post('/contrato/criar', body)
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

export const putContrato = async (idContrato, body) => {
  try {
    const resposta = await apiContrato.put(`/contrato/editar/${idContrato}`, body)
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

export const deleteContrato = async (idContrato) => {
  try {
    const resposta = await apiContrato.delete(`/contrato/delete/${idContrato}`)
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

export default apiContrato