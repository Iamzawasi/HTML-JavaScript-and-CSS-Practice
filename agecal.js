// function agecalculator() {
//   let birthdatetxt = document.getElementById("birthDate").value;
//   let futuredatetxt = document.getElementById("futureDate").value;
//   let birthdate = new Date(birthdatetxt);
//   let futureDate = new Date(futuredatetxt);

//   let theDifference = futureDate.getFullYear() - birthdate.getFullYear();
//   if (theDifference < 0 || theDifference == 0 || isNaN(theDifference) == true) {
//     alert(
//       "Birth year cannot be equal to or greater than future date, Please check the input values"
//     );
//   } else {
//     let theDiffrence2 = theDifference + 1;
//     alert(
//       "On " +
//         futureDate.getFullYear() +
//         " You would be " +
//         theDifference +
//         " or " +
//         theDiffrence2 +
//         " years Old"
//     );
//   }
// }
//newString = dummyString.replace('_','').replace('^', '').replace('$','');
let phoneNumber = "";
function phonnumbervalidator() {
  phoneNumber = prompt("Enter Phone Number ");
  //phoneNumber=phoneNumber.replace(" ", "-").replace("-","").replace("/", "");
  for (let i = 0; i >= phoneNumber.length; i++) {
    phoneNumber = phoneNumber.replace(/[^0-9]/, "");
  }
  if (phoneNumber.length <= 10) {
    alert("is valid " + phoneNumber);
  }
}
phonnumbervalidator();
