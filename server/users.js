//list of all users in this server
const users = [];

//add user to users list
const addUser = ({id , name, room}) => {
    name = name.trim().toLowerCase();                //remove whitespace from bothside
    room = room.trim().toLowerCase();

    //check if a user with same name is on that channel or not
    const existUser = users.find( user=> user.room === room && user.name === name);

    if(existUser)
    return { error : "User name is already taken"};

    const user = { id, name, room};
    users.push(user);

    return { user };
};

//remove  a user from users list
const removeUser = (id) => {
    const index = users.findIndex(user=> user.id === id);

    if(index !== -1)
    return users.splice(index,1);                      //return the removed user
};

//find user details through id
const getUser = (id) => {
    return users.find( user => user.id === id);
};

//get list of all users in a particular room 
const getUsersInRoom = room => {
    return users.filter( user => user.room === room);
};


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
};