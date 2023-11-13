import {Movie} from "../src/Movie";
import {PriceFactory} from "../src/PriceFactory";

it('constructor properties', () => {
    let movie = new Movie("Princess Bride", PriceFactory.childrens)
    expect(movie.name).toBe("Princess Bride")
    expect(movie.price).toBe(PriceFactory.childrens)
});
