import { ReactNode, FC } from 'react';
declare type TabProps = {
    value: string | number;
    children: ReactNode;
    disabled?: boolean;
};
export declare const Tab: FC<TabProps>;
export {};
