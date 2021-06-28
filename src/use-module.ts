import fireModule from "./fire-module";
import ModuleType from "./types/module-type";
async function useModule(moduleData: ModuleType): Promise<void>;
async function useModule(moduleData: string): Promise<void>;
async function useModule(moduleData: any): Promise<void> {
  if (!(window as any)[Symbol.for("___VML_OK___")])
    throw new Error(
      "[vue-module-loader]: 使用useModule方法出错。插件未安装或安装失败，请检查。"
    );
  if (typeof moduleData == "object") {
    return await fireModule(moduleData);
  } else if (typeof moduleData == "string") {
    const Vue = (window as any)[Symbol.for("___VUE___")];
    const res = await fetch(moduleData);
    const moduleString = await res.text();
    const moduleCode = moduleString.replace("var", "return");
    const moduleStringFun = Function(`return function(vue){${moduleCode}}`)();
    const moduleDataFromUrl = moduleStringFun(Vue);
    return await fireModule(moduleDataFromUrl);
  }
}

export default useModule;
