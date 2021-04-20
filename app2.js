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
