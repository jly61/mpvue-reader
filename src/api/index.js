import {get} from '../utils/request'
const API_URL = 'https://test.youbaobao.xyz:18081'

export function getHomeData(params) {
  return get(`${API_URL}/book/home/v2`, params)
}
