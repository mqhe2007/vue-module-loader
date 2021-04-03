import { App } from "@vue/runtime-core";
import IModuleUninstallerMap from "./interfaces/module-uninstaller-map";

const moduleUninstallerMap: IModuleUninstallerMap = {};
// 当模块加载后储存卸载程序
export function store(moduleName: string, uninstaller: () => void) {
  moduleUninstallerMap[moduleName] = uninstaller;
}
export function uninstall(app: App) {
  for (let moduleName in moduleUninstallerMap) {
    moduleUninstallerMap[moduleName](app);
  }
}
