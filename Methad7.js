// Q.1 -> For given start of an array,change it to final form using splice 
let Month = ["january","july","march","august"];
console.log(Month);
console.log(Month.splice(0,1,"july","june",));
console.log(Month.splice(2,3,"march","august"));
console.log(Month);

// Q.2 -> Return the index of the "javaScript" from the given array ,if it was reversed

let Lang = ['c','C++','html','JavaScript','python','java','c#','sql'];
console.log(lang);
console.log(lang.reverse());
Lang.reverse().indexOf("JavaScript"); // 4


