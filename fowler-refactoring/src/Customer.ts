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

        let frequentRenterPoints = 0
        this.rentals.forEach((rental) => {
            frequentRenterPoints += rental.frequentRenterPoints()
            result += `\t${rental.tape.movie.name}\t${(rental.charge())}\n`
        })
        result += `Amount owed is ${this.charge()}\n`;
        result += `You earned ${frequentRenterPoints} frequent renter points`
        return result
    }

    charge(): number {
        // let result = 0
        // this.rentals.forEach((rental) => {
        //     result += rental.charge()
        // })
        // return result
        return this.rentals.reduce((acc, rental) => acc + rental.charge(), 0)
    }






}
