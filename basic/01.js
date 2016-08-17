/*
题目：
  1. Write a JavaScript program to display the current day and time in the following format.
  Sample Output : Today is : Friday.
  Current time is : 4 PM : 50 : 22
*/
var today = new Date();
var week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六',];
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
var a = (h >= 12)? "PM":"AM";
console.log("Today is: "+week[today.getDay()]);
console.log("Current time is: "+h+" "+a+" : "+m+" : "+s);
