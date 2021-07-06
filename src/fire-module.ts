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
      console.log("样式表加载完成");
      resolve();
    };
    style.onerror = () => {
      console.log("样式表加载失败");
      reject();
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
    console.log(`[vue-module-loader]: 开始加载模块「${moduleData.name}」...`);
    if (moduleHostUrl) {
      await loadStyle(moduleData, moduleHostUrl);
    }
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
