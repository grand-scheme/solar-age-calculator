export default class LifeExpectancy {
  constructor(age) {
    this.age = age;
  }

  TickTock() {
    if (isNaN(this.age)) {
      return "is not a number";
    } else {
      let timeRemaining = (77 - this.age);
      return timeRemaining;
    }
  }

}