import { App } from "@vue/runtime-core";
import Module from "./interfaces/module";

export default async function (app: App, Module: Module): Promise<void> {
  try {
    const moduleInstance = new Module();
    await moduleInstance.create(app);
  } catch (error) {
    console.log(error);
  }
}
