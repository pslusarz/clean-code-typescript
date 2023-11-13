import {DomainObject} from "./DomainObject";
import {Rental} from "./Rental";
import {PriceCode} from "./Movie";

export class Customer extends DomainObject {
    rentals: Rental[] = []

    addRental(rental: Rental) {
        this.rentals.push(rental)
    }

    statement() {
        let result = `Rental Record for ${this.name}\n`
        let totalAmount = 0
        let frequentRenterPoints = 0
        this.rentals.forEach((rental) => {
            let thisAmount = this.amountOf(rental);
            totalAmount += thisAmount
            frequentRenterPoints++
            if ((rental.tape.movie.priceCode === PriceCode.NEW_RELEASE) && (rental.daysRented > 1)) {
                frequentRenterPoints++
            }
            result += `\t${rental.tape.movie.name}\t${thisAmount}\n`
        })
        result += `Amount owed is ${totalAmount}\n`;
        result += `You earned ${frequentRenterPoints} frequent renter points`
        return result
    }

    private amountOf(rental: Rental) {
        let thisAmount = 0
        switch (rental.tape.movie.priceCode) {
            case PriceCode.REGULAR:
                thisAmount += 2
                if (rental.daysRented > 2) {
                    thisAmount += (rental.daysRented - 2) * 1.5
                }
                break;
            case PriceCode.NEW_RELEASE:
                thisAmount += rental.daysRented * 3
                break;
            case PriceCode.CHILDRENS:
                thisAmount += 1.5
                if (rental.daysRented > 3) {
                    thisAmount += (rental.daysRented - 3) * 1.5
                }
                break;
        }
        return thisAmount;
    }
}
