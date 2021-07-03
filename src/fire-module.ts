import { Context, ModuleOptions } from "./interfaces";
import uninstallCache from "./uninstaller";

export default async function(moduleData: ModuleOptions): Promise<void> {
  const context: Context = window[Symbol.for("___VML_CONTEXT___")];
  let installReturn;
  try {
    console.log(`[vue-module-loader]: 开始加载模块「${moduleData.name}」...`);
    installReturn = await moduleData.install(context);
    if (moduleData.uninstall)
      uninstallCache(moduleData.name, moduleData.uninstall);
    console.log(`[vue-module-loader]: 模块「${moduleData.name}」加载完成`);
  } catch (error) {
    console.error(
      `[vue-module-loader]: 模块「${moduleData.name}」加载错误`,
      error
    );
    installReturn = error;
  }

  return installReturn;
}
