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
