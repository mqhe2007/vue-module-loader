import { App, CreateAppFunction } from "vue";

export interface Context {
  app?: App;
  createApp?: CreateAppFunction<Element>;
  http?: any;
  moduleExpose?: {
    [propName: string]: any;
  };
  [propName: string]: any;
}
export interface ModuleUninstallerMap {
  [propName: string]: (context: Context) => void;
}
export interface ModuleOptions {
  name: string;
  install: (context: Context) => any;
  uninstall?: (context: Context) => any;
}
