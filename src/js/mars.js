export default class Mars {
  constructor(age) {
    this.age = age;
  }
  calculateAge() {
    if (isNaN(this.age)) {
      return "is not a number";
    } else {
      return (this.age * 1.88);
    }
  }
}