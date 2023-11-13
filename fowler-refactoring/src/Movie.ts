import {DomainObject} from "./DomainObject";
import {Price} from "./Price";


export class Movie extends DomainObject {
    constructor(public name: string, public price: Price) {
        super(name)
    }

    charge(daysRented: number) {
        return this.price.charge(daysRented)
    }


    frequentRenterPoints(daysRented: number) {
        return this.price.frequentRenterPoints(daysRented)
    }


}

