import { RefObject } from 'react';
import { Placement } from '@floating-ui/react-dom';
import { Offset } from '../components/Tooltip';
export declare type OptionsType = {
    placement?: Placement;
    offset: Offset;
    arrow?: RefObject<HTMLElement>;
    isVisible?: boolean;
};
export declare const usePopover: (options?: OptionsType) => {
    styles: {
        position: import("@floating-ui/react-dom").Strategy;
        top: string | number;
        left: string | number;
    };
    reference: (node: Element | import("@floating-ui/core").VirtualElement) => void;
    floating: (node: HTMLElement) => void;
    update: () => void;
    refs: {
        reference: import("react").MutableRefObject<Element>;
        floating: import("react").MutableRefObject<HTMLElement>;
    };
    arrowStyles: {
        top: string | number;
        left: string | number;
    };
};
