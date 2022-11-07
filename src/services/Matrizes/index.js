import { get } from '../index'

const getMatriz = async (id) => {
  try {
    const body = await get(`matrizes/${id}`)
    return body
  } catch (e) {
    console.error(e)
    return e
  }
}
const getMatrizes = async () => {
  try {
    const body = await get(`matrizes`)
    return body.data
  } catch (e) {
    console.error(e)
    return e
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

export { getMatriz, getMatrizes }
