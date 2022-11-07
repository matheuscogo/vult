import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:5000/api/v1/inseminacao',
  baseURL: 'http://192.168.0.104:5000/api/v1/inseminacao',
});

const getInseminacao = async (id) => {
  return await instance
    .get(`/${id}`)
    .then((res) => res)
    .catch((err) => console.error(err));
};

const getInsemiacoes = async () => {
  return await instance
    .get('/')
    .then((res) => res)
    .catch((err) => console.error(err));
};

const insertInseminacao = async (inseminacao) => {
  return await instance.post('/insert', inseminacao);
};

const updateIseminacao = async (inseminacao) => {
  return await instance.put('/update/', inseminacao);
};
const deleteInseminacao = async (id) => {
  return await instance.delete(`/delete/${id}`);
};

export { getInseminacao, getInsemiacoes, insertInseminacao, updateIseminacao, deleteInseminacao };
