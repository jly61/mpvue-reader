function createFly() {
  const Fly = require('flyio/dist/npm/wx')
  if (mpvuePlatform === 'wx') {
    return new Fly()
  }
  return null
}

function handleError(err) {
  console.log(err)
}

export function get(url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.get(url, params).then(response => {
        if (response && response.data && response.data.error_code === 0) {
          resolve(response)
        } else {
          reject(response)
        }
      }).catch(err => {
        handleError(err)
        reject(err)
      })
    })
  }
}

export function post(url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.post(url, params).then(respose => {
        console.log(respose)
        resolve(respose)
      }).catch(err => {
        handleError(err)
        reject(err)
      })
    })
  }
}
