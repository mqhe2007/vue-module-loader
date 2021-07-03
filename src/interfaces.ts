import { App, CreateAppFunction } from "vue";
export interface Context {
  // Vue全局对象
  Vue: {
    readonly createApp: CreateAppFunction<any>;
    readonly [propName: string]: any;
  };
  // Vue应用实例
  app: App;
}
export interface IModuleUninstallerMap {
  [propName: string]: (context: Context) => void;
}
export interface ModuleOptions {
  name: string;
  install: (context: Context) => any;
  uninstall: (context: Context) => any;
}
