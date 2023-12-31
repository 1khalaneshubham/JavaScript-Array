let colors = ["red","yello","Orange","Pink","White"];
console.log(colors);
// Array(5) [ "red", "yello", "Orange", "Pink", "White" ]

console.log(colors.splice());
// Array []

console.log(colors.splice(2));
// Array [ "red", "yello" ]


console.log(colors.splice(2,3));
// Array [ "red", "yello" ]


console.log(colors.splice(-2));
// Array []

console.log(colors.splice(0,1,"Black","Grey"));
// Array(6) [ "Black", "Grey", "yello", "Orange", "Pink", "White" ]







