// //Primitive /Value Types
   //String, Number, Boolean, Undefined, Undefined, NULL, Symbol
   //Js - Dynamic language
   //Reference Type - Object, Arrays, Functions

// // String
//  let x = "edu";
//  console.log(x);
//  console.log(typeof(x));
//  x = 5;
//  console.log(x);

//  //number
//  let y = 1;
//  console.log(y);
//  console.log(typeof(y));


// //boolean
//  let z = true;
//  console.log(z);
//  console.log(typeof(z));

//  //undefined
//  let w;
//  console.log(w);
//  w=9;
//  console.log(typeof(w));


//onject
let course = {
    title:"HHLD",
    description:"project",
    rating:5
};
console.log(course);
console.log(typeof(course));


console.log(course.title); // called notation
console.log(course['description']); // packet notation


let p = {name: "kabir"};
let q = p;

p.name = "ecosys";

console.log(p);
console.log(q);