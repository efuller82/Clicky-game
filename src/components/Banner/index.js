import React from 'react';
import './style.css';

function Banner(props) {
    return <div className='jumbotron'>{props.children}</div>
}

export default Banner;