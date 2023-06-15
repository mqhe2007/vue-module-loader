import { createContext } from "./create-context";

/**
 * 使用上下文对象里的数据
 * @param key 上下文对象中的key
 * @returns 根据key获取的上下文对象中的值
 */
function useContext(key: string, instance: any): any {
  if (!window[Symbol.for("___VML_CONTEXT___")]) {
    createContext();
  }
  if (instance) {
    window[Symbol.for("___VML_CONTEXT___")][key] = instance;
  }
  if (!key) {
    return window[Symbol.for("___VML_CONTEXT___")];
  } else {
    if (window[Symbol.for("___VML_CONTEXT___")][key] === undefined) {
      window[Symbol.for("___VML_CONTEXT___")][key] = null;
      console.warn(
        `[vue-module-loader]：上下文中不存在“${key}”，既然你要用，我先帮你占个坑（初始化为null）。`
      );
    }
    return window[Symbol.for("___VML_CONTEXT___")][key];
  }
}
export { useContext };
