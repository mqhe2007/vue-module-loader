import { print } from '../tool/index'
export default function(Vue) {
  return function(moduleData) {
    if (typeof moduleData === 'object') {
      /** 通过模块清单加载模块 */
      let promiseAll = []
      for (let moduleName in moduleData) {
        if (!window[moduleName]) {
          promiseAll.push(
            new Promise((resolve, reject) => {
              let script = document.createElement('script')
              script.src = moduleData[moduleName]
              script.onload = () => {
                if (window[moduleName]) {
                  typeof window[moduleName] === 'function'
                    ? window[moduleName].call(this, Vue)
                    : window[moduleName].default.call(this, Vue)
                  print(moduleName, '模块加载完毕')
                } else {
                  console.warn(
                    moduleName,
                    '模块加载失败，请检查模块资源是否成功加载。已跳过。'
                  )
                }
                resolve()
              }
              script.onerror = () => {
                console.warn(moduleName, ': 创建模块脚本元素失败。已跳过。')
                resolve()
              }
              document.body.appendChild(script)
            })
          )
        }
      }
      return Promise.all(promiseAll)
    } else if (typeof moduleData === 'function') {
      /** 通过模块函数加载模块 */
      moduleData.call(this, Vue)
    } else {
      console.error('模块加载方法只接受模块列表对象或者模块函数对象作为参数。')
    }
  }
}
