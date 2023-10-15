export class Fizzbuzz {
    classify(aNumber: number) {
        if (aNumber %3 === 0 && aNumber % 5 === 0) {
            console.log("fizzbuzz")
        } else if (aNumber % 3 === 0) {
            console.log("fizz")
        } else if (aNumber % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(`${aNumber}`)
        }
    }
}
