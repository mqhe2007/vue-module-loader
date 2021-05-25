import { App } from "@vue/runtime-core";

export default interface ModuleOptions {
  name: string;
  install: (app: App) => any;
  uninstall: (app: App) => void;
}
