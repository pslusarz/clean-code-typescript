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
            totalAmount += rental.charge()
            frequentRenterPoints += rental.frequentRenterPoints()

            result += `\t${rental.tape.movie.name}\t${(rental.charge())}\n`
        })
        result += `Amount owed is ${totalAmount}\n`;
        result += `You earned ${frequentRenterPoints} frequent renter points`
        return result
    }






}
