/**
 * 模块卸载器
 * 当模块安装时会缓存卸载程序。
 */

import { Context, ModuleUninstallerMap } from "./interfaces";

const moduleUninstallerMap: ModuleUninstallerMap = {};

export default function (
  moduleName: string,
  uninstaller: (context: Context) => any
) {
  moduleUninstallerMap[moduleName] = uninstaller;
}
export function list() {
  return moduleUninstallerMap;
}
export async function uninstall(moduleName: string) {
  moduleUninstallerMap[moduleName](window[Symbol.for("___VML_CONTEXT___")]);
}
export async function clear() {
  for (let moduleName in moduleUninstallerMap) {
    moduleUninstallerMap[moduleName](window[Symbol.for("___VML_CONTEXT___")]);
  }
}
