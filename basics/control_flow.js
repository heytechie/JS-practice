// IF ELSE is easy
// lets learn switch case
// switch (key){
//     case value:
//             code block
//             break;
//     default:
//             code block
//             break;
// }
// const month = 8;
// switch (month) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;

//   default:
//     console.log("Invalid month");
//     break;
// }
// Truthy and Falsy values
//falsy values : 0, "", null, undefined, NaN, false
//truthy values : 1, " ", [], {}, true, "0", "false", -1, Infinity, -Infinity, function(){}
// Nullish coalescing operator : ??
let val1, val2;
val1 = null ?? 5;
console.log(val1); // 5
val2 = 0 ?? 5;
console.log(val2); // 0
//terinary operator : ? :
//condition ? true : false
const price = 100;
price >= 100 ? console.log("expensive") : console.log("cheap");
