import fireModule from "./fire-module";
import { Context, ModuleOptions } from "./interfaces";
/**
 * 使用模块
 * @param moduleData 模块数据，可以是模块定义对象或者是模块资源url.
 * @param Vue 全局Vue对象，可以是模块定义对象或者是模块资源url.
 */
async function useModule(
  moduleData: ModuleOptions,
  Vue?: Context["Vue"]
): Promise<void>;
async function useModule(
  moduleData: string,
  Vue?: Context["Vue"]
): Promise<void>;
async function useModule(moduleData: any, Vue?: Context["Vue"]): Promise<void> {
  if (!window[Symbol.for("___VML_CONTEXT___")]) {
    if (!Vue) {
      throw new Error(
        "[vue-module-loader]: 未use插件时使用useModule方法请在第二个参数传入Vue全局对象"
      );
    } else {
      window[Symbol.for("___VML_CONTEXT___")] = { Vue };
    }
  }
  if (typeof moduleData === "object") {
    return await fireModule(moduleData);
  } else if (typeof moduleData === "string") {
    const res = await fetch(moduleData);
    const moduleString = await res.text();
    const moduleCode = moduleString.replace("var", "return");
    const moduleStringFun = Function(`return function(vue){${moduleCode}}`)();
    const moduleDataFromUrl = moduleStringFun(
      window[Symbol.for("___VML_CONTEXT___")].Vue
    );
    return await fireModule(moduleDataFromUrl, moduleData.match(/\S*\//)[0]);
  }
}

export { useModule };
