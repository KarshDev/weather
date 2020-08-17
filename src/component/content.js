import React, {Fragment} from 'react';

function Content(props) {
    return (
        <Fragment>
            <h1>hello</h1>
            {props.children}
        </Fragment>
    )
}

export default Content;