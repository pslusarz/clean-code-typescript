import {DomainObject} from "./DomainObject";


export class Movie extends DomainObject {

    constructor(public name: string, public priceCode : PriceCode) {
        super(name)
    }

    charge(daysRented : number) {
        let result = 0
        switch (this.priceCode) {
            case PriceCode.REGULAR:
                result += 2
                if (daysRented > 2) {
                    result += (daysRented - 2) * 1.5
                }
                break;
            case PriceCode.NEW_RELEASE:
                result += daysRented * 3
                break;
            case PriceCode.CHILDRENS:
                result += 1.5
                if (daysRented > 3) {
                    result += (daysRented - 3) * 1.5
                }
                break;
        }
        return result;
    }


    frequentRenterPoints(daysRented: number) {
        if ((this.priceCode === PriceCode.NEW_RELEASE) && (daysRented > 1)) {
            return 2
        } else {
            return 1
        }
    }


}

export enum PriceCode {
    CHILDRENS,
    REGULAR,
    NEW_RELEASE
}
