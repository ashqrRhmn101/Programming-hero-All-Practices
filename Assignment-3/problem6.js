/** Problem 06 :  (Current Salary )  */
// var experience = 30;
// var startingSalary = 45000;
//write your code here

var experience = 3;
var startingSalary = 15000;

if (
  startingSalary > 0 &&
  startingSalary <= 1000000 &&
  experience > 0 &&
  experience <= 50
) {
  for (var i = 1; i <= experience; i++) {
    startingSalary = startingSalary * 1.05;

  }
  console.log(startingSalary.toFixed(2));
}
