class Car {
  constructor(options) {
    this.wheels = options.wheels;
    this.type = "car";
  }

  drive() {
    return "Im driving";
  }
}

// const car = new Car({wheels: 4})
// console.log("car:", car)
// console.log("car.drive():", car.drive())
// console.log("car.type:", car.type)
// console.log("car.wheels:", car.wheels)

class Honda extends Car {
  constructor(options) {
    super(options);
    this.model = options.model;
  }
}

const accord = new Honda({ model: "accord", wheels: 4 });
console.log("accord:", accord);
console.log("accord.drive():", accord.drive());
console.log("accord.type:", accord.type);
console.log("accord.wheels:", accord.wheels);
