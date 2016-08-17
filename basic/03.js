/*
3. Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDay();
if (m<10) {
  m = '0'+m;
}
if (d<10) {
  d = '0'+d;
}
var nowDate  =[m,d,y];
console.log(nowDate.join('-'));
console.log(nowDate.join('/'));
// console.log(m+"-"d+"-"+y);
