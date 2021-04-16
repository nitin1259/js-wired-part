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
