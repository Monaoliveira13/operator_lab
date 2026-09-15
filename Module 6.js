const scores = [85, 87, 90, 94, 88];
const avg = scores.reduce((sum, score) => sum + score, 0) / scores.length;
let result;
if (avg > 95) {
  result = "Meeting Expectations";
} else {
  result = "Needs Improvement";
}
console.log(`Average: ${avg} - ${result}`);
