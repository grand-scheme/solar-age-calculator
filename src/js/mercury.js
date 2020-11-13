export default class Mercury {
  constructor(age) {
    this.age = age;
  }

  verifyAge() {
    if (this.age.isInteger()) {
      return true;
    } else {
      return false;
    }
  }
}