import React from 'react';
import Message from './message';

const msgBoxStyle = {
    height: "40vh",
    padding: "5px",
    overflow: "auto"
};

const Messages = ( {mssgs , user } ) => {

    return <div 
    className="card" 
    style={ msgBoxStyle }>

        { mssgs.map(msg => <Message msg={ msg } user={ user }/>) }

    </div>
};

export default Messages;
