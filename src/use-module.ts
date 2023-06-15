import { createContext } from "./create-context";
import bootModule from "./boot-module";
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
  const existingContext =
    window[Symbol.for("___VML_CONTEXT___")] || createContext(ctx);
  let bootResult;
  if (typeof moduleData === "object") {
    bootResult = await bootModule(moduleData);
  } else if (typeof moduleData === "string") {
    if (!existingContext.Vue)
      throw new Error("[vue-module-loader]: 上下文对象缺少Vue对象");
    const res = await fetch(moduleData);
    const moduleString = await res.text();
    const moduleCode = moduleString.replace(
      /^(var|const).+function/,
      "return function"
    );
    const moduleStringFun = Function(`return function(vue){${moduleCode}}`)();
    const moduleDataFromUrl = moduleStringFun(existingContext.Vue);
    bootResult = await bootModule(
      moduleDataFromUrl,
      moduleData.match(/\S*\//)[0]
    );
  }
  return bootResult
}

export { useModule };
