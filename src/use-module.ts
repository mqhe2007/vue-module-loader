import { createContext } from "./create-Context";
import fireModule from "./fire-module";
import { Context, ModuleOptions } from "./interfaces";
/**
 * 使用模块
 * @param moduleData 模块数据，可以是模块定义对象或者是模块资源url。
 * @param ctx 上下文对象，如果不传，则使用默认上下文对象。
 */
async function useModule(
  moduleData: ModuleOptions,
  ctx?: Context
): Promise<void>;
async function useModule(moduleData: string, ctx?: Context): Promise<void>;
async function useModule(moduleData: any, ctx?: Context): Promise<void> {
  const existingContext = window[Symbol.for("___VML_CONTEXT___")];
  if (!existingContext) {
    createContext(ctx);
  }
  if (typeof moduleData === "object") {
    return await fireModule(moduleData);
  } else if (typeof moduleData === "string") {
    if (!existingContext.Vue) throw new Error("[vue-module-loader]: 上下文对象缺少Vue对象");
    const res = await fetch(moduleData);
    const moduleString = await res.text();
    const moduleCode = moduleString.replace("const", "return");
    const moduleStringFun = Function(`return function(vue){${moduleCode}}`)();
    const moduleDataFromUrl = moduleStringFun(existingContext.Vue);
    return await fireModule(moduleDataFromUrl, moduleData.match(/\S*\//)[0]);
  }
}

export { useModule };
