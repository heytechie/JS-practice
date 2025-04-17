// creating object 
// const symnew = symbol(key1)
const newobj = {
    name : "Tanishk",
    age : 20,
    location : "Amravati",
    // [symnew] : "two"
}
// how we access object
//1
console.log(newobj.name);
//but this wont work in various things like symbols
// console.log(newobj.symnew);
//2 
console.log(newobj["name"]);
// console.log(newobj[symnew]);
console.log(newobj);




