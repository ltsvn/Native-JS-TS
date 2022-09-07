//export const usersArray = ['Dog', 'Kat', 'Frog', 'Bull']


export const userObj = {
    '0': 'Dog',
    '1': 'Kat',
    '2': 'Frog',
    '3': 'Bull'
}


//users[1]

let user = {id: 100500, name: 'Horse'}
users[user.id] = user;
delete users[user.id]
users[user.id].name = 'Monkey';

export const usersArray = [
    {id: 101, name: 'Dog'},
    {id: 12, name: 'Kat'},
    {id: 1345, name: 'Frog'},
    {id: 1, name: 'Bull'}]

// usersArray.find(u=>u.id === 1)
// let userCopy = [...usersArray.filter(), user]