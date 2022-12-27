import { App } from 'vue';
import Humidity from './src/humidity.vue';

Humidity.install = (app:App):void => {
    app.component(Humidity.name, Humidity);
}
type IWithInstall<T> = T & {install(app:App):void};

const _Humidity: IWithInstall<typeof Humidity> = Humidity;

export default _Humidity