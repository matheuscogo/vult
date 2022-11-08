import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:5000/api/v1/',
  baseURL: 'https://matheuscogo.pythonanywhere.com/api/v1/',
})

const get = async (endpoint, headers, body) => {
  try {
    const result = await instance.get(endpoint)

    const success = result.status === 200

    if (!success) {
      throw result
    }

    return result.data
  } catch (e) {
    console.error(e)
    return e
  }
}

const post = async (endpoint, headers, body) => {
  try {
    const result = await instance.post(endpoint, body)

    if (result.success) {
      throw result
    }

    console.warn(result)

    return result.response
  } catch (e) {
    console.error(e)
    return e
  }
}

const put = async (endpoint, headers, body) => {
  try {
    const result = await instance.put(endpoint, body)

    if (result.success) {
      throw result
    }

    console.warn(result)

    return result.response
  } catch (e) {
    console.error(e)
    return e
  }
}

const del = async (endpoint, headers, body) => {
  try {
    const result = await instance.del(endpoint)

    if (result.success) {
      throw result
    }

    console.warn(result)

    return result.response
  } catch (e) {
    console.error(e)
    return e
  }
}

export { get, post, put, del }
