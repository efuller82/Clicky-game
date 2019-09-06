import React from 'react';
import './style.css';

function ToolCard(props) {
    return (
        <div className='card img-card'>
            <div className='img-container'>
                <img
                    alt={props.id}
                    src={props.image}
                    //! something for handleIsClicked here??
                    onClick={() => props.handleIsClicked(props.id)}
                />
            </div>
        </div>

    );
}

export default ToolCard;