const User = function(name) {
  this.name = name;

  this.say = function() {
      console.log("User: " + this.name);
  };
}

const DecoratedUser = function(user, street, city) {
  this.user = user;
  this.name = user.name;  // note that interface stays the same
  this.street = street;
  this.city = city;

  this.say = function() {
      console.log("Decorated User: " + this.name + ", " +  this.street + ", " + this.city);
  };
}

let user = new User("Kelly");
user.say(); // User: Kelly

let decorated = new DecoratedUser(user, "Abovyan", "Vanadzor");
decorated.say(); // Decorated User: Kelly, Abovyan, Vanadzor


