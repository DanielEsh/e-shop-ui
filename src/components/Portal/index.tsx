import {FC, ReactElement, RefObject, useState, useEffect} from 'react';
import { createPortal } from "react-dom";

import { isClient } from "../../utils/isClient";

const body = isClient ? document.body : null;

export type PortalProps = {
    children: ReactElement;
    scope?: RefObject<HTMLElement>;
}

export const Portal: FC<PortalProps> = (props) => {
    const {
        children,
        scope,
    } = props;
    const [container, setContainer] = useState(body);

    useEffect(() => {
        if (scope) setContainer(document.getElementById('custom-root'));
    }, [scope]);

    return container ? createPortal(children, container) : null;
};
