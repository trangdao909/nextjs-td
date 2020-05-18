import React from 'react';


const input = (props) =>{
    return (
    <div >
        <p>{props.children}</p>
        <input type='text' onChange={props.changed} value={props.username} />
    </div>
    )    
};

export default input;