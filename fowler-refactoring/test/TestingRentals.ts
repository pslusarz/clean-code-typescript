import {Movie, PriceCode} from "../src/Movie";
import {Tape} from "../src/Tape";
import {Price} from "../src/Price";
import {PriceFactory} from "../src/PriceFactory";

export let princessBride = new Movie("Princess Bride", PriceCode.CHILDRENS, PriceFactory.childrens)
export let princessBrideTape = new Tape("123-456", princessBride)
export let dieHard = new Movie("Die Hard", PriceCode.REGULAR, PriceFactory.regular)
export let dieHardTape = new Tape("123-457", dieHard)

export let killersOfTheFlowerMoon = new Movie("Killers of the Flower Moon", PriceCode.NEW_RELEASE, PriceFactory.newRelease)
export let killersTape = new Tape("123-458", killersOfTheFlowerMoon)
