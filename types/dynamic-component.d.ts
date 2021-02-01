import { Component } from 'vue'

export declare class DynamicComponent {
    /**
     * 创建动态组件
     * @param component 组件
     * @param position 插槽，默认GLOBAL
     */
    create(component: Component, position?: string): void;

    /**
     * 获取动态组件
     * @param name 组件名称
     * @param position 插槽，默认GLOBAL
     */
    obtain(name: string, position?: string): Component;

    /**
     * 删除动态组件方法
     * @param name 组件名称
     * @param position 插槽，默认GLOBAL
     */
    destroy(name: string, position?: string): void;
}
