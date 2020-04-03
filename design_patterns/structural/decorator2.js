/*
Coffee interface:
getCost()
getDescription()
*/

class SimpleCoffee{
  getCost() {
      return 10
  }
  getDescription() {
      return 'Simple coffee'
  }
}

class MilkCoffee {
  constructor(coffee) {
      this.coffee = coffee
  }
  getCost() {
      return this.coffee.getCost() + 2
  }
  getDescription() {
      return this.coffee.getDescription() + ', milk'
  }
}

class EspressoCoffee {
  constructor(coffee) {
      this.coffee = coffee
  }
  getCost() {
      return this.coffee.getCost() + 5
  }
  getDescription() {
      return this.coffee.getDescription() + ', espresso'
  }
}


let someCoffee

someCoffee = new SimpleCoffee()
console.log(someCoffee.getCost()) // 10
console.log(someCoffee.getDescription()) // Simple coffee

someCoffee = new MilkCoffee(someCoffee)
console.log(someCoffee.getCost())// 12
console.log(someCoffee.getDescription()) // Simple coffee, milk

someCoffee = new EspressoCoffee(someCoffee)
console.log(someCoffee.getCost())// 17
console.log(someCoffee.getDescription()) // Simple coffee, milk, espresso

