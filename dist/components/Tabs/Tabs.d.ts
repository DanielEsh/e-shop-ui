import { ReactNode } from 'react';
export declare type TabsProps = {
    children: ReactNode;
    direction?: 'vertical' | 'horizontal';
    defaultActiveTab: number | string;
    color?: 'primary' | 'secondary' | 'gray';
    onChange?: (index: number | string) => void;
};
export declare type ActiveTabIndicatorPropertiesTabType = {
    top: number;
    left: number;
    width: number;
    height: number;
};
export declare const TabsRoot: import("react").ForwardRefExoticComponent<TabsProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const Tabs: import("react").ForwardRefExoticComponent<TabsProps & import("react").RefAttributes<HTMLDivElement>> & {
    Bar: import("react").FC<import("@/components/Tabs/Bar").BarProps>;
    Tab: import("react").FC<{
        value: string | number;
        children: ReactNode;
        disabled?: boolean;
    }>;
    Panel: ({ value, children }: {
        value: any;
        children: any;
    }) => JSX.Element;
};
