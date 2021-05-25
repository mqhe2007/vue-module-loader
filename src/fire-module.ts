import { App } from "@vue/runtime-core";
import ModuleOptions from "./types/module-type";
import { store } from "./uninstaller";

export default function (
  app: App,
  moduleOptions: ModuleOptions
): Promise<void> {
  const installReturn = moduleOptions.install(app);
  if (!(installReturn instanceof Promise)) {
    store(moduleOptions.name, moduleOptions.uninstall);
    return Promise.resolve();
  }
  return installReturn.then(function () {
    store(moduleOptions.name, moduleOptions.uninstall);
  });
}
