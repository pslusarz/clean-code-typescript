import {Movie, PriceCode} from "../src/Movie";
import {PriceFactory} from "../src/PriceFactory";

it('constructor properties', () => {
    let movie = new Movie("Princess Bride", PriceCode.CHILDRENS, PriceFactory.childrens)
    expect(movie.name).toBe("Princess Bride")
    expect(movie.priceCode).toBe(PriceCode.CHILDRENS)
});
