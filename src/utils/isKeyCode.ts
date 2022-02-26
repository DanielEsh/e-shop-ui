export type Keys = Record<KeyboardKeyValues, string>

export type KeyboardKeyValues =
    | 'ESC'
    | 'LEFT'
    | 'RIGHT'
    | string;

export const keyList: Keys = {
  ESC: 'Escape',
  RIGHT: 'ArrowRight',
  LEFT: 'ArrowLeft',
}
/**
 * determines if a particular keyboard key has been pressed
 */
export const isKeyCode = (code, keys: Array<KeyboardKeyValues>): boolean => {
  return keys.some((keyValue) => keyList[keyValue] === code || keyValue === code)
}
