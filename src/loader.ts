import { App } from "vue";
import fireModule from "./fire-module";
import Module from "./interfaces/module";

export default function (app: App) {
  async function loader(moduleOptions: Module | string[]): Promise<void> {
    if ("create" in moduleOptions) {
      await fireModule(app, moduleOptions);
    } else {
      const moduleImports = moduleOptions.map(
        item => import(/* @vite-ignore */ item)
      );
      for await (let moduleExport of moduleImports) {
        if (!moduleExport.default.constructor) {
          continue;
        }
        await fireModule(app, moduleExport.default);
      }
    }
  }
  return loader;
}
