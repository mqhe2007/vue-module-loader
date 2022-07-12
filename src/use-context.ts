/**
 * 使用上下文对象里的数据
 * @param key 上下文对象中的key
 * @returns 根据key获取的上下文对象中的值
 */
function useContext(key: string): any {
  if (!window[Symbol.for("___VML_CONTEXT___")])
    throw new Error(
      "[vue-module-loader]: 请先使用app.use方法安装vue-module-loader插件或使用useModule方法加载一个模块。"
    );
  const target = window[Symbol.for("___VML_CONTEXT___")][key];
  if (target === undefined)
    throw new Error(`[vue-module-loader]：上下文中不存在“${key}”`);
  return target;
}
export { useContext };
