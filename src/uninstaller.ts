/**
 * 模块卸载器
 * 当模块安装时会缓存卸载程序。
 */
import { App } from "@vue/runtime-core";
import IModuleUninstallerMap from "./types/module-uninstaller-map-type";

const moduleUninstallerMap: IModuleUninstallerMap = {};

export default function(moduleName: string, uninstaller: (app: App) => void) {
  moduleUninstallerMap[moduleName] = uninstaller;
}
export function listUnistaller() {
  return moduleUninstallerMap;
}
export async function uninstall(moduleName: string) {
  const app = (window as any)[Symbol.for("___VUE_APP___")];
  moduleUninstallerMap[moduleName](app);
}
export async function clear() {
  const app = (window as any)[Symbol.for("___VUE_APP___")];
  for (let moduleName in moduleUninstallerMap) {
    moduleUninstallerMap[moduleName](app);
  }
}
