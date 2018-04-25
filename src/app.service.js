import axios from 'axios'

axios.defaults.baseURL = 'http://198.211.121.193:8000/api'

const appService = {
  getPosts () {
    return new Promise((resolve) => {
    axios.get('/games')
    .then(response => {
      console.log(response.data)
      resolve(response.data)
    })
  })
  }
}

export default appService
