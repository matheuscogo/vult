import { get, put, del } from '../index'

const getAviso = async (id) => {
  try {
    const body = await get(`avisos/${id}`)

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

const getAvisos = async () => {
  try {
    const body = await get(`avisos`)

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

const separateMatriz = async (separate) => {
  try {
    const customConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = await put('avisos/separarMatriz', customConfig, separate)

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

const deleteAviso = async (id) => {
  try {
    const body = await del(`avisos/delete/${id}`)

    if (!body.success) {
      throw body
    }

    return body
  } catch (e) {
    return e
  }
}

export { getAviso, getAvisos, separateMatriz, deleteAviso }
