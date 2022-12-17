import Button from '@env/Button';
import Icon from '@env/icon';
import { App } from 'vue';

const components = [
    Button,
    Icon
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