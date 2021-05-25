import { App } from "vue";
import fireModule from "./fire-module";
import ModuleType from "./types/module-type";

export default function (app: App) {
  function loader(moduleOptions: ModuleType | string[]): Promise<void> {
    if ("install" in moduleOptions) {
      return fireModule(app, moduleOptions);
    } else {
      return new Promise((resolve, reject) => {
        let promises: Promise<void>[] = [];
        moduleOptions.forEach(moduleUrl => {
          import(/* @vite-ignore */ moduleUrl).then(module => {
            promises.push(fireModule(app, module.default));
          });
        });
        Promise.allSettled(promises).then(() => resolve());
      });
    }
  }
  return loader;
}
