const maleAkanNames = [
  "Kwame",
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi"
];
const femaleAkanNames = [
  "Ama",
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua"
];

function fetchFormData() {
  let form = document.forms[0];
  let day, month, year, gender;

  gender = form.gender.value;

  day = parseInt(form.day.value);
  month = parseInt(form.month.value);
  year = parseInt(form.year.value);

  return [gender, day, month, year];
}
/* The function calculates the day of the week from a specific date.*/
function calculateDayOfWeek(bD) {
  let [dayOfMonth, monthOfYear, yearOfBirth] = bD;
  let zeroBasedCentury, yearOfCentury;

  // Count Jan & Feb  as months 13 and 14 of the previous year.
  if (monthOfYear <= 2) {
    monthOfYear += 12;
    yearOfBirth -= 1;
  }

  // Split year to centuryCode & yearCode
  zeroBasedCentury = parseInt(yearOfBirth / 100);
  yearOfCentury = yearOfBirth % 100;

  let dayOfWeek =
    (dayOfMonth +
      parseInt(
        2.6 * (monthOfYear + 1) +
          yearOfCentury +
          parseInt(yearOfCentury / 4) +
          parseInt(zeroBasedCentury / 4) +
          5 * zeroBasedCentury
      )) %
    7;

  return dayOfWeek;
}

//This function derives the Akan name from the list above of a user according to their birthday and gender.
function deriveAkanName() {
  let formData = fetchFormData();
  let bD, userGender, dayOfWeek;

  [userGender, ...bD] = formData;
  dayOfWeek = calculateDayOfWeek(bD);

  if (userGender === "Male") {
    alert("Your Akan Name is: " + maleAkanNames[dayOfWeek]);
  } else {
    alert("Your Akan Name is: " + femaleAkanNames[dayOfWeek]);
  }
  return false;
}