import {get} from '../utils/request'
const API_URL = 'https://test.youbaobao.xyz:18081'

export function getHomeData(params) {
  return get(`${API_URL}/book/home/v2`, params)
}

export function recommend() {
  return get(`${API_URL}/book/home/recommend/v2`)
}

export function freeRead() {
  return get(`${API_URL}/book/home/freeRead/v2`)
}

export function hotBook() {
  return get(`${API_URL}/book/home/hotBook/v2`)
}
