import { get, post } from '../index'

const getInseminacao = async (id) => {
  try {
    const body = await get(`inseminacoes/${id}`)

    if (!body.success) {
      throw body.message
    }

    return body.response
  } catch (e) {
    return {
      success: false,
      message: e,
      response: {},
    }
  }
}

const getInseminacoes = async () => {
  try {
    const body = await get(`inseminacoes`)

    if (!body.success) {
      throw body.message
    }

    return body.response
  } catch (e) {
    return {
      success: false,
      message: e,
      response: {},
    }
  }
}

const insertInseminacao = async (inseminacao) => {
  try {
    const customConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    console.warn('inseminacoes', inseminacao)
    const body = await post('inseminacoes/insert', customConfig, inseminacao)

    if (!body.success) {
      throw body.message
    }

    return body.response
  } catch (e) {
    console.error(e)
    return {
      success: false,
      message: e,
      response: {},
    }
  }
}

// const getMatrizes = async () => {
//   return await instance
//     .get('/')
//     .then((res) => res)
//     .catch((err) => console.error(err))
// }

// const updateMatriz = async (matriz) => {
//   return await instance.put('/update/', matriz)
// }
// const deleteMatriz = async (id) => {
//   return await instance.delete(`/delete/${id}`)
// }

export { getInseminacao, getInseminacoes, insertInseminacao }
