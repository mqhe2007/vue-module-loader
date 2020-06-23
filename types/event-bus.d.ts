export declare class EventBus {
    /**
     * 触发事件
     * @param eventName 事件名称
     * @param payload 事件载荷
     */
    emit(eventName: string, payload: any): void;

    /**
     * 监听事件
     * @param eventName 事件名称
     * @param handler 事件处理器
     */
    on(eventName: string, handler: Function): void;


    /**
     * 取消监听事件
     * @param eventName 事件名称
     * @param handler 事件处理器
     */
    off(eventName: string, handler: Function): void;

    /**
     * 清理事件总线
     */
    clear(): void;

    /**
     * 获取事件总线详情
     */
    getEvents(): object;
}
