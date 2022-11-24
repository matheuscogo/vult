import { get } from '../index'

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
      message: e,
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

// const insertMatriz = async (matriz) => {
//   return await instance.post('/insert', matriz)
// }

// const updateMatriz = async (matriz) => {
//   return await instance.put('/update/', matriz)
// }
// const deleteMatriz = async (id) => {
//   return await instance.delete(`/delete/${id}`)
// }

export { getAviso, getAvisos }
