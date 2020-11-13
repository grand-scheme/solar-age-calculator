export default class LifeExpectancy {
  constructor(age) {
    this.age = age;
  }

  LifeExpectancy() {
    if (isNaN(this.age)) {
      return "is not a number";
    } else {
      return (100 - this.age);
    }
  }

}