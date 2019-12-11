export default function() {
  let events = {}
  return {
    /**
     * 发射事件
     * @param {string} eventName 事件名称
     * @param {any} payload 事件载荷
     */
    emit(eventName, payload) {
      if (!events[eventName])
        return console.warn(
          `${eventName}事件触发了，但是没有监听者，什么都不会发生。`
        )
      for (let func of events[eventName].values()) {
        func(payload)
      }
    },
    /** 事件监听 */
    on(eventName, handler) {
      if (typeof handler === 'function') {
        if (!events[eventName]) events[eventName] = new Set()
        events[eventName].add(handler)
      }
    },
    /** 取消事件监听 */
    off(eventName, handler) {
      if (!handler)
        return console.warn(`取消监听必须传入已被监听的事件处理函数`)
      events[eventName].delete(handler)
    },
    /** 清理事件总线 */
    clear() {
      events = {}
    },
    /** 获取当前事件总线详情 */
    getEvents() {
      return events
    }
  }
}
