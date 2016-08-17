/*
11. Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
*/

var c = 60;
var f = 45;
console.log(c+"°C 等于"+(c*(9/5)+32)+"°F");
console.log(f+"°F 等于"+(f-32)/(9/5)+"°C");
