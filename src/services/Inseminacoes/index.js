import { get, post, del } from '../index'

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
      message: 'Erro: ' + e,
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
      message: 'Erro: ' + e,
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
    const body = await post('inseminacoes/insert', customConfig, inseminacao)

    if (!body.success) {
      throw body.message
    }

    return body
  } catch (e) {
    console.error(e)
    return {
      success: false,
      message: 'Erro: ' + e,
      response: {},
    }
  }
}
const deleteInseminacao = async (id) => {
  try {
    const body = await del(`inseminacoes/delete/${id}`)

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

export { getInseminacao, getInseminacoes, insertInseminacao, deleteInseminacao }
