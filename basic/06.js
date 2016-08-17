/*
6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
*/
function getLeapYear(y) {
  if( y%400 === 0 || ( y%4 === 0 && y%100 !== 0 )) {
    return true;
  } else {
    return false;
  }
}

var y = 2000;
console.log(y+"年是闰年吗  "+getLeapYear(y));
