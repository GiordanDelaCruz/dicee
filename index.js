/** OVERVIEW: This program rolls 2 dice and determines the winner based on the highest roll
  *           in JavaScript.
  *
  *  Note: This is a just a coding exercise/challenge for "The Complete 2020 Web Development
  *        Bootcamp Course" on Udemy by Angela Yu.
  */

/*************************************************************************************************/
/*                                    Instance Variables                                         */
/*************************************************************************************************/
var pathOfHeading;
var pathOfDice1;
var pathOfDice2;
var randNum1;
var randNum2;

pathOfHeading = document.querySelector(".container h1");
pathOfDice1 = document.querySelector(".dice .img1");
pathOfDice2 = document.querySelector(".dice .img2");

/*************************************************************************************************/
/*                                         Methods                                               */
/*************************************************************************************************/

/** This conditional statement checks whether the user refreshes the page. If true, then it will
 *  generate random numbers & call the generateDice() & determineWinner() methods.
 *
 */
if (performance.navigation.type == 1){
  randNum1 = Math.floor((Math.random() * 6)) + 1;
  randNum2 = Math.floor((Math.random() * 6)) + 1;

  generateDice(pathOfDice1, randNum1);
  generateDice(pathOfDice2, randNum2);
  determineWinner(randNum1, randNum2);
  }

/** This method selects a random image of a dice to display.
 *
 * @param     pathOfDice      The path of the dice image to chage
 * @param     randNum         A random number used to roll the dices
 */
function generateDice(pathOfDice, randNum){

  switch(randNum){
    case 1:
      pathOfDice.src = "images/dice1.png";
      break;
    case 2:
      pathOfDice.src = "images/dice2.png";
      break;
    case 3:
      pathOfDice.src = "images/dice3.png";
      break;
    case 4:
      pathOfDice.src = "images/dice4.png";
      break;
    case 5:
      pathOfDice.src = "images/dice5.png";
      break;
    case 6:
      pathOfDice.src = "images/dice6.png";
      break;
  }
}// End of generateDice()


/** This method determine the winner between the 2 dice rolls
 *  & sets the header text to display the winner
 *
 * @param     randNum1         A random number used to determine the winner
 * @param     randNum2         A random number used to determine the winner
 */
function determineWinner(randNum1, randNum2){

  if(randNum1 === randNum2){
    pathOfHeading.textContent ="Tie!";
  }else if(randNum1 > randNum2){
    pathOfHeading.textContent ="Player 1 Wins!";
  }else{
    pathOfHeading.textContent ="Player 2 Wins!";
  }
}// End of determineWinner()
