import { App } from "vue";
import { createContext } from "./create-Context";
import { Context } from "./interfaces";
export function install(app: App, ctx: Context) {
  if (!app.version?.startsWith("3")) {
    throw new Error(`[vue-module-loader]: 仅适用于vue3`);
  } else {
    createContext({
      app,
      ...ctx,
    });
  }
}
