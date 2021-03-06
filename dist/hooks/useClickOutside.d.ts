import { MutableRefObject } from 'react';
declare type Handler = (event: MouseEvent) => void;
export declare function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: MutableRefObject<T>, handler: Handler, mouseEvent?: 'mousedown' | 'mouseup'): void;
export {};
