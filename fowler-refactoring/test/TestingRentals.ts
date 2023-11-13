import {Movie} from "../src/Movie";
import {Tape} from "../src/Tape";
import {Price} from "../src/Price";
import {PriceFactory} from "../src/PriceFactory";

export let princessBride = new Movie("Princess Bride", PriceFactory.childrens)
export let princessBrideTape = new Tape("123-456", princessBride)
export let dieHard = new Movie("Die Hard", PriceFactory.regular)
export let dieHardTape = new Tape("123-457", dieHard)

export let killersOfTheFlowerMoon = new Movie("Killers of the Flower Moon", PriceFactory.newRelease)
export let killersTape = new Tape("123-458", killersOfTheFlowerMoon)
