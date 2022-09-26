import {Simulate} from "react-dom/test-utils";
import copy = Simulate.copy;

export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.age++

    return copy;
}

export function moveUser(u: UserWithLaptopType, city: string) {
    const copy = {
        ...u,
        address: {
            ...u.address,
            city: city
        },
        laptop: {...u.laptop}
    }
    //copy.address = {...copy.address, city: city}

    return copy;
}


export function upgrateUserLaptop(u: UserWithLaptopType, laptop: string) {
    const copy = {
        ...u,
        laptop: {...u.laptop, title:laptop}
    }

    return copy;
}

export function moveUserToOtherHouse (u: UserWithLaptopType & UserWithBooksType, laptop: string) {
    return {
        ...u,
        laptop: {...u.laptop, title:laptop}
    }

}

export function addNewBookToUser (u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
books: [...u.books, newBook]
    }
}