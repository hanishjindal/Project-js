let container = document.getElementById("container");
class Employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }
  intro() {
    return `I am ${this.name}.\nMy Experience is of ${this.experience} years.`;
  }
}

// let hanish = new Employee("Hanish", 10, "India");

class Programmer extends Employee {
  constructor(givenName, givenExperience, givenDivision, language) {
    super(givenName, givenExperience, givenDivision);
    this.language = language;
  }
  intro() {
    return `I am ${this.name}.\nMy Experience is of ${this.experience} years.\nI speaks ${this.language}.`;
  }
}

let hanish = new Programmer("Hanish", 10, "India", "Punjabi");

let content = hanish.intro();

container.innerText = content;
