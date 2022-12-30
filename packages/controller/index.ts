import { App } from 'vue';
import Controller from './src/controller.vue';

Controller.install = (app: App): void => {
    app.component(Controller.name, Controller);
}
type IWithInstall<T> = T & { install(app: App): void }

const _Controller: IWithInstall<typeof Controller> = Controller;

export default _Controller