import { App } from 'vue';
import Button from '@env/Button';
import Icon from '@env/icon';
import Battery from '@env/battery';
import Temperature from '@env/temperature';
import Humidity from '@env/humidity';
import Formaldehyde from '@env/formaldehyde';
import Indicator from '@env/indicator';
import Controller from '@env/controller';
const components = [
    Button,
    Icon,
    Battery,
    Temperature,
    Humidity,
    Formaldehyde,
    Indicator,
    Controller,
];

const install = (app:App) => {
    components.forEach(component=>{
        app.component(component.name, component)
    })
}

// 在使用组件库的时候可以使用createApp().use(xxx);
export default {
    install
}