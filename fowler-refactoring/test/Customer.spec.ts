import {Customer} from "../src/Customer";
import {dieHardTape, killersTape, princessBride, princessBrideTape} from "./TestingRentals";
import {Rental} from "../src/Rental";


it('customer has a name', () => {
    let customer = new Customer("John Doe")
    expect(customer.name).toBe("John Doe")
});

it('no rentals', () => {
    let customer = new Customer("Jack New")
    expect(customer.statement()).toBe("Rental Record for Jack New\nAmount owed is 0\nYou earned 0 frequent renter points")
})

it('one rental', () => {
    let customer = new Customer("John Doe")
    let rental = new Rental(princessBrideTape, 1)
    customer.addRental(rental)
    expect(customer.statement()).toBe("Rental Record for John Doe\n\tPrincess Bride\t1.5\nAmount owed is 1.5\nYou earned 1 frequent renter points")
});

it('one rental of each type for one day', () => {
    let customer = new Customer("Lucy Marathoner")
    let childrensRental = new Rental(princessBrideTape, 1)
    let regularRental = new Rental(dieHardTape, 1)
    let newRental = new Rental(killersTape, 1)
    customer.addRental(childrensRental)
    customer.addRental(regularRental)
    customer.addRental(newRental)
    expect(customer.statement()).toBe(
        `Rental Record for Lucy Marathoner
\tPrincess Bride\t1.5
\tDie Hard\t2
\tKillers of the Flower Moon\t3
Amount owed is 6.5
You earned 3 frequent renter points`)
})

//note, just replicating bad html in the original
it('html one rental of each type for one day', () => {
    let customer = new Customer("Lucy Marathoner")
    let childrensRental = new Rental(princessBrideTape, 1)
    let regularRental = new Rental(dieHardTape, 1)
    let newRental = new Rental(killersTape, 1)
    customer.addRental(childrensRental)
    customer.addRental(regularRental)
    customer.addRental(newRental)
    expect(customer.htmlStatement()).toBe(
        `<H1>Rentals for <EM> Lucy Marathoner</EM></H1><P>
\tPrincess Bride\t1.5<br>
\tDie Hard\t2<br>
\tKillers of the Flower Moon\t3<br>
<P>You owe <EM>6.5</EM><P>
On this rental you earned <EM> 3</EM> frequent renter points<P>`)
})

it('multi day rentals', () => {
    let customer = new Customer("Liu Long")
    let childrensRental = new Rental(princessBrideTape, 4)
    let regularRental = new Rental(dieHardTape, 3)
    let newRental = new Rental(killersTape, 2)
    customer.addRental(childrensRental)
    customer.addRental(regularRental)
    customer.addRental(newRental)
    expect(customer.statement()).toBe(
        `Rental Record for Liu Long
\tPrincess Bride\t3
\tDie Hard\t3.5
\tKillers of the Flower Moon\t6
Amount owed is 12.5
You earned 4 frequent renter points`)
})


