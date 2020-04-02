class Vehicle {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
  getSpecs() {
    console.log(`Type: ${this.type}, Color: ${this.color}`);
  }
};
var someTruck = new Vehicle('Truck', 'red');
var someCar = new Vehicle('Car', 'blue');

someTruck.getSpecs();