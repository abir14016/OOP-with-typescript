//keyof guard
type Alphanumeric = number | string;
function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

//in guard

type NormalUserType = {
  name: string;
};
type AdminUserType = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return `I am admin and my role is ${user.role}`;
  } else {
    return "I am a normal user";
  }
}

const normalUser1: NormalUserType = {
  name: "John",
};
const adminUser1: AdminUserType = {
  name: "Cina",
  role: "admin",
};

// console.log(getUser(normalUser1));
// console.log(getUser(adminUser1));

//instance of guard

class Animal {
  name: string;
  specis: string;

  constructor(name: string, specis: string) {
    this.name = name;
    this.specis = specis;
  }

  makeSound() {
    console.log("I am making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, specis: string) {
    super(name, specis);
  }
  makeGhew() {
    console.log("I am ghew ghew");
  }
}

class Cat extends Animal {
  constructor(name: string, specis: string) {
    super(name, specis);
  }

  makeMeaw() {
    console.log("I am meaw meaw");
  }
}

function isDog(animal: Animal): animal is Dog {
  //is syntax
  return animal instanceof Dog;
}

function getAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.makeGhew();
  } else if (animal instanceof Cat) {
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
}

//instance of dog
const animal1 = new Dog("Bruno", "dog");
const animal2 = new Cat("Guddu", "cat");

getAnimal(animal2);
