import { App } from "vue";
import Filter from './src/filter.vue';

Filter.install = (app: App): void => {
    app.component(Filter.name, Filter);
}

type IWithInstall<T> = T & { install(app: App): void }

const _Filter: IWithInstall<typeof Filter> = Filter;

export default _Filter;