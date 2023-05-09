class Animal {
  //parameter properties
  constructor(
    public name: string,
    public specis: string,
    public sound: string
  ) {}

  //when a function is declared in a class then it will be called a method
  //this property does not work with arrow function

  makeSound() {
    console.log(`${this.name} sounds ${this.sound}`);
  }
}

//instance
const dog = new Animal("German Shephard", "dog", "Ghew Ghew");
const cat = new Animal("Guddu", "cat", "mew mew");
dog.makeSound();
cat.makeSound();
