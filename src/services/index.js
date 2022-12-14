import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/v1/',
  // baseURL: 'https://matheuscogo.pythonanywhere.com/api/v1/',
})

const get = async (endpoint, headers, body) => {
  try {
    const { data } = await instance.get(endpoint)

    const { success } = data

    if (!success) {
      throw data
    }

    return data
  } catch (e) {
    console.error(e)
    return e
  }
}

const post = async (endpoint, headers, body) => {
  try {
    const { data } = await instance.post(endpoint, body, headers)

    const { success } = data

    if (!success) {
      throw data
    }

    return data
  } catch (e) {
    console.error(e.message)
    return e
  }
}

const put = async (endpoint, headers, body) => {
  try {
    const { data } = await instance.put(endpoint, body, headers)

    const { success } = data

    if (!success) {
      throw data
    }

    return data
  } catch (e) {
    console.error(e)
    return e
  }
}

const del = async (endpoint, headers, body) => {
  try {
    const { data } = await instance.delete(endpoint)

    const { success } = data

    if (!success) {
      throw data
    }

    return data
  } catch (e) {
    console.error(e)
    return e
  }
}

export { get, post, put, del }
