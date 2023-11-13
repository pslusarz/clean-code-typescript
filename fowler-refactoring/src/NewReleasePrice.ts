import {Price} from "./Price";

export class NewReleasePrice extends Price {
    charge(daysRented : number) : number {
        return daysRented * 3
    }
}
