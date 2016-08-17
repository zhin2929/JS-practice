/*
9. Write a JavaScript program to calculate days left until next Christmas.
*/


function getLeapYear(y) {
  if( y%400 === 0 || ( y%4 === 0 && y%100 !== 0 )) {
    return true;
  } else {
    return false;
  }
}

function getMonthDay(m) {
  switch (m) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
      break;
    case 2:
      return 28;
      break;
    default:
      return 30;
      break;
  }
}
var today = new Date(2016,11,28);
var sum = 0;
if(today.getMonth() == 11 && today.getDate() > 25) {
  sum += (31-today.getDate());
  today.setFullYear(today.getFullYear()+1);
  today.setMonth(0);
  today.setDate(1);
}

for(var i=today.getMonth()+1; i<12; i++) {
  monthDay = getMonthDay(i);
  if( getLeapYear(today.getFullYear()) && monthDay === 28) {
    monthDay += 1;
  }
  sum += monthDay;
}
if(today.getDate()>1){
  sum -= today.getDate();
}
sum += 25;
console.log("从今天距离圣诞节还有"+sum+"天");
