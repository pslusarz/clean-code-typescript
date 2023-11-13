import {DomainObject} from "./DomainObject";
import {Rental} from "./Rental";

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

    htmlStatement(): string {
        let result = `<H1>Rentals for <EM> ${this.name}</EM></H1><P>\n`
        this.rentals.forEach((rental) => {
            result += `\t${rental.tape.movie.name}\t${(rental.charge())}<br>\n`
        })
        result +=  `<P>You owe <EM>${this.charge()}</EM><P>\n`
        result += `On this rental you earned <EM> ${this.frequentRenterPoints()}</EM> frequent renter points<P>`
        return result
    }

    charge(): number {
        return this.rentals.reduce((acc, rental) => acc + rental.charge(), 0)
    }

    frequentRenterPoints(): number {
        return this.rentals.reduce((acc, rental) => acc + rental.frequentRenterPoints(), 0)
    }






}
