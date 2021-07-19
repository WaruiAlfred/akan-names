function deriveAkanName(){
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = document.getElementById("year").value;
  let gender = document.getElementById("gender").value;
//Calculation of day of the week a user was born
  let monthCalc = (2.6*(month+1));
  let centuryDigits = parseInt(year.slice(0,2));
  let centuryCalc =  (((centuryDigits/4)-2)*(centuryDigits-1));
  let yearDigits = parseInt(year)%100;
  let yearCalc = (1.25*yearDigits); 
  let dayOfWeek = ((centuryCalc + yearCalc + monthCalc + day)%7);
  let weekDay = (dayOfWeek.toFixed());

  const maleAkanNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",  
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];
  const femaleAkanNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
  ];
//Derivation of Akan name according to gender
  if(gender === "Male"){
    alert("Your Akan Name is " + maleAkanNames[weekDay] + ".");
  } else {
    alert("Your Akan Name is " + femaleAkanNames[weekDay] + ".");
  }

  return false;

}