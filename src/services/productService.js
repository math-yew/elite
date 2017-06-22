import axios from 'axios';
let config = require('./config');

export function getProducts() {
  return axios.get(config.getApi)
  .then((res) => res.data.data.product)
}

export function editProducts(info) {
  return axios({
    method: 'post',
    url: config.postApi,
    params: info
  })
  .then(res => console.log('res: ',res))
}
