import { App } from "@vue/runtime-core";

export default interface Module {
  new (): Module;
  name: string;
  create: (app: App) => void;
  unmount: (app: App) => void;
}
