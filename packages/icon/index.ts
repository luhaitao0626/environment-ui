import { App, createApp } from 'vue';
import Icon from './src/icon.vue';

Icon.install = (app:App):void => {
    app.component(Icon.name, Icon); // 注册全局组件
}

// 在老类型Button上加一个install，使得其可以在crateApp上注册
type IWithInstall<T> = T & {install(app:App):void};

const _Icon:IWithInstall<typeof Icon> = Icon; // vue.shim.d.ts中加install是为了Button能在这儿付给_Button

export default _Icon;

// createApp({}).use(_Button); // Button类型上没有install方法，不能传，要包装成_Button才可以
