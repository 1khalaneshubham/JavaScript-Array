let primary = ["red","yellow","blue"];
// undefined

let secondary = ["orange","green","violet"];
// undefined

primary.concat(secondary);
// Array(6) [ "red", "yellow", "blue", "orange", "green", "violet" ]

secondary.concat(primary);
// Array(6) [ "orange", "green", "violet", "red", "yellow", "blue" ]

​let allcolors = primary.concat(secondary);
// undefined

allcolors
// Array(6) [ "red", "yellow", "blue", "orange", "green", "violet" ]

