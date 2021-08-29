import React from 'react';
import classNames from "classnames";

import {
    TabsRoot,
    TabsContainer
} from "./Tabs.styles";


export type TabsBarProps = {
    theme?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark',
    children?: React.ReactNode,
    direction?: 'horizontal' | 'vertical',
}

const TabsBar: React.FC<TabsBarProps> = ({
    theme= 'primary',
    direction= 'horizontal',
    children
}) => {

    const rootClassName = classNames( `color-${theme}`)

    return (
        <TabsRoot>
            <TabsContainer
                className={ rootClassName }
                direction={ direction }
            >
                {children}
            </TabsContainer>
        </TabsRoot>
    );
};

export default TabsBar;
