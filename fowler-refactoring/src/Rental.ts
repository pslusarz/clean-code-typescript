import {DomainObject} from "./DomainObject";
import {Tape} from "./Tape";
import {PriceCode} from "./Movie";

export class Rental extends DomainObject {
    constructor(public tape : Tape, public daysRented : number) {
        super();
    }

    amountOf() {
        let thisAmount = 0
        switch (this.tape.movie.priceCode) {
            case PriceCode.REGULAR:
                thisAmount += 2
                if (this.daysRented > 2) {
                    thisAmount += (this.daysRented - 2) * 1.5
                }
                break;
            case PriceCode.NEW_RELEASE:
                thisAmount += this.daysRented * 3
                break;
            case PriceCode.CHILDRENS:
                thisAmount += 1.5
                if (this.daysRented > 3) {
                    thisAmount += (this.daysRented - 3) * 1.5
                }
                break;
        }
        return thisAmount;
    }
}
