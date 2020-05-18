import React from 'react';

const output = (props) =>{
    return (
    <div >        
        <p onClick={props.click}>{props.username} {props.children}</p>        

    </div>
    )    
};

export default output;