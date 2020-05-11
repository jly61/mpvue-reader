// 微信相关方法

/**
 * 获取用户授权
 * @param auth 授权类型, 如userInfo,userLocation
 * @param onSuccess
 * @param onFail
 */
export function getSetting(auth, onSuccess, onFail) {
  mpvue.getSetting({
    success (res) {
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
      let { userInfo } = res
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
