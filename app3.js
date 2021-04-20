console.log("--------- typeof and instanceof -----------");

var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // weird!
console.log(Object.prototype.toString.call(d)); // better!

function Person(name) {
  this.name = name;
}

var e = new Person("Jane");
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...

var z = function () {};
console.log(typeof z);

console.log("--------- Strict mode-----------");

var person;
persom = {};
console.log(persom);

function useSomeStrictness() {
  //   "use strict";

  var person1;
  persom1 = {};
  console.log(persom1);
}

useSomeStrictness();

function useSomeStrictness1() {
  "use strict";

  var person2;
  persom2 = {};
  console.log(persom2);
}

useSomeStrictness1();

// we can use strict mode either global or with a function execution context
