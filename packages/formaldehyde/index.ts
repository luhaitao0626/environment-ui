import { App, createApp } from 'vue';
import Formaldehyde from './src/formaldehyde.vue';

Formaldehyde.install =(app:App) :void =>{
    app.component(Formaldehyde.name, Formaldehyde);
}

type IWithInstall<T> = T & { install(app:App):void};
const _Formaldehyde: IWithInstall<typeof Formaldehyde> = Formaldehyde;
export default _Formaldehyde;