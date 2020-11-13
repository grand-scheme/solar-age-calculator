export default class Mercury {
  constructor(age) {
    this.age = age;
  }

  verifyAge() {
    if (isNaN(this.age)) {
      return "is not a number";
    } else {
      return "is a number";
    }
  }
}