import React from 'react';
import { Dropdown, DropdownMenu, DropdownItem } from "../index";

const Default = (): JSX.Element => {

    const content = (): JSX.Element => {
        return (
            <DropdownMenu>
                <>
                    <DropdownItem header>
                        Header
                    </DropdownItem>
                    <DropdownItem>
                        Item 1
                    </DropdownItem>
                    <DropdownItem>
                        Item 2
                    </DropdownItem>
                    <DropdownItem>
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
