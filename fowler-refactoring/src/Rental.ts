import {DomainObject} from "./DomainObject";
import {Tape} from "./Tape";

export class Rental extends DomainObject {
    constructor(public tape : Tape, public daysRented : number) {
        super();
    }
}
