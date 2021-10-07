let currentDOB = new Date("This is not date.");
let retirementage = undefined;
function Retirementcal() {
  if (isNaN(currentDOB.getDate())) {
    currentDOB = new Date(
      window.prompt("Enter date in format of mm/dd/yyyyy ")
    );
    Retirementcal();
  }
  if (
    isNaN(retirementage) == true ||
    retirementage == undefined ||
    retirementage < 30 ||
    retirementage > 100
  ) {
    retirementage = Number(
      prompt(
        "Please enter retirement age between 30 and  100 enter only numeric: "
      )
    );
    Retirementcal();
  }
}
Retirementcal();
