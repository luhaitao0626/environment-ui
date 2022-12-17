import { createApp } from "vue";
import App from './App.vue';
import EnvUI from 'env-ui';

const app = createApp(App);
app.use(EnvUI);
console.log("app",app);
app.mount('#app');
