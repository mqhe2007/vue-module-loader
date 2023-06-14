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
  if(instance){
    window[Symbol.for("___VML_CONTEXT___")][key] = instance;
  }
  if (!key) {
    return window[Symbol.for("___VML_CONTEXT___")];
  } else {
    const target = window[Symbol.for("___VML_CONTEXT___")][key];
    if (target === undefined)
      throw new Error(`[vue-module-loader]：上下文中不存在“${key}”`);
    return target;
  }
}
export { useContext };
