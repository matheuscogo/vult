import { get, post, put, del } from '../index'

const getMatriz = async (id) => {
  try {
    const body = await get(`matrizes/${id}`)

    if (!body.success) {
      throw body.message
    }

    return body.response
  } catch (e) {
    return {
      success: false,
      message: 'Erro: ' + e,

      response: {},
    }
  }
}
const getMatrizes = async () => {
  try {
    const body = await get('matrizes')

    if (!body.success) {
      throw body.message
    }

    return body.response
  } catch (e) {
    return {
      success: false,
      message: 'Erro: ' + e,

      response: {},
    }
  }
}

const insertMatriz = async (matriz) => {
  try {
    const customConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = await post('matrizes/insert', customConfig, matriz)

    if (!body.success) {
      throw body.message
    }

    return body
  } catch (e) {
    return {
      success: false,
      message: 'Erro: ' + e,
      response: {},
    }
  }
}

const updateMatriz = async (id, matriz) => {
  try {
    const body = await put(`matrizes/update/${id}`, matriz)

    if (!body.success) {
      throw body.message
    }

    return body
  } catch (e) {
    return {
      success: false,
      message: 'Erro: ' + e,
      response: {},
    }
  }
}

const deleteMatriz = async (id) => {
  try {
    const body = await del(`matrizes/delete/${id}`)

    if (!body.success) {
      throw body.message
    }

    return body
  } catch (e) {
    return {
      success: false,
      message: 'Erro: ' + e,

      response: {},
    }
  }
}

export { insertMatriz, getMatriz, getMatrizes, updateMatriz, deleteMatriz }
