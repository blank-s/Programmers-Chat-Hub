import React from 'react';

const dialogBox = {
    maxWidth: "70%",
    width: "fit-content",
    marginTop: "8px",
    padding: "5px",
    margin: 0
};

const msgStyle = {
    margin: 0,
    padding: "2px 6px"
}

//if its user own msg then set align-item to end and alert-primary

const Message = ( {msg , user } ) => {
    console.log("user: " , user);
    const msgColor = msg.user === user ? "alert-primary " : "alert-secondary ";
    const msgAlign = msg.user === user ? "align-self-end text-right" : "text-left";

    return <div style={ dialogBox } className={ msgAlign }>
        <small>{msg.user}</small>
        <div
        className={ `alert ${ msgColor }`}
        style={ msgStyle }>
            { msg.text }
        </div>
    </div>
};

export default Message;
