import {userObj} from "./07_01.test";

type usersType = {
    [key: string]:{id: number, name: string}
}

let users: usersType;


beforeEach(()=>{
    users = {
        '101': {id: 101, name: 'Dog'},
        '12': {id: 12, name: 'Kat'},
        '1345': {id: 1345, name: 'Frog'},
        '1': {id: 1, name: 'Bull'}
    }
})

test('should update corresponding user', () => {
    users[1].name = 'D'
expect(users['1'].name).toBe('D');

})
test('should delete corresponding user', () => {
   delete users[1]
expect(users['1'].name).toBeUndefined();

})