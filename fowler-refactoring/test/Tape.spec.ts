import {princessBride} from "./TestingRentals";
import {Tape} from "../src/Tape";

it("how to use constructor", () => {
  let aTape = new Tape("456-789", princessBride)
    expect(aTape.serialNumber).toBe("456-789")
    expect(aTape.movie).toBe(princessBride)
})
