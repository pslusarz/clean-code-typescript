import {NewReleasePrice} from "./NewReleasePrice";
import {RegularPrice} from "./RegularPrice";
import {ChildrensPrice} from "./ChildrensPrice";

export class PriceFactory {
    static newRelease = new NewReleasePrice()
    static regular = new RegularPrice()
    static childrens = new ChildrensPrice()
}
