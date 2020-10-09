const senatorList = require("./data/senatorList.json");

const _trim = (input) => {
  return input
    .split(/[ ,]+/)
    .filter(function (v) {
      return v !== "";
    })
    .join(" ")
    .toLowerCase();
};

module.exports = {
    all: () => {
        
    return senatorList;
    },

    findbystate: (state) => {
        
    state = _trim(state);
        
    if (!state || state == "") {
        throw new Error("Invalid Nigeria State");
    }

    return senatorList.find(function (res) {
        return _trim(res.state) === _trim(state);
    });
        
    }
}
