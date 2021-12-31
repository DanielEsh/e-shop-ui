import {FC, ReactElement, useState, useEffect} from 'react';
import { createPortal } from "react-dom";

import { isClient } from "../../utils/isClient";

const body = isClient ? document.body : null;

export type PortalProps = {
    children: ReactElement;
    container?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props) => {
    const {
        children,
        container,
    } = props;
    const [node, setNode] = useState<HTMLElement>(body);

    useEffect(() => {
        if (container) setNode(container);
    }, [container]);

    return node ? createPortal(children, node) : null;
};
