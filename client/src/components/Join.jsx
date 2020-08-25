import React , { useState } from 'react';
import { Link } from 'react-router-dom';

const joinHandle = (name, room, e) => {
    if( !name || !room)
    e.preventDefault();     //this will prevent Link to link to the given route
};

const Join = () =>{

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    console.log("re rendered");

    return <div 
    className="card text-center p-3">
        <div className="input-group flex-nowrap">
        <input 
        className="form-control mb-3"
        id="name" 
        placeholder="username" 
        onChange={ e=> setName(e.target.value) }/>
        </div>

        <div className="input-group flex-nowrap">
        <input 
        className="form-control mb-3"
        id="channel" 
        placeholder="channel" 
        onChange={ e=> setRoom(e.target.value) }/>
        </div>

        <Link 
        onClick = { (e)=>{ joinHandle(name, room, e); } }
        to={`/chat?name=${name}&room=${room}`}>
            <div className="btn btn-primary btn-block">
                Join
            </div>
        </Link>
    </div>
};

export default Join;