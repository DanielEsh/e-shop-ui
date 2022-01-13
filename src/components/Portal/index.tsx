import {FC, ReactElement, useState, useEffect} from 'react';
import { createPortal } from "react-dom";

import { canUseDom } from "../../utils/canUseDom";

const app = canUseDom ? document.getElementById('app') : null;

export type PortalProps = {
    children: ReactElement;
    container?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props) => {
    const {
        children,
        container,
    } = props;
    const [node, setNode] = useState<HTMLElement>(app);

    useEffect(() => {
        if (container) setNode(container);
    }, [container]);

    return node ? createPortal(children, node) : null;
};
