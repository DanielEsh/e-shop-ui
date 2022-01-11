import React from 'react';
import { Dropdown, DropdownMenu, DropdownItem } from "../index";

const Default = (): JSX.Element => {

    const content = (): JSX.Element => {
        return (
            <DropdownMenu>
                <>
                    <DropdownItem 
                        header
                        tabIndex="0"
                        dataKey="0"
                    >
                        Header
                    </DropdownItem>
                    <DropdownItem 
                        tabIndex="0"
                        dataKey="1"
                    >
                        Item 1
                    </DropdownItem>
                    <DropdownItem 
                        tabIndex="0"
                        dataKey="2"
                    >
                        Item 2
                    </DropdownItem>
                    <DropdownItem 
                        tabIndex="0"
                        dataKey="3"
                    >
                        Item 3
                    </DropdownItem>
                    <DropdownItem disabled>
                        Disabled Item
                    </DropdownItem>
                </>
            </DropdownMenu>
        );
    };

    return (
        <>
            <Dropdown menu={ content() }>
                dropdown element
            </Dropdown>
        </>
    );
};

export default Default;
