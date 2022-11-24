import { get, post } from '../index'

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
      message: e,
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
      message: e,
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

    console.warn('body', body)

    if (!body.success) {
      throw body.message
    }

    return { response: body.response, message: body.message }
  } catch (e) {
    return {
      success: false,
      message: e,
      response: {},
    }
  }
}

export { getConfinamento, getConfinamentos, insertConfinamento }
