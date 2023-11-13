import {DomainObject} from "./DomainObject";
import {Tape} from "./Tape";

export class Rental extends DomainObject {
    constructor(public tape : Tape, public daysRented : number) {
        super();
    }

    charge() {
        return this.tape.movie.charge(this.daysRented)
    }

    frequentRenterPoints() : number {
        return this.tape.movie.frequentRenterPoints(this.daysRented)
    }
}
