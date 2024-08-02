/* 
Q. Create a game where your start with any random number. Ask
the user to keep guessing the game number untill the user enter correct 
value.
*/
let gameNumber = 50;
let userNumber = prompt("Guess the Number : ");

while (userNumber != gameNumber) {
  userNumber = prompt(
    "You enter the wrong number. Again enter the righe number : "
  );
}
console.log("Congratulations, you enter the correct number...!!");
