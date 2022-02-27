import { Ref, RefCallback } from 'react';
export declare const useMergedRef: <T>(...refs: Ref<T>[]) => (instance: T) => void;
