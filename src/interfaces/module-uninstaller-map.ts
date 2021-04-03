import { App } from "@vue/runtime-core";

export default interface IModuleUninstallerMap {
  [propName: string]: (app: App) => void;
}
