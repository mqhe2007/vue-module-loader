/**
 * 模块卸载器
 * 当模块安装时会缓存卸载程序。
 */
import { App } from "@vue/runtime-core";
import IModuleUninstallerMap from "./types/module-uninstaller-map-type";

const moduleUninstallerMap: IModuleUninstallerMap = {};

export function store(moduleName: string, uninstaller: (app: App) => void) {
  moduleUninstallerMap[moduleName] = uninstaller;
}
export function uninstall(app: App) {
  return function(moduleName: string) {
    moduleUninstallerMap[moduleName](app);
  };
}
export function clear(app: App) {
  return function() {
    for (let moduleName in moduleUninstallerMap) {
      moduleUninstallerMap[moduleName](app);
    }
  };
}
