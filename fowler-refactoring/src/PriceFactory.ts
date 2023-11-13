import {NewReleasePrice} from "./NewReleasePrice";
import {PriceCode} from "./Movie";
import {RegularPrice} from "./RegularPrice";
import {ChildrensPrice} from "./ChildrensPrice";

export class PriceFactory {
    static newRelease = new NewReleasePrice(PriceCode.NEW_RELEASE)
    static regular = new RegularPrice(PriceCode.REGULAR)
    static childrens = new ChildrensPrice(PriceCode.CHILDRENS)
}
