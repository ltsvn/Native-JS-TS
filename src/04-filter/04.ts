import {CityType, GovermentType} from "../02-Object/02_02";


export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovermentType>, number: number) {
    return buildings.filter(b => b.staffCount > number)
}