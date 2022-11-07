import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:5000/api/v1/parametros',
  baseURL: 'http://localhost:5000/api/v1/parametros',
})

const getParametros = async () => {
  return await instance
    .get('/')
    .then((response) => response)
    .catch((error) => console.error(error))
}

const getParametro = async (id) => {
  return await instance
    .get(`/${id}`)
    .then((response) => response)
    .catch((error) => console.error(error))
}

// Registros não precisam ser inseridos/alterados/deletados
// const insertRegistro = async (registro) => {
//   return INSERT_REGISTRO(registro);
// };

// const updateRegistro = async (registro) => {
//   return UPDATE_REGISTRO(registro);
// };
// const deleteRegistro= async (id) => {
//   return DELETE_REGISTRO(id);
// };

export { getParametros, getParametro }
// export { getRegistro, getRegistros, insertRegistro, updateRegistro, deleteRegistro };
