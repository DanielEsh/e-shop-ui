import React, {useState} from 'react';
import { Popover } from '../index';
import { Button } from '../../Button';

const Default = (): JSX.Element => {
    const [popoverVisible, setPopoverVisible] = useState<boolean>(false);

    return (
        <>
            <Button onClick={ () => setPopoverVisible(!popoverVisible) }>
                Click me
            </Button>
            <Popover 
                isVisible={ popoverVisible }
            />
        </>
    )
}

export default Default;
