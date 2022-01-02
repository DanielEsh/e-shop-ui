import { usePopper } from 'react-popper';

export type Direction = [
    'top-start',
    'top',
    'top-end',
    'bottom-start',
    'bottom',
    'bottom-end',
    'right-start',
    'right',
    'right-end',
    'left-start',
    'left',
    'left-end',
]

export type OptionsType = {
    placement?: any,
    offsetX?: number,
    offsetY?: number,
    arrow: HTMLElement,
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const usePopover = (
    reference: HTMLElement,
    popper: HTMLElement,
    options?: OptionsType
) => {
    const { styles, attributes } = usePopper(reference, popper, {
        placement: options.placement,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [options.offsetY, options.offsetX],
                },
            },
            {
                name: 'arrow',
                options: {
                    element: options?.arrow,
                },
            },
        ],
    });

    return {
        styles,
        attributes,
    }
};
