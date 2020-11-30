export default class LifeExpectancy {
  constructor(age) {
    this.age = age;
  }

  TickTock() {
    if (isNaN(this.age)) {
      return "is not a number";
    } else {
      let timeRemaining = (77 - this.age);
      if (this.age > 77) {
        let timeExceeding = (timeRemaining * -1);
        return timeExceeding;
      } else {
        return timeRemaining;
      }
    }
  }
}