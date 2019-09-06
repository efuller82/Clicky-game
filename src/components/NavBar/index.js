import React from 'react';
import './style.css';

function NavBar(props) {
    return <nav className='navbar navbar-light bg-light'>{props.children}
        <div className="scores">
            {props.score} {props.highScore}
        </div>
    </nav>
}

export default NavBar;