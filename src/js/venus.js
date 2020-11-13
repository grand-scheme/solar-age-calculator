export default class Venus {
  constructor(age) {
    this.age = age;
  }
  calculateAge() {
    if (isNaN(this.age)) {
      return "is not a number";
    } else {
      return (this.age * 0.62);
    }
  }
}