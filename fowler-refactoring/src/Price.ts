export abstract class Price {
   abstract charge(daysRented : number): number
   abstract frequentRenterPoints(daysRented: number): number
}




