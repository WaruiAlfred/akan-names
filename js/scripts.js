const form = document.getElementById("form");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const male = document.getElementById("male");
const female = document.getElementById("female");

function defineAkanName(){
  //obtain input values
  let dayValue = parseInt(day.value);
  let monthValue = parseInt(month.value);
  let yearValue = year.value;
  let maleValue = male.value;
  let femaleValue = female.value;

  //calculation of day of the week the user was born
  let monthCalc = (26*(monthValue+1)/10);
  let centuryDigits = parseInt(yearValue.slice(0,2));
  let centuryCalc =  ((centuryDigits/4) -2*centuryDigits-1);
  let yearDigits = parseInt(yearValue%100);
  let yearCalc = (5*yearDigits/4); 
  //actual day of the week
  let dayOfWeek = (centuryCalc + yearCalc + monthCalc + dayValue)%7;
}