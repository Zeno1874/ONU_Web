/// <reference types="vite/client" />
declare module '*.vue' {
    import { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}


declare type Recordable<T = any> = Record<string, T>;

declare type ClassName = { [className: string]: any } | ClassName[] | string;
