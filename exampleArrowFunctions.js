// var arr = ["piet","Jan","Koos"];
//
//
// //one statement:
// arr.forEach((el) => console.log('el',el));
//
//
// //multiple statements:
// arr.forEach((el) => {
//   console.log('el',el)
// });
//
//
// COOL : return something: (same syntax)
// var returnSomething = (something) => 'el' + something;
// console.log(returnSomething("Petestar"));
//
//
//
//
// //statement:
// () => console.log("hi");
// //statement executed:
// (() => console.log("hi"))();


function add(a,b){
  return a+b;
}

var addB = (a,b) => {return (a+b)};
var addA = (a,b) => a+b;


console.log(add(1,2));
console.log(add(10,20));
console.log(addA(1,2));
console.log(addA(10,20));
console.log(addB(1,2));
console.log(addB(10,20));
