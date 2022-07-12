import { Context } from "./interfaces";
export function createContext(ctx: Context = {}): void {
  // 创建全局VML上下文对象
  window[Symbol.for("___VML_CONTEXT___")] = ctx;
}
