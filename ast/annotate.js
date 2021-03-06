module.exports = class Annotation {
  constructor(id, paramTypes, resultTypes) {
    Object.assign(this, { id, paramTypes, resultTypes });
  }

  analyze() {
    return this;
  }

  optimize() {
    return this;
  }
};
