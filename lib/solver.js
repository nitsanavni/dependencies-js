const _ = require("lodash");

class Solver {
    constructor(dependencies) {
        this.dependencies = dependencies;
    }

    solve() {
        return _.flatten(this.dependencies)
    }
}

module.exports = Solver;