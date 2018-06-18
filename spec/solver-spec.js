const Solver = require("../lib/solver");

describe("[dependencies solver]", () => {
    it("should solve the dependencies", () => {
        expect(new Solver([
            ["a", "b"],
            ["b", "c"],
            ["c", "d"],
        ]).solve()).toEqual(["d", "c", "b", "a"]);
    }) ;
    it("should solve the dependencies", () => {
        expect(new Solver([
            ["a", "b"],
            ["b", "c"],
            ["e", "c"],
            ["f", "e"],
            ["g", "c"],
            ["a", "g"],
            ["c", "x"],
        ]).solve()).toEqual(["x", "d", "c", "g", "b", "a", "e", "f"]);
    });
}

);
