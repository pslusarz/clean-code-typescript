import {DomainObject} from "./DomainObject";
import {Price} from "./Price";


export class Movie extends DomainObject {
    constructor(public name: string, public price: Price) {
        super(name)
    }
}

