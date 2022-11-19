import { get, post, put, del } from '../index'

const getMatriz = async (id) => {
  try {
    const body = await get(`matrizes/${id}`)

    if (!body.success) {
      throw body.message
    }

    return body.response
  } catch (e) {
    console.error(e)
    return e
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
    console.error(e)
    return e
  }
}

const insertMatriz = async (matriz) => {
  try {
    const body = await post('matrizes/insert', matriz)

    if (!body.success) {
      throw body.message
    }

    return body.response
  } catch (e) {
    console.error(e)
    return e
  }
}

const updateMatriz = async (id, matriz) => {
  try {
    const body = await put(`matrizes/update/${id}`, matriz)

    if (!body.success) {
      throw body.message
    }

    return body.response
  } catch (e) {
    console.error(e)
    return e
  }
}

const deleteMatriz = async (id) => {
  try {
    const body = await del(`matrizes/delete/${id}`)

    if (!body.success) {
      throw body.message
    }

    return body.response
  } catch (e) {
    console.error(e)
    return e
  }
}

export { insertMatriz, getMatriz, getMatrizes, updateMatriz, deleteMatriz }
