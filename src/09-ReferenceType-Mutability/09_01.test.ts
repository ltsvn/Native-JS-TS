function increaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: { title: string }
}


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }
    increaseAge(user);

    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000;
    expect(user.age).toBe(1000)
})

test('array type test', () => {
    let users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Katya',
            age: 54
        }
    ]

    let admins = users

    admins.push({name: 'ktos', age: 2})

    expect(users[2]).toEqual({name: 'ktos', age: 2})

})

test('value type test', () => {
    let usersCount = 100;

    let adminsCount = usersCount

    adminsCount = adminsCount + 1;

    // expect(users[2]).toEqual({name: 'ktos', age: 2})

})

test('reference type object test', () => {
    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }
    // let addr = user.address

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    user2.address.title = 'Kanary';

    expect(user.address.title).toBe('Kanary')
})

test('reference type array test', () => {
    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    const users = [user, user2, {name: 'Misha', age: 4, address: user.address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})

test('sort array test', () => {
    const letters = ['c', 'd', 'd', 'f']
    passportist(letters)

    expect(letters).toEqual(['d','c', 'd', 'f'])
})

function passportist(letters: any) {
    const copy = [...letters].sort()

    console.log(copy)
}