import { Ref } from 'react';
export declare function useForkRef(refA?: AnyRef, refB?: AnyRef): (CallbackRef) | null;
declare type HTMLElementOrNull = HTMLElement | null;
declare type CallbackRef = (node: HTMLElementOrNull) => void;
declare type AnyRef = Ref<HTMLElement | Element>;
export {};
