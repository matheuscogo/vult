import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:5000/api/v1/confinamentos',
  baseURL: 'http://192.168.0.104:5000/api/v1/confinamentos',
});

const getConfinamento = async (id) => {
  return await instance
    .get(`/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log('Login: ', err));
};

const getConfinamentos = async () => {
  return await instance
    .get('/')
    .then((res) => res)
    .catch((err) => console.error(err));
};

const insertConfinamento = async (confinamento) => {
  return await instance.post('/insert', confinamento);
};

const updateConfinamento = async (confinamento) => {
  return await instance.put('/update/', confinamento);
};
const deleteConfinamento = async (id) => {
  return await instance.delete(`/delete/${id}`);
};

export { getConfinamento, getConfinamentos, insertConfinamento, updateConfinamento, deleteConfinamento };
