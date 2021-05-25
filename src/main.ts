import { App } from "vue";
import loader from "./loader";
import { clear, uninstall } from "./uninstaller";
export default function (app: App, options = {}) {
  app.config.globalProperties.$loader = {
    install: loader(app),
    uninstall: uninstall(app),
    clear: clear(app),
  };
}
