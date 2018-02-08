/*

Assignment 3 - html and javascript simple psychic game - guess a letter 
               a bit of bootstrap style added

Al Curry  February 8, 2018

GWU full stack development program  

this module invoked by index.html 

pseudo code for this module 

    GET A RANDOM LETTER
    GET A GUESS 
    DECREMENT LEFT
     IF GUESS = LETTER
        WIN ++
        ADD LETTER TO GUESS LIST
        RESET
     ELSE 
        ADD LETTER TO GUESS LIST

     AFTER 9 TRIES, IF NOT WIN, LOSE, RESET

  */

  var alphaIdx = 0;
  var wins = 0;
  var losses = 0;
  var alphaStr = "abcdefghijklmnopqrstuvwxyz";
  var gCnt = 9;
  var guessList = [];
  var endText = "";
  var gameCount = 0;
  var reset = false;

  function getAlphaIdx() {
        return Math.floor(Math.random() * 25);
  }
  function gameOver() {
        gameCount++;
        reset = true;
        document.getElementById("overText").innerHTML = endText;
  }

  /* random number  0 - 25 */
  alphaIdx = getAlphaIdx();
  console.log("P random index : " + alphaIdx + " alpha char: " + alphaStr[alphaIdx]);

  document.addEventListener('keypress', (event) => {
    const keyName = event.key;
  
    console.log('keypress event\n\n' + 'key: ' + keyName);

    /* Reset, after first game */
    /*  occurs on first key press after win or loss */
    if (gameCount > 0 && reset === true) {
       gCnt = 9
       guessList = [];
       document.getElementById("left").innerHTML = gCnt;
       document.getElementById("guessList").innerHTML = guessList;
       document.getElementById("overText").innerHTML = "";
       alphaIdx = getAlphaIdx();
       console.log("New game RND idx : " + alphaIdx + " alpha char: " + alphaStr[alphaIdx]);
       reset = false;
    }
    document.getElementById("left").innerHTML = --gCnt;
 
      var guess = event.key.toLowerCase();
      console.log("guess = " + guess);

      if (guess === alphaStr[alphaIdx]) {

        document.getElementById("wins").innerHTML = ++wins;
        gCnt = 0;
        document.getElementById("left").innerHTML = gCnt;
        endText = guess + " wins"
        gameOver();

      } else {
         if (gCnt === 0) {

          document.getElementById("losses").innerHTML = ++losses;
          endText = "no more guesses - winner was " + alphaArray[alphaIdx];
          gameOver();
         }
      }

      guessList.push(guess);

      document.getElementById("guessList").innerHTML = guessList;

      console.log(" wins: " + wins + " losses: " + losses);

  });

