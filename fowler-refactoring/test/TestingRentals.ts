import {Movie, PriceCode} from "../src/Movie";
import {Tape} from "../src/Tape";

export let princessBride = new Movie("Princess Bride", PriceCode.CHILDRENS)
export let princessBrideTape = new Tape("123-456", princessBride)
export let dieHard = new Movie("Die Hard", PriceCode.REGULAR)
export let dieHardTape = new Tape("123-457", dieHard)

export let killersOfTheFlowerMoon = new Movie("Killers of the Flower Moon", PriceCode.NEW_RELEASE)
export let killersTape = new Tape("123-458", killersOfTheFlowerMoon)
