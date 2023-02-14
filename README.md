1. 安装lerna
npm install lerna -g

2. yarn

3. 初始化
npm init -y

4. 创建packages文件夹

5. learn创建package.json
lerna init

6. lerna.json加内容
"npmClient":"yarn"

7. lerna create @env/button

8. 修改packages/button/lib => src   button.js => button.vue

9. button/下建一个index.ts 导出内容
import Button from './src/button'; ts不识别button.vue文件

(npm 不支持 workspaces，所以之前安装依赖都要使用 yarn。) 不知道现在支不支持

monorepo的项目结构，一般都会配合 yarn workspace 来管理包的依赖。

```
yarn add typescript -W    or
yarn add typescript --ignore-workspace-root-check
```

npx tsc --init 创建了一个tsconfig.json

```json5
{
  "compilerOptions": {
    "target": "ESNext",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "jsx": "preserve",                                /* Specify what JSX code is generated. */
    "module": "ESNext",                                /* Specify what module code is generated. */
    "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
    "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "skipLibCheck": true                                 /* Skip 
  }
}


```

- 根目录建一个typings文件夹
- typings/vue-shim.d.ts
```ts
// 老写法
import type {defineComponent} from 'vue';
declare module '*.vue' {
    const component: ReturnType<typeof defineComponent>;
    export default component;
}
// 新式写法
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent;
    export default component;
}
```

- yarn add vue@next -S -W

Button.install = () => {

}
_Button  => Button with install方法
将Button包装成一个有install方法的新类型，_Button


Button/index.ts
```ts
import { App, createApp } from 'vue';
import Button from './src/button.vue';

Button.install = (app:App):void => {
    app.component(Button.name, Button); // 注册全局组件
}

// 在老类型Button上加一个install，使得其可以在crateApp上注册
type IWithInstall<T> = T & {install(app:App):void};

const _Button:IWithInstall<typeof Button> = Button; // vue.shim.d.ts中加install是为了Button能在这儿付给_Button

export default _Button;

// createApp({}).use(_Button); // Button类型上没有install方法，不能传，要包装成_Button才可以

```
Button/src/button.vue
```ts
<template>
    <button>按钮</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:'EButton',
    
})
</script>
```

vue.shim.d.ts
```ts
declare module '*.vue' {
    import type { DefineComponent,App } from 'vue';
    const component: DefineComponent & {install(app:App):vpid};
    export default component;
}
```

- 创建一个全局的x-ui来统一导出所有的组件，整合组件的作用
lerna create env-ui
如何引入子项目？不要../button  ../icon， 
这是monorepo每一个子项目都会放到（软链）到node_modules下，所以在yarn install生成软链后，直接 import button from '@env/button' ,这样按照包的方式引入

env-ui/index.ts
```ts
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
```

- 创建看效果的网址=> 文档=> md => webpack

```ts
createApp(App).use(EnvUI).mount('#app');
```


## 问题
/website/ 解析.vue文件后
.vue文件中script 如果设置了 lang='ts', 那么webpack打包会出问题
删掉lang="ts" 后就好了，但是.vue文件中就不能使用ts语法了....

(加一个babel转化typescript的插件)
- yarn add @babel/plugin-transform-typescript -W -D  

babel.config.js中 + overrides
```js
module.exports = {
    presets:[
        '@babel/preset-env',
        '@babel/preset-typescript'
    ],
    overrides: [
        {
            test: /\.vue$/,
            plugins: [
                "@babel/transform-typescript"
            ]
        }
    ]
}
```