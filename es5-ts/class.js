var __extends = (this && this.__extends) || (function() {
  var extendStatics = Object.setPrototypeOf ||
  ({
    __proto__: []
  } instanceof Array && function(d, b) {
    d.__proto__ = b;
  }) ||
  function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var Person = (function() {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.increaseAge = function() {
    this.age++;
  };
  return Person;
}());
var Employee = (function(_super) {
  __extends(Employee, _super);
  function Employee(name, age, isTerminated) {
    var _this = _super.call(this, name, age) || this;
    _this.isTerminated = isTerminated;
    return _this;
  }
  Employee.prototype.terminate = function() {
    this.isTerminated = true;
  };
  return Employee;
}(Person));
