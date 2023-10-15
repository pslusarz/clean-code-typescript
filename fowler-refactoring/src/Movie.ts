import {DomainObject} from "./DomainObject";

export enum PriceCode {
    CHILDRENS,
    REGULAR,
    NEW_RELEASE
}
export class Movie extends DomainObject {
    constructor(public name: string, public priceCode : PriceCode) {
        super(name)
    }

}
