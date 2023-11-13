import {DomainObject} from "./DomainObject";
import {Tape} from "./Tape";
import {PriceCode} from "./Movie";

export class Rental extends DomainObject {
    constructor(public tape : Tape, public daysRented : number) {
        super();
    }

    charge() {
        return this.tape.movie.charge(this.daysRented)
    }

    frequentRenterPoints() : number {
        if ((this.tape.movie.priceCode === PriceCode.NEW_RELEASE) && (this.daysRented > 1)) {
            return 2
        } else {
            return 1
        }
    }
}
