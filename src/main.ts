import { App } from "@vue/runtime-core";
import { version } from "../package.json";
import useModule from "./use-module";
export default function(app: App, vue: any) {
  if (!vue?.h) {
    (window as any)[Symbol.for("___VML_OK___")] = false;
    throw new Error("[vue-module-loader]: 插件配置错误，请传入Vue全局对象");
  }
  if (!vue?.version?.startsWith("3")) {
    (window as any)[Symbol.for("___VML_OK___")] = false;
    throw new Error(`[vue-module-loader]: 当前插件v${version}仅适用于vue3`);
  }
  (window as any)[Symbol.for("___VUE___")] = vue;
  (window as any)[Symbol.for("___VUE_APP___")] = app;
  (window as any)[Symbol.for("___VML_OK___")] = true;
}
export { useModule };
export { uninstall, clear, listUnistaller } from "./uninstaller";
