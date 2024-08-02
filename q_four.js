/*
Q. For a given array with marks of students [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class.
*/

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let value of marks) {
  sum += value;
}
let ave = sum / marks.length;
console.log(`The average of marks = ${ave}`);
