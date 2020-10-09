import senatorList from "./data/senatorList.js";

const _trim = (input) => {
  return input
    .split(/[ ,]+/)
    .filter(function (v) {
      return v !== "";
    })
    .join(" ")
    .toLowerCase();
};

const all = () => {
  return senatorList;
};

const findbystate = (state) => {
  state = _trim(state);

  if (!state || state == "") {
    throw new Error("Invalid Nigeria State");
  }

  return senatorList.filter((details) => {
    return _trim(details.state).includes(_trim(state)) ? details : "";
  });
};

const findbyname = (name) => {
  name = _trim(name);

  if (!name || name == "") {
    throw new Error("Invalid name");
  }

  return senatorList.filter((details) => {
    return _trim(details.name).includes(_trim(name)) ? details : "";
  });
};

export { all, findbystate, findbyname };
