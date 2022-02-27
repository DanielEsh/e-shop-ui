import { RefObject } from 'react';
export declare function useEventListener<T extends HTMLElement = HTMLDivElement>(eventName: keyof WindowEventMap | string, // string to allow custom event
handler: (event: Event) => void, element?: RefObject<T>): void;
