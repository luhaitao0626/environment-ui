import { App, createApp } from 'vue';
import Temperature from './src/temperature.vue';

Temperature.install =(app:App) :void =>{
    app.component(Temperature.name, Temperature);
}

type IWithInstall<T> = T & { install(app:App):void};
const _Temperature: IWithInstall<typeof Temperature> = Temperature;
export default _Temperature;