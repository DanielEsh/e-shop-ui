import React from 'react';
import classNames from "classnames";

import {
    TabLabel,
} from "./Tabs.styles";

export type TabProps = {
    isActive?: boolean,
    onClick?: () => void,
    children: React.ReactNode,
    isDisabled?: Boolean,
}

const Tab: React.FC<TabProps> = ({
                 children,
                 isActive,
                 onClick,
                 isDisabled= false,
             }) => {

    const classes = classNames({
        '_active': isActive,
        '_disabled': isDisabled
    });

    const handleClick = () => {
        if (!isDisabled) {
            onClick();
        }
    }

    return (
        <li>
            <TabLabel
                className={classes}
                onClick={handleClick}>
                {children}
            </TabLabel>
        </li>
    );
};

export default Tab;
