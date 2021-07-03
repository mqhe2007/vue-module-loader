/**
 * 模块卸载器
 * 当模块安装时会缓存卸载程序。
 */

import { Context, IModuleUninstallerMap } from "./interfaces";

const moduleUninstallerMap: IModuleUninstallerMap = {};

export default function(
  moduleName: string,
  uninstaller: (context: Context) => any
) {
  moduleUninstallerMap[moduleName] = uninstaller;
}
export function listUnistaller() {
  return moduleUninstallerMap;
}
export async function uninstall(moduleName: string) {
  const app = (window as any)[Symbol.for("__GLOBAL_VUE_APP__")];
  moduleUninstallerMap[moduleName](app);
}
export async function clear() {
  const app = (window as any)[Symbol.for("__GLOBAL_VUE_APP__")];
  for (let moduleName in moduleUninstallerMap) {
    moduleUninstallerMap[moduleName](app);
  }
}
