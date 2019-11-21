export default function(store) {
  return {
    /** 添加动态组件方法 */
    create(component, position) {
      if (typeof component !== 'object')
        return console.error(`动态组件create方法至少接受一个组件对象作为参数。`)
      store.commit('dynamicComponent/create', {
        component,
        position
      })
    },
    /** 删除动态组件方法 */
    destroy(name, position) {
      if (typeof name !== 'string')
        return console.error('动态组件destroy方法至少接收一个组件名称参数。')
      store.commit('dynamicComponent/destroy', {
        name,
        position
      })
    }
  }
}
