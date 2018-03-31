import axios from 'axios'

export const fetchPosts = (id) => {
  return axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => Promise.resolve(res.data.data))
}
