import { createContext } from "./create-context";

/**
 * 使用上下文对象里的数据
 * @param key 上下文对象中的key
 * @returns 根据key获取的上下文对象中的值
 */
function useContext(key: string, instance: any): any {
  const context = createContext();
  if (instance) {
    context[key] = instance;
  }
  if (!key) {
    return context;
  } else {
    if (context[key] === undefined) {
      context[key] = null;
      console.warn(
        `[vue-module-loader]：上下文中不存在“${key}”，既然你要用，我先帮你占个坑（初始化为null）。`
      );
    }
    return context[key];
  }
}
export { useContext };
