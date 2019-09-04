import React from 'react';
import './style.css';

function ToolCard(props) {
    return (
        <div className='card img-card'>
            <div className='img-container'>
                <img
                    alt={props.id}
                    src={props.image}
                    onClick={() => props.handleShuffle(props.id)} className='shuffle'
                //! something for handleIsClicked here??
                />
            </div>
        </div>

    );
}



export default ToolCard;