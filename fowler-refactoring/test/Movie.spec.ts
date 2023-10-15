import {Movie, PriceCode} from "../src/Movie";

it('constructor properties', () => {
    let movie = new Movie("Princess Bride", PriceCode.CHILDRENS)
    expect(movie.name).toBe("Princess Bride")
    expect(movie.priceCode).toBe(PriceCode.CHILDRENS)
});
