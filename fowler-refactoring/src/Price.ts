import {NewReleasePrice} from "./NewReleasePrice";
import {RegularPrice} from "./RegularPrice";
import {ChildrensPrice} from "./ChildrensPrice";
import {PriceCode} from "./Movie";

export abstract class Price {
   constructor(public priceCode : PriceCode) {
   }

   abstract charge(daysRented : number): number

   abstract frequentRenterPoints(daysRented: number): number


}




