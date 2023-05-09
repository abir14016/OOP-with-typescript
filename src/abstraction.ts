//using interface
// interface Ivehicle {
//     name: string;
//     model: string
// }

// const vehicle1: Ivehicle = {
//     name: "car",
//     model: "y uyu56"
// }

//

//abstract class

abstract class Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  abstract startEngine(): void;
  abstract stopEngine(): void;
  move(): void {
    console.log("moving");
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log("sjjsdh");
  }
  stopEngine(): void {
    console.log("hjhjsdhf");
  }
}
