// hoisting
/*
console.log(a); // undefine because of Execution context (creation phase  memory for vars and functions)
b();

console.log(c); // Cannot access 'c' before initialization

var a = "Hello World!!";
const c = "Welcome to c!!";

function b() {
  console.log("in function b!!");
}
*/

// function context and variable environment
/*
function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

*/

// The Scope Chain

/*
function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();
*/

/*
function a() {
  function b() {
    console.log(myVar);
  }
  var myVar = 2;
  b();
}

var myVar = 1;
a();
*/

// Scope , ES6 and let
// let -> provide the block scoping

// About Asynchronous callbacks
/* 
function wait3Seconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log("finished wait function");
}

function clickHandler() {
  console.log("click event happened!");
}

// listen the click event
document.addEventListener("click", clickHandler);

wait3Seconds();
console.log("finished the global execution");

setTimeout(() => {
  console.log("in set time out happend!!!");
}, 2000);

*/

// precedence and associativity
/*
var a = 2,
  b = 3,
  c = 4;
a = b = c;
console.log(a);
console.log((b = c));

// coparison operator

console.log(1 < 2 < 3); // this is fine - associativity from left to right
console.log(3 < 2 < 1); // but how this returns true

console.log(3 < 2 < 1); // = console.log(3 < 2 < 1); and  its equivaliet to console.log( false < 1)

// and when coersion happen like
console.log(Number(false));
console.log(Number(true));

// now it becames  --> console.log( false < 1)  --> console.log( 0 < 1)

*/

// another example
var a = 0;
var b = false;

if (a == b) {
  console.log(" a is equal to b with coersion princple");
} else {
  console.log(" Not equal. !!");
}

// strict equality
if (a === b) {
  console.log(" a is equal to b with strict equality");
} else {
  console.log(" Not equal with strict equality operator !!");
}
