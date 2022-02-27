/// <reference types="react" />
import { ActiveTabIndicatorPropertiesTabType } from '@/components/Tabs/Tabs';
export declare type TabsContextType = {
    activeTab: number | string;
    activeTabIndicatorProperties: any;
    onChange: (index: number | string) => void;
    direction: 'vertical' | 'horizontal';
    color: 'primary' | 'secondary' | 'gray';
    onChangeIndicator: (val: ActiveTabIndicatorPropertiesTabType) => void;
    onChangeActivaTab: (val: string | number) => void;
};
export declare const TabsContext: import("react").Context<TabsContextType>;
