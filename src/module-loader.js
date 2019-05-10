export default (context) => function(moduleData) {
  if (typeof moduleData === 'object') {
    let promiseAll = []
    for (let moduleName in moduleData) {
      if (!window[moduleName]) {
        promiseAll.push(
          new Promise((resolve, reject) => {
            let script = document.createElement('script')
            script.src = moduleData[moduleName]
            script.onload = () => {
              window[moduleName](context)
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
    moduleData(context)
    return Promise.resolve()
  } else {
    return Promise.reject('参数错误')
  }
}
