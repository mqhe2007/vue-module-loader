import {PluginFunction} from 'vue';
import {DynamicComponent} from './dynamic-component'
import {EventBus} from './event-bus'

interface VueModuleLoader extends PluginFunction<any> {
}

declare const vueModuleLoader: VueModuleLoader;
export default vueModuleLoader;

declare module 'vue/types/vue' {
    interface Vue {
        $eventBus: EventBus;
        $dynamicComponent: DynamicComponent;
        $moduleLoader: (module: Function | object) => Promise<any>;
    }
}
