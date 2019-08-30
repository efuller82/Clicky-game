import React from 'react';
import './style.css';

function NavBar(props) {
    return <nav className='navbar navbar-light bg-light'>{props.children}</nav>
}

export default NavBar;