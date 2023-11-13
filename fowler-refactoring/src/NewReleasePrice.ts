import {Price} from "./Price";

export class NewReleasePrice extends Price {
    charge(daysRented : number) : number {
        return daysRented * 3
    }

    frequentRenterPoints(daysRented: number) {
        if (daysRented > 1) {
            return 2
        } else {
            return 1
        }
    }
}
