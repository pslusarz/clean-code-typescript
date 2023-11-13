import {Price} from "./Price";
import {PriceCode} from "./Movie";

export class ChildrensPrice extends Price {
    charge(daysRented : number) : number {
        let result = 1.5
        if (daysRented > 3) {
            result += (daysRented - 3) * 1.5
        }
        return result
    }

    frequentRenterPoints(daysRented: number) {
        return 1
    }

}
