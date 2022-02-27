export declare type Keys = Record<KeyboardKeyValues, string>;
export declare type KeyboardKeyValues = 'ESC' | 'LEFT' | 'RIGHT' | 'UP' | 'DOWN' | string;
export declare const keyList: Keys;
/**
 * determines if a particular keyboard key has been pressed
 */
export declare const isKeyCode: (code: any, keys: Array<KeyboardKeyValues>) => boolean;
