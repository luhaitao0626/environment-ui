declare module '*.vue' {
    import type { DefineComponent,App } from 'vue';
    const component: DefineComponent & {install(app:App):vpid};
    export default component;
}