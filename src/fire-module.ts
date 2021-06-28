import ModuleType from "./types/module-type";
import uninstallCache from "./uninstaller";

export default async function(moduleData: ModuleType): Promise<void> {
  const app = (window as any)[Symbol.for("___VUE_APP___")];
  let installReturn;
  try {
    console.log(`[vue-module-loader]: 开始加载模块「${moduleData.name}」……`);
    installReturn = await moduleData.install(app);
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
