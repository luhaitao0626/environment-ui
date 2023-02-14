import { App, createApp } from 'vue';
import Button from './src/button.vue';

Button.install = (app:App):void => {
    app.component(Button.name, Button); // 注册全局组件
}

// 在老类型Button上加一个install，使得其可以在crateApp上注册
type IWithInstall<T> = T & {install(app:App):void};

const _Button:IWithInstall<typeof Button> = Button; // vue.shim.d.ts中加install是为了Button能在这儿付给_Button

export default _Button;

// createApp({}).use(_Button); // Button类型上没有install方法，不能传，要包装成_Button才可以
