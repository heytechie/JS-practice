// creating object
// const symnew = symbol(key1)
// const newobj = {
//   name: "Tanishk",
//   age: 20,
//   location: "Amravati",
//   // [symnew] : "two"
// };
// how we access object
//1
// console.log(newobj.name);
//but this wont work in various things like symbols
// console.log(newobj.symnew);
//2
// console.log(newobj["name"]);
// console.log(newobj[symnew]);
// console.log(newobj);
// creating objects inside objects
const newobj = {
  name: "Tanishk",
  age: 20,
  location: "Amravati",
  // [symnew] : "two"
  address: {
    city: "Amravati",
    state: "Maharashtra",
    country: "India",
  },
};
//accessing objects inside objects
// console.log(newobj.address.city);
// joining objects
const newobj2 = {
  1: "a",
  2: "b",
  3: "c",
};

const newobj3 = {
  4: "d",
  5: "e",
  6: "f",
};
// using assign method
// const newobj4 = Object.assign({}, newobj2, newobj3);
// console.log(newobj4);
//using spread operator(prefered)
// const newobj5 = { ...newobj2, ...newobj3 };
// console.log(newobj5);
// extracting objects keys(array of keys)
// const keys = Object.keys(newobj2);
// console.log(keys);
// extracting objects values(array of values)
// const values = Object.values(newobj2);
// console.log(values);
// extracting objects entries(array of entries)
// const entries = Object.entries(newobj2);
// console.log(entries);
