import { get, post, del } from '../index'

const getConfinamento = async (id) => {
  try {
    const body = await get(`confinamentos/${id}`)

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

const getConfinamentos = async () => {
  try {
    const body = await get(`confinamentos`)

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

const insertConfinamento = async (confinamento) => {
  try {
    const customConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = await post('confinamentos/insert', customConfig, confinamento)

    if (!body.success) {
      throw body.message
    }

    return { response: body.response, message: body.message }
  } catch (e) {
    return {
      success: false,
      message: 'Erro: ' + e,
      response: {},
    }
  }
}

const deleteConfinamento = async (id) => {
  try {
    const body = await del(`confinamentos/delete/${id}`)
    console.warn(body)
    console.warn('body.message', body.message)
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

export {
  getConfinamento,
  getConfinamentos,
  insertConfinamento,
  deleteConfinamento,
}
