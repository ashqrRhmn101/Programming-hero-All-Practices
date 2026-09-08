/** Problem -01 ( Divide the Asset ) */
// var area = 800;
//write your code here

var area = 15;
area = area / 2;
console.log(area);

/** Problem -02 ( Cycle or Laptop ) */
// var money = 10000;
//write your code here

var money = 9999;

if (money >= 45000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate ");
}

/** Problem -03 ( Medicine Planner ) */
// var lastDay = 11;
//write your code here

var lastDay = 6;

if (lastDay > 3 && lastDay <= 30) {
  for (var x = 1; x <= lastDay; x++) {
    if (x % 3 == 0) {
      console.log(x, "-", "medicine");
    } else {
      console.log(x, "-", "rest");
    }
  }
}

/** Problem 04 - (Delete / Store) */
// var fileName= "pdfData.jpg";
//write your code here

var fileName = "#exp.mp4";

if (fileName.includes("#")) {
  console.log("Store");
} else if (fileName.includes(".pdf")) {
  console.log("Store");
} else if (fileName.includes(".docx")) {
  console.log("Store");
} else {
  console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
// var student = { name: "jhanku", roll: 1014, department: "cse" };
//write your code here

var student = {
  name: "monu",
  roll: 99,
  department: "eee",
};

console.log(
  student.name + student.roll + "." + student.department + "@ph.ac.bd"
);

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
