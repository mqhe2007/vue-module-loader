import { App } from "vue";
import { Context } from "./interfaces";
export function install(app: App, ctx: Context) {
  if (!app.version?.startsWith("3")) {
    throw new Error(`[vue-module-loader]: 仅适用于vue3`);
  } else {
    // 创建全局VML上下文对象
    window[Symbol.for("___VML_CONTEXT___")] = {
      app,
      ...ctx,
    }
  }
}
