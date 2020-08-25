import React from 'react';

const Nav = ({ room }) => {

    return <div className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">{ room }</span> 
    </div>
};

export default Nav;