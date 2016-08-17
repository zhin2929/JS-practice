/*
4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
*/

var a = 5, b = 6, c = 7;
var s = (a+b+c)/2;
var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(area);
