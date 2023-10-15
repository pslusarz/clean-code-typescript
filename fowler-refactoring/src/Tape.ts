import {DomainObject} from "./DomainObject";
import {Movie} from "./Movie";

export class Tape extends DomainObject {
    constructor(public serialNumber : string, public movie : Movie) {
        super();
    }
}
