//parent class
class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours} hours`;
  }
}

//child class
class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student("abir", 50, "Dhaka");
console.log(student1);

//child class
class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(classNumber: number): string {
    return `This ${this.name} will take ${classNumber} classes`;
  }
}

const teacher1 = new Teacher("Sir", 60, "Dhaka", "HeadMaster");
