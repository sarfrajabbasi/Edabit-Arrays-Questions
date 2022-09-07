const  object =  { 1: "January",    2: "February", 3: "March",4: "April",5: "May",6: "June",7: "July",8: "August",9: "September", 10: "October",11: "November",12: "December"}
    
function monthName(num) {
 if(num !==0 || num !== '' || num !==NaN || num !== undefined || num !==[]){
    return object[num];
 }
}

function monthName(num) {
	let response;
  let month = num;
  switch (month) {
    case 1:
      response = "January";
      break;
    case 2:
      response = "February";
      break;
    case 3:
      response = "March";
      break;
    case 4:
      response = "April";
      break;
    case 5:
      response = "May";
      break;
    case 6:
      response = "June";
      break;
    case 7:
      response = "July";
      break;
    case 8:
      response = "August";
      break;
    case 9:
      response = "September";
      break;
    case 10:
      response = "October";
      break;
    case 11:
      response = "November";
      break;
    case 12:
      response = "December";
      break;
    default:
      response = "No month selected";
      break;
    
  }

  return response;
}
console.log(monthName(1), "January");
console.log(monthName(2), "February");
console.log(monthName(3), "March");
console.log(monthName(4), "April");
console.log(monthName(5), "May");
console.log(monthName(6), "June");
console.log(monthName(7), "July");
console.log(monthName(8), "August");
console.log(monthName(9), "September");
console.log(monthName(10), "October");
console.log(monthName(11), "November");
console.log(monthName(12), "December");



