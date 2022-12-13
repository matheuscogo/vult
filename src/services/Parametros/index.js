import { get, put } from '../index'

const getParametros = async () => {
  try {
    const body = await get(`parametros`)

    if (!body.success) {
      throw body.message
    }

    return body.response
  } catch (e) {
    console.error(e)
    return e
  }
}

const updateParametros = async (parametros) => {
  try {
    const customConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = await put(`parametros/update/`, customConfig, parametros)

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

export { getParametros, updateParametros }
