// Objects and the dots
/*
var person = new Object();
person["firstname"] = "Nitin";
person["lastname"] = "Kumar";

var firstNameProperty = "firstname";

console.log(person);
console.log(person.firstname);
console.log(person[firstNameProperty]);
console.log(person.lastname);

person.address = new Object();

person.address.street = "111 Main st.";
person.address.city = "Hyderabad";
person.address.state = "TS";

console.log(person.address);
console.log(person.address.street);
console.log(person.address.state);
console.log(person["address"]["city"]);
*/

// Objects and object literals
/*
var person = {
  firstname: "Nitin",
  lastname: "Kumar",
  address: {
    street: "112, Peter st.",
    city: "Hyderabad",
    state: "TS",
  },
};

console.log(person["firstname"]);

person.address2 = {
  street: "11 St Louis st",
  city: "Bangalore",
};
console.log(person);
*/

// Objects literal and json
/*
var objLiteral = {
  name: "Kapil",
  isProgrammer: true,
};

// converting obj to json
var objStr = JSON.stringify(objLiteral);
console.log(objStr);

var jsonStr = '{ "fname" : "Sachin", "age" : "26" }';

// convert json to obj
var jsonObj = JSON.parse(jsonStr);
console.log(jsonObj);
*/

// objects and function
/*
function greet() {
  console.log("Hello !!");
}

greet.language = "english";

console.log(greet);
console.log(greet.language);
console.log(typeof greet);
*/

// function statement and function expression
/*
//example
var a = 3; // this is an expression
a === 3; // this is an expression

if (a === 3) {
} // this is an statement

greet(); // this can work here

// anonymousGreet(); // this will not work because of hoisting and Execution context creation phase only create variable and assign undefine to it

// function statement
function greet() {
  console.log("Hello from greet !!!");
}

greet();

// this is funcgtion expression
var anonymousGreet = function () {
  console.log("hello from ananymous Greet !!!");
};

anonymousGreet(); // this will work here
*/

// by Value and by reference
/*
//by value
var a = "Kpail";
var b;
b = a;

a = "sachin";
console.log("a: " + a);
console.log("b: " + b);

// by reference
var c = {
  greeting: "English",
};
var d;
d = c;

c.greeting = "Hola";

console.log("c: " + c.greeting);
console.log("d: " + d.greeting);

// by reference (even as parameter) works for ojbects and functions are object too.

function changGreet(ojb) {
  // console.log(ojb);
  ojb.greeting = "Hey there";
}

changGreet(d);

console.log("c: " + c.greeting);
console.log("d: " + d.greeting);

c = { greeting: "Hi" }; // here your are creating new object and assigning the new value

console.log("c: " + c.greeting);
console.log("d: " + d.greeting);
*/

// Objects, functions and 'this'
/*
function a() {
  console.log(this);
  this.someVariable = "i_am_a_var";
}

a();
console.log(someVariable);

var b = function () {
  console.log(this);
};

b();

var c = {
  name: "A c object",
  log: function () {
    this.name = "Updated the c object";
    this.isAvailable = true;
    console.log(this);
  },
};

c.log();

var d = {
  name: "A d object",
  log: function () {
    this.name = "Updated the d object";
    this.isAvailable = true;
    console.log(this);

    var setName = function (newName) {
      this.name = newName; // here is the problem as this is points to window object
      console.log(this);
    };

    setName("Again Updated, d object");
    console.log(this);
  },
};

d.log();

// Work around or solution to the d object problem
var e = {
  name: "A e object",
  log: function () {
    var self = this;
    this.name = "Updated the e object";
    self.isAvailable = true;
    console.log(self);

    var setName = function (newName) {
      self.name = newName; // problem's solution is with assign this to self
      //   console.log(self);
    };

    setName("Again Updated, e object");
    console.log(self);
  },
};

e.log();
*/

// arrays
/*
var arr1 = new Array();
arr1.push(1);
arr1.push("kapil");
console.log(arr1);

// array literals
var arr2 = [
  1,
  true,
  { name: "Nitin", age: 23 },
  function (name) {
    console.log("Im in arrays function, Hello:", name);
  },
  "Departmentals",
];
console.log(arr2);
arr2[3](arr2[2].name);
*/

// arguments and spread
/*
function greet(firstName, lastName, language) {
  var language = language || "en"; // another way of setting default instead of function parameter

  if (arguments.length === 0) {
    console.log("No argument passed");
    return;
  }
  console.log(arguments);
  console.log(firstName);
  console.log(lastName);
  console.log(language);

  if (arguments.length == 5) {
    console.log("forth argument: " + arguments[3]);
    console.log("next argument: " + arguments[4]);
  }

  console.log("--------------");
}

function greetAnotherWayofArgument(firstName, lastName, language, ...others) {
  var language = language || "en"; // another way of setting default instead of function parameter

  if (arguments.length === 0) {
    console.log("No argument passed");
    return;
  }
  console.log(arguments);
  console.log(firstName);
  console.log(lastName);
  console.log(language);

  console.log("others: ", others);

  console.log("--------------");
}

greet();
greet("kapil");
greet("kapil", "Sharma");
greet("kapil", "Sharma", "es");

// greet("kapil", "Sharma", "es", "mumbai", "112 state st.");

greetAnotherWayofArgument("kapil", "Sharma", "es", "mumbai", "112 state st.");
*/

// IIFE's immediately invoded function expression.
/*
// function statement
function greet(name) {
  console.log("hello", name);
}

greet("kapil");

// function expression
var greetFunc = function (name) {
  console.log("Hola", name);
};

greetFunc("Kapil");

// using an Immediate invoking funcrion expression
var greeting = (function (name) {
  console.log("in IIFE");
  return "Hi " + name;
})("Saambha");

console.log(greeting);

var firstName = "Sachin";

// this is inline IIFE's more usable in almost frameworks
(function (name) {
  var greeetingText = "In IIFE: Swagatam";
  console.log(greeetingText + " " + name);
})(firstName);
*/

// IIFE in popular frameworks and safe coding
/*
var greeting = "Hola"; // this is the global variable

(function (global, name) {
  var greeting = "Hello";

  global.greeting = "Hi !!"; // mutating the greeting value in global object ie window

  console.log(greeting + " " + name);
})(window, "Foo");

console.log(greeting);
*/

// Closure
/*
function greet(whatToSay) {
  return function (name) {
    console.log(whatToSay + " " + name);
  };
}

greet("Hi")("Jahan panah");
//or
var callFunc = greet("Hello");
callFunc("Ajemo sahanshah");

// another example

function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

var bf = buildFunctions();
bf[0](); // print 3
bf[1](); // print 3
bf[2](); // print 3

// how can we fix the above closure example
// this is with es6
function buildFunctions1() {
  var arr = [];

  for (let i = 0; i < 3; i++) {
    // what happend with let variable that's created is scoped to the block inside these curly braces. So every time the for loop runs there will be a new variable in memory. And it will be segmented in the side of memory of this execution context so that when this function is called, it would be pointing each time at a different spot within that memory. These are subsegmented essentially as separately scoped variables.
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

var bf1 = buildFunctions1();
bf1[0]();
bf1[1]();
bf1[2]();

// how can we fix the above closure example
// this is with old js
function buildFunctions2() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    // we can call the function with IIFE
    arr.push(
      (function (j) {
        // what it will do it will create a new execution context every time for each array element
        return function () {
          console.log(j);
        };
      })(i)
    );
  }

  return arr;
}

var bf2 = buildFunctions2();
bf2[0]();
bf2[1]();
bf2[2]();

*/

// another exaples of closures in frameworks

function makeGreeting(language) {
  return function (fname, lname) {
    if (language === "en") {
      console.log("Hello", fname, lname);
    }

    if (language === "es") {
      console.log("Hola", fname, lname);
    }
  };
}

var englishGreet = makeGreeting("en");
var spanishGreet = makeGreeting("es");

englishGreet("Kapil", "Sharma");
spanishGreet("Rohit", "Bajwa");
