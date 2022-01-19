import React, {useRef} from 'react';
import { Button } from "@/components/Button";

const Default = (): JSX.Element => {
    const btnRef = useRef<HTMLButtonElement>(null);

    return (
        <Button ref={ btnRef }>
            Default button
        </Button>
    );
};

export default Default;
