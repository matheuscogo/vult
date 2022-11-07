import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:5000/api/v1/avisos',
  baseURL: 'http://192.168.0.104:5000/api/v1/avisos',
});

const geAviso = async (id) => {
  return await instance
    .get(`/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log('Login: ', err));
};

const getAvisos = async () => {
  return await instance
    .get('/')
    .then((res) => res)
    .catch((err) => console.error(err));
};

const separarMatriz = async (data) => {
  return await instance.put(`/separarMatriz`, data);
};

export { geAviso, getAvisos, separarMatriz };
