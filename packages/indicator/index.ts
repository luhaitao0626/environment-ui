import { App } from 'vue';
import Indicator from './src/indicator.vue';

Indicator.install = (app:App):void => {
    app.component(Indicator.name, Indicator); // 注册全局组件
}

// 在老类型Button上加一个install，使得其可以在crateApp上注册
type IWithInstall<T> = T & {install(app:App):void};

const _Indicator:IWithInstall<typeof Indicator> = Indicator; // vue.shim.d.ts中加install是为了Button能在这儿付给_Button

export default _Indicator;