// function constructor - A normal function that is used to construct objects

function Person() {
  // this is function contructor way of creating the object
  this.fname = "john";
  this.lname = "doe";

  console.log("priting this:");
  console.log(this);
  console.log(this.fname);
}

Person();

var john = new Person(); // when we say new An empty object is created(like 'var john={}'). And then it invokes the function. When the function is called we know that the execution context generates for us a variable called this.
// and this variable is pointing to the empty object in memeory

console.log(john);

// another example
function Person2() {
  this.fname = "john";
  this.lname = "doe";

  console.log("invoking the function");

  return { greeting: "I m on the way" };
}

var john = new Person2();
console.log(john);

function Person3(fname, lname) {
  console.log(this);
  this.fname = fname;
  this.lname = lname;
}

var jane = new Person3("Jane", "Doe");
console.log(jane);

console.log("--------- Function constructor and prototypes--------");

function Person4(fname, lname) {
  console.log(this);
  this.fname = fname;
  this.lname = lname;

  console.log("This function has been invoked");
}

var nik = new Person4("Nik", "Paul");
console.log(nik);
// console.log(nik.getFormalName()); // not working here as the prototype property for getFormalName is not defined here

Person4.prototype.getFullName = function () {
  return this.fname + " " + this.lname;
};

var vik = new Person4("Vikram", "Jeena");
console.log(vik);
console.log(vik.getFullName());

// why are we adding method to the prototye instead inside a function constructor
// from a efficiency standpoint, it's better to put your methods on the prototype because they only need one copy to be used.

Person4.prototype.getFormalName = function () {
  return this.lname + ", " + this.fname;
};

console.log(nik.getFormalName());

console.log(
  "------------ Object.create and pure prototypal inheritance------------"
);

// polyfill
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error(
        "Object.create implementation" + " only accepts the first parameter."
      );
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var person = {
  firstname: "Default",
  lastname: "Default",
  greet: function () {
    return "Hi " + this.firstname;
  },
};

var john = Object.create(person);
john.firstname = "John";
john.lastname = "Doe";
console.log(john);
