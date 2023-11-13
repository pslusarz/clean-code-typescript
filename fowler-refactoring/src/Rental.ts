import {DomainObject} from "./DomainObject";
import {Tape} from "./Tape";
import {PriceCode} from "./Movie";

export class Rental extends DomainObject {
    constructor(public tape : Tape, public daysRented : number) {
        super();
    }

    charge() {
        let result = 0
        switch (this.tape.movie.priceCode) {
            case PriceCode.REGULAR:
                result += 2
                if (this.daysRented > 2) {
                    result += (this.daysRented - 2) * 1.5
                }
                break;
            case PriceCode.NEW_RELEASE:
                result += this.daysRented * 3
                break;
            case PriceCode.CHILDRENS:
                result += 1.5
                if (this.daysRented > 3) {
                    result += (this.daysRented - 3) * 1.5
                }
                break;
        }
        return result;
    }

    frequentRenterPoints() : number {
        if ((this.tape.movie.priceCode === PriceCode.NEW_RELEASE) && (this.daysRented > 1)) {
            return 2
        } else {
            return 1
        }
    }
}
