import { Context, ModuleOptions } from "./interfaces";
import uninstallCache from "./uninstaller";
function loadStyle(moduleData, moduleHostUrl): Promise<void> {
  return new Promise((resolve, reject) => {
    const style = document.createElement("link");
    style.id = moduleData.name;
    style.rel = "stylesheet";
    style.crossOrigin = "anonymous";
    style.href = moduleHostUrl + "style.css";
    style.onload = () => {
      resolve();
    };
    style.onerror = () => {
      resolve();
    };
    document.head.append(style);
  });
}
export default async function(
  moduleData: ModuleOptions,
  moduleHostUrl?: string
): Promise<void> {
  const context: Context = window[Symbol.for("___VML_CONTEXT___")];
  let installReturn;
  try {
    console.log(`[vue-module-loader]: 模块「${moduleData.name}」开始加载...`);
    if (moduleHostUrl) {
      await loadStyle(moduleData, moduleHostUrl);
    }
    installReturn = await moduleData.install(context);
    console.log(`[vue-module-loader]: 模块「${moduleData.name}」加载完成。`);
    // 缓存模块卸载方法，记录已加载模块清单
    uninstallCache(moduleData.name, moduleData.uninstall);
  } catch (error) {
    console.error(
      `[vue-module-loader]: 模块「${moduleData.name}」加载错误！`,
      error
    );
    installReturn = error;
  }

  return installReturn;
}
