const Solver = require("../lib/solver");

describe("[dependencies solver]", () => {
    it("should solve the dependencies", () => {
        expect(new Solver([
            ["a", "b"],
            ["b", "c"],
            ["c", "d"],
        ]).solve()).toEqual(["d", "c", "b", "a"]);
    });
});
