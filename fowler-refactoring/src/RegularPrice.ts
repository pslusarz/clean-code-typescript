import {Price} from "./Price";
import {PriceCode} from "./Movie";

export class RegularPrice extends Price {
    charge(daysRented: number): number {
        let result = 2
        if (daysRented > 2) {
            result += (daysRented - 2) * 1.5
        }
        return result
    }

    frequentRenterPoints(daysRented: number) {
        return 1
    }
}
