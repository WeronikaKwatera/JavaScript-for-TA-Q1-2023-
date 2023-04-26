const workersList = [];

class Worker {
  #experiance = 1.2;
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    workersList.push(this);
  }

  showSalary() {
    console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
  }
  showSalaryWithExperiance() {
    console.log(
      `${this.fullName} salary: ${
        this.dayRate * this.workingDays * this.#experiance
      }`
    );
  }

  showSalaryWorker() {
    return `${this.dayRate * this.workingDays * this.#experiance}`;
  }

  get showExperiance() {
    return this.#experiance;
  }
  set setExperiance(experiance) {
    this.experiance = experiance;
  }

  sortSalariers(workersArray) {
    let sortedSalary = workersArray.sort(function (a, b) {
      return a.showSalaryWorker() - b.showSalaryWorker();
    });

    for (let i = 0; i < sortedSalary.length; i++) {
      console.log(
        sortedSalary[i].fullName + ":" + sortedSalary[i].showSalaryWorker()
      );
    }
  }
}
