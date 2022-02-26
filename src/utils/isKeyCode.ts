export type Keys = Record<KeyboardKeyValues, string>

export type KeyboardKeyValues =
    | 'ESC'
    | 'LEFT'
    | 'RIGHT'
    | 'UP'
    | 'DOWN'
    | string;

export const keyList: Keys = {
  ESC: 'Escape',
  RIGHT: 'ArrowRight',
  LEFT: 'ArrowLeft',
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
}
/**
 * determines if a particular keyboard key has been pressed
 */
export const isKeyCode = (code, keys: Array<KeyboardKeyValues>): boolean => {
  return keys.some((keyValue) => keyList[keyValue] === code || keyValue === code)
}
