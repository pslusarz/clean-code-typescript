import {Fizzbuzz} from "./fizzbuzz";

describe("fizzbuzz checker", () => {
    beforeEach(() => {
        jest.spyOn(console, "log");
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("echoes the number back", () => {
        let fizzbuzz = new Fizzbuzz();
        fizzbuzz.classify(1);
        expect(console.log).toHaveBeenCalledWith("1");
    });

    it("fizz on 3", () => {
        let fizzbuzz = new Fizzbuzz();
        fizzbuzz.classify(3);
        expect(console.log).toHaveBeenCalledWith("fizz");
    });

    it("buzz on 5", () => {
        let fizzbuzz = new Fizzbuzz();
        fizzbuzz.classify(5);
        expect(console.log).toHaveBeenCalledWith("buzz");
    });

    it("fizzbuzz on 15", () => {
        let fizzbuzz = new Fizzbuzz();
        fizzbuzz.classify(15);
        expect(console.log).toHaveBeenCalledWith("fizzbuzz");
    });

    type TestDataSet = [input : number, output : string]
    it.each<TestDataSet>([
        [0, "fizzbuzz"],
        [1, "1"],
        [2, "2"],
        [3, "fizz"],
        [5, "buzz"],
        [6, "fizz"],
        [7, "7"],
        [15, "fizzbuzz"],
    ])("given '%i' output '%s'", (input : number, output: string) => {
        let fizzbuzz = new Fizzbuzz();
        fizzbuzz.classify(input)
        expect(console.log).toHaveBeenCalledWith(output);
    });


});
