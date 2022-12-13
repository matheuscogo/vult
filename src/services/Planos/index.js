import { get, del } from '../index'

const getPlano = async (id) => {
  try {
    const body = await get(`planos/${id}`)

    if (!body.success) {
      throw body.message
    }

    return body.response
  } catch (e) {
    console.error(e)
    return e
  }
}

const getPlanos = async () => {
  try {
    const body = await get(`planos`)

    if (!body.success) {
      throw body.message
    }

    return body.response
  } catch (e) {
    console.error(e)
    return e
  }
}

const deletePlano = async (id) => {
  try {
    const body = await del(`planos/delete/${id}`)

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

export { getPlano, getPlanos, deletePlano }
