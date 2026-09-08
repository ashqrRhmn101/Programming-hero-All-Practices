/** Problem -03 ( Medicine Planner ) */
// var lastDay = 11;
//write your code here

var lastDay = 6;

if (lastDay >= 3 && lastDay <= 30) {
  for (var x = 1; x <= lastDay; x++) {
    if (x % 3 == 0) {
      console.log(x, "-", "medicine");
    } else {
      console.log(x, "-", "rest");
    }
  }
}
