import {get, post} from '../utils/request'
const API_URL = 'https://test.youbaobao.xyz:18081'
const APP_ID = 'wx83b29962cc9df518'
const SECRET = 'e7283d84acf191c73a54040e340ddc0a'

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

/**
 * 获取openId 应该由后台请求微信接口返回
 * @param code
 */
export function getOpenId(code) {
  return get(`${API_URL}/openId/get`, {
    appId: APP_ID,
    secret: SECRET,
    code: code
  })
}

// 用户注册
export function register(openId, userInfo) {
  return post(`${API_URL}/user/register`, {
    openId,
    platform: mpvuePlatform,
    ...userInfo
  })
}

// 关键词搜索
export function search(params) {
  return get(`${API_URL}/book/search`, params)
}

// 热门搜索
export function hotSearch() {
  return get(`${API_URL}/book/hot-search`)
}

// 获取图书详情
export function bookDetail(params) {
  return get(`${API_URL}/book/detail`, params)
}

// 保存用户评分
export function bookRankSave(params) {
  return get(`${API_URL}/book/rank/save`, params)
}

// 获取图书目录
export function bookContent(params) {
  return get(`${API_URL}/book/contents`, params)
}

// 获取图书是否在书架
export function bookInShelf(params) {
  return get(`${API_URL}/book/shelf/get`, params)
}

// 加入书架
export function bookShelfSave(params) {
  return get(`${API_URL}/book/shelf/save`, {
    shelf: JSON.stringify(params)
  })
}

// 移除书架
export function bookShelfRemove(params) {
  return get(`${API_URL}/book/shelf/remove`, {
    shelf: JSON.stringify(params)
  })
}

// 获取搜索后图书列表
export function searchList(params) {
  return get(`${API_URL}/book/search-list`, params)
}

// 获取全部分类
export function bookCategory() {
  return get(`${API_URL}/book/category/list/v2`)
}

// 获取用户加入天数
export function userDay(params) {
  return get(`${API_URL}/user/day`, params)
}
