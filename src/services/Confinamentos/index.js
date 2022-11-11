import { get } from '../index'

const getConfinamento = async (id) => {
  try {
    const body = await get(`confinamentos/${id}`)
    return body
  } catch (e) {
    console.error(e)
    return e
  }
}
const getConfinamentos = async () => {
  try {
    const body = await get(`confinamentos`)
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

export { getConfinamento, getConfinamentos }
