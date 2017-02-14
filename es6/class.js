class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  increaseAge() {
    this.age++;
  }
}

class Employee extends Person {
  constructor(name, age, isTerminated) {
    super(name, age);
    this.isTerminated = isTerminated;
  }

  terminate() {
    this.isTerminated = true;
  }
}