import axios from "axios";

axios.defaults.baseURL = 'https://rest-api-codealong-01d46e3fe694.herokuapp.com'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true