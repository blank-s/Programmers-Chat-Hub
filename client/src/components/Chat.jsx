import React , { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import Nav from './Nav';
import Messages from './Messages';

let socket;  
//why its declared outside

const chatBoxStyle = { 
    width: "30rem",
    };  

const Chat = ({ location }) =>{

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:5000';
     
    useEffect(()=>{
        //login user / active
        const { name ,room } = queryString.parse(location.search);
        setName(name.trim().toLowerCase());
        setRoom(room);

        socket = io(ENDPOINT);     
        //create a unique user that automatically try to connect with thw server specified at ENDPOINT
    
        socket.emit('join' , { name , room } , (error)=>{
            alert(error);
        });   //triger an event of join 


        //logout user / off
        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }

    } , [ENDPOINT, location.search]);
    //so this is called when a user change the server 
    //or when user change the channel i.e (room or name)

    useEffect(()=>{
        socket.on('message' , (message)=>{
            setMessages( prevState => [...prevState, message]);
        })
    },[]);

    const sendMessage = (e) => {
        e.preventDefault();

        if(message)
        socket.emit('sendMessage' , message , ()=> setMessage(''));
    };

    console.log("message: " , message);
    console.log("messages: ", messages);

    return <div 
    className="card text-center p-3" style={ chatBoxStyle }>

        <Nav room={ room }/>


        <Messages mssgs={ messages } user={ name } />

        <div className="input-group flex-nowrap">
        <input 
        className="form-control mb-3"
        id="name" 
        placeholder="type your message"
        value={message} 
        onChange={ e=> setMessage(e.target.value) }
        onKeyPress={ e=> e.key === 'Enter' ? sendMessage(e) : null } />
        </div>
    </div>
};

export default Chat;