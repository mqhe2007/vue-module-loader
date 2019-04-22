export default function(moduleData) {
  if (typeof moduleData === 'object') {
    let promiseAll = []
    for (let moduleName in moduleData) {
      if (!window[moduleName]) {
        promiseAll.push(
          new Promise((resolve, reject) => {
            let script = document.createElement('script')
            script.src = moduleData[moduleName]
            script.onload = () => {
              window[moduleName](this)
              resolve()
            }
            script.onerror = () => {
              reject('创建模块脚本元素失败。')
            }
            document.body.appendChild(script)
          })
        )
      }
    }
    return Promise.all(promiseAll)
  } else if (typeof moduleData === 'function'){
    moduleData(this)
  } else {
    console.error('参数错误')
  }
}
