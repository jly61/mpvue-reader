// 微信相关方法

import {getOpenId} from '../api'

/**
 * 获取用户授权
 * @param auth 授权类型, 如userInfo,userLocation
 * @param onSuccess
 * @param onFail
 */
export function getSetting(auth, onSuccess, onFail) {
  mpvue.getSetting({
    success(res) {
      if (res.authSetting[`scope.${auth}`]) {
        onSuccess(res)
      } else {
        onFail(res)
      }
    },
    fail(res) {
      console.log(res) // 直接抛出异常
    },
    // 接口调用结束的回调函数（调用成功、失败都会执行）
    complete() {
    }
  })
}

/**
 * 授权成功后获取用户信息
 * @param onSuccess
 * @param onFail
 */
export function getUserInfo(onSuccess, onFail) {
  mpvue.getUserInfo({
    success(res) {
      let {userInfo} = res
      if (userInfo) {
        onSuccess(userInfo)
      } else {
        onFail(res)
      }
    }
  })
}

/**
 * 缓存用户信息
 * @param key 键
 * @param data 值
 */
export function setStorageSync(key, data) {
  mpvue.setStorageSync(key, data)
}

export function getStorageSync(key) {
  return mpvue.getStorageSync(key)
}

export function getUserOpenId(callback) {
  mpvue.login({
    success(res) {
      if (res.code) {
        getOpenId(res.code).then(res2 => {
          const {data: {data: {openid}}} = res2
          setStorageSync('openId', openid)
          callback(openid)
        }).catch(err => {
          console.log(err)
        })
      } else {
        console.log(`error: ` + res)
      }
    },
    fail(res) {
      console.log(res) // 抛出异常
    }
  })
}

// 显示正在加载
export function showLoading(title) {
  mpvue.showLoading({
    title
  })
}

export function hideLoading() {
  mpvue.hideLoading()
}

// 消息提示框
export function showToast(title, duration) {
  mpvue.showToast({
    title,
    duration
  })
}

// 动态设置当前页面标题
export function setNavigationBarTitle(title) {
  mpvue.setNavigationBarTitle({
    title
  })
}
