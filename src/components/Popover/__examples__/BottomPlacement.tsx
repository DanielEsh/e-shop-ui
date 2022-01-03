import React, {useState, useRef, useEffect} from 'react';

import {Popover} from '../index';
import {Button} from '../../Button';

const Default = (): JSX.Element => {
    const customRootElement = useRef(null);
    const [popoverVisible, setPopoverVisible] = useState<boolean>(true);
    const [node, setNode] = useState(null);

    const renderPopoverContent = (): JSX.Element => {
        return (
            <div>
                content tooltip
            </div>
        )
    };

    useEffect(() => {
        setNode(customRootElement.current)
    }, []);

    return (
        <>
            <Popover
                content={ renderPopoverContent() }
                isVisible={ popoverVisible }
                offsetY={ 10 }
                placement="bottom"
            >
                <Button 
                    onClick={ () => setPopoverVisible(!popoverVisible) }
                >
                    Click me
                </Button>
            </Popover>
        </>
    );
};

export default Default;
