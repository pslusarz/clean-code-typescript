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
            let thisAmount = rental.charge();
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


}
