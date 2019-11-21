export default {
  namespaced: true,
  state: {
    GLOBAL: {}
  },
  mutations: {
    // 注册插槽组件
    create(state, { component, position = 'GLOBAL' }) {
      if (!component.name)
        return console.error('创建的动态组件必须设置name属性')
      if (!state[position]) {
        state[position] = {}
      }
      let componentName = component.name
      if (state[position][componentName])
        return console.error(
          `动态组件${componentName}在插槽位置${position}中已经存在，本次创建数据将被丢弃。`
        )
      state[position][componentName] = component
    },
    destroy(state, { name, position = 'GLOBAL' }) {
      if (!state[position])
        return console.error(
          `从动态组件插槽${position}删除组件${name}失败，插槽位置不存在，请检查插槽位置是否正确。`
        )
      if (!state[position][name])
        return console.error(
          `要删除的组件${name}不在插槽${position}中，请检查组件名称和插槽位置是否正确。`
        )
      delete state[position][name]
    }
  }
}
