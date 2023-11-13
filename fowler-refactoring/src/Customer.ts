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
        this.rentals.forEach((rental) => {
            result += `\t${rental.tape.movie.name}\t${(rental.charge())}\n`
        })
        result += `Amount owed is ${this.charge()}\n`;
        result += `You earned ${this.frequentRenterPoints()} frequent renter points`
        return result
    }

    charge(): number {
        return this.rentals.reduce((acc, rental) => acc + rental.charge(), 0)
    }

    frequentRenterPoints(): number {
        return this.rentals.reduce((acc, rental) => acc + rental.frequentRenterPoints(), 0)
    }






}
