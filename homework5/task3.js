class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    return this.name + " " + this.surname;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(midleName) {
    return super.showFullName() + "" + midleName;
  }

  showCourse() {
    let date = new Date();
    let currentYear = date.getFullYear();
    return currentYear - this.year;
  }
}

let student1 = new Student("Nick", "Batman", 2011);
console.log(student1.showFullName("Tom"));
console.log("current course: " + student1.showCourse());
