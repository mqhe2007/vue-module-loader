import { Context } from "./interfaces";
export function createContext(ctx: Context = {}): Context {
  if (!window[Symbol.for("___VML_CONTEXT___")]) {
    // 创建上下文对象
    window[Symbol.for("___VML_CONTEXT___")] = ctx;
  } else {
    // 合并上下文对象
    window[Symbol.for("___VML_CONTEXT___")] = Object.assign(
      window[Symbol.for("___VML_CONTEXT___")],
      ctx
    );
  }
  return window[Symbol.for("___VML_CONTEXT___")];
}
