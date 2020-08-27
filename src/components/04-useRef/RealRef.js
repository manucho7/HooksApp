import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../02-useEffect/effects.css';

export const RealRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>RealRef example</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button
                className="btn btn-primary mt-5"
                onClick= { () => {
                    setShow( !show );
                }}
            >
                Show/Hide
            </button>

        </div>
    )
}
