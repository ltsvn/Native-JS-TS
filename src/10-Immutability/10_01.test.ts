import {
    addNewBookToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse,
    upgrateUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./10_01";

test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {city: 'Minsk'}
    }

    const awesomeUser = makeHairstyle(user,2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)

})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {city: 'Minsk', house: 12},
        laptop: {title:'ZenBook'}
    }

    const movedUser = moveUser(user,'Kiev');

    expect(user).not.toBe(movedUser)
    expect(user.hair).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrate laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {city: 'Minsk', house: 12},
        laptop: {title:'ZenBook'}
    }

    const userCopy = upgrateUserLaptop(user,'Macbook');

    expect(user).not.toBe(userCopy)
    expect(user.hair).not.toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
})

test('move user to other house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {city: 'Minsk', house: 12},
        laptop: {title:'ZenBook'},
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user,'Macbook');

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.hair).not.toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {city: 'Minsk', house: 12},
        laptop: {title:'ZenBook'},
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBookToUser(user,'ts');

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address).toBe(userCopy.address)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books.length).toBe(4)
})