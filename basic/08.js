/*
8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
*/

var i = Math.ceil(Math.random()*10);
var input = prompt("请猜测一个数：");
if(input === i) {
  alert("猜对了");
} else {
  alert("猜错了,正确数字是"+i);
}
