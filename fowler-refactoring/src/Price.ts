import {NewReleasePrice} from "./NewReleasePrice";
import {RegularPrice} from "./RegularPrice";
import {ChildrensPrice} from "./ChildrensPrice";
import {PriceCode} from "./Movie";

export abstract class Price {
   constructor(public priceCode : PriceCode) {
   }

   abstract charge(daysRented : number): number

   frequentRenterPoints(daysRented: number) {
      if ((this.priceCode === PriceCode.NEW_RELEASE) && (daysRented > 1)) {
         return 2
      } else {
         return 1
      }
   }


}




