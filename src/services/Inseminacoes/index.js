import { get } from '../index'

const getInseminacao = async (id) => {
  try {
    const body = await get(`inseminacoes/${id}`)
    return body
  } catch (e) {
    console.error(e)
    return e
  }
}
const getInseminacoes = async () => {
  try {
    const body = await get(`inseminacoes`)
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

export { getInseminacao, getInseminacoes }
