import { App } from "vue";
import { Context } from "./interfaces";

export default function(app: App, Vue: Context["Vue"]) {
  if (!Vue) {
    throw new Error(`[vue-module-loader]: use插件时必须传入Vue对象`);
  } else {
    if (!Vue.version?.startsWith("3")) {
      throw new Error(`[vue-module-loader]: 本插件仅适用于vue3`);
    } else {
      window[Symbol.for("___VML_CONTEXT___")] = {
        Vue,
      };
      if (app) {
        window[Symbol.for("___VML_CONTEXT___")]["app"] = app;
      }
    }
  }
}
export { useModule } from "./use-module";
export { uninstall, clear, listUnistaller } from "./uninstaller";
