import {Price} from "./Price";

export class ChildrensPrice extends Price {
    charge(daysRented : number) : number {
        let result = 1.5
        if (daysRented > 3) {
            result += (daysRented - 3) * 1.5
        }
        return result
    }

}
