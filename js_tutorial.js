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
// let course = {
//     title:"HHLD",
//     description:"project",
//     rating:5
// };
// console.log(course);
// console.log(typeof(course));


// console.log(course.title); // called notation
// console.log(course['description']); // packet notation


// let p = {name: "kabir"};
// let q = p;

// p.name = "ecosys";

// console.log(p);
// console.log(q);

//Array
//Reference Types - Object, Arrays, Functions
//Arrays and Functions are objects

// let courses = ["hld", "lld", "dsa", 6, true, null];

// console.log(courses[3]);
// console.log(courses[4]);
// console.log(courses[5]);

// console.log(typeof(courses));


//Functions
// function createCourses(coursename) {
//     console.log('creationg ' + coursename);
// }

// createCourses('hld');
// createCourses('Cyber Cecurity');

//Execution Context
// 1. memory phase - variable environment
// 2. code phase - thread of execution
//hoistion -> before
// function createCourses(coursename) {
//     console.log('creationg ' + coursename);
// }

// createCourses('hld');
// createCourses('Cyber Cecurity');


//window
// console.log(a);
// console.log(this.a);
// console.log(window.a);

// var a = 10;

// console.log(a);

//Block scope
function hello() {
    let x = 10;   // the scope is within in function
    console.log(x);
}
// console.log(x); then it's not working because the scope is within in function.
hello();
