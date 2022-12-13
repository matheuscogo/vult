import { get } from '../index'

const getRegistro = async (id) => {
  try {
    const body = await get(`registros/${id}`)

    if (!body.success) {
      throw body.message
    }

    return body.response
  } catch (e) {
    console.error(e)
    return e
  }
}

const getRegistros = async () => {
  try {
    const body = await get(`registros`)

    if (!body.success) {
      throw body.message
    }

    return body.response
  } catch (e) {
    console.error(e)
    return e
  }
}

export { getRegistro, getRegistros }
