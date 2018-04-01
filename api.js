import axios from 'axios'

export const fetchItem = (id) => {
  return axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
      return Promise.resolve(res.data)
    })
}
