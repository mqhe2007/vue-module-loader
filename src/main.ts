import { App } from "vue";
import loader from "./loader";
export default function (app: App, options = {}) {
  app.config.globalProperties.$loader = loader(app);
}
