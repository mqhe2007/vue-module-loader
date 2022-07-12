export interface Context {
  [propName: string]: any;
}
export interface ModuleUninstallerMap {
  [propName: string]: (context: Context) => void;
}
export interface ModuleOptions {
  name: string;
  install: (context: Context) => any;
  uninstall: (context: Context) => any;
}
