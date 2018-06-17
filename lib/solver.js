const _ = require("lodash");

class Solver {
    constructor(dependencies) {
        this.dependencies = dependencies;
    }

    solve() {
        return _(this.dependencies)
            .flatten()
            .take(4)
            .value();
    }
}

module.exports = Solver;