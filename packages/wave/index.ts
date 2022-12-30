import { App } from "vue";
import Wave from './src/wave.vue';

Wave.install = (app:App) : void => {
    app.component(Wave.name, Wave);
}

type IWithInstall<T> = T & {install(app:App):void}

const _Wave : IWithInstall<typeof Wave> = Wave;

export default _Wave;