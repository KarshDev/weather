import React, {Fragment} from 'react';
import Nav from './nav';
import Content from './content';
import './page.css';

function MainPage(props) {
    return (
       <Fragment>
           <Nav/>
           <Content>{props.children}</Content>
       </Fragment>
    )
}

export default MainPage;