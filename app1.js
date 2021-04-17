// Objects and the dots

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
