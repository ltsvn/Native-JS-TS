import {GovermentType, HouseType} from "../02-Object/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovermentType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}

export function createMessages(houses: Array<HouseType>) {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}