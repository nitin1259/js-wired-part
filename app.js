console.log(a); // undefine because of Execution context (creation phase  memory for vars and functions)
b();

console.log(c); // Cannot access 'c' before initialization

var a = "Hello World!!";
const c = "Welcome to c!!";

function b() {
  console.log("in function b!!");
}
