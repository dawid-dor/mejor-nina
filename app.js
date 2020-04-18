// Create a random number for Girl's constructor 2nd argument
const randomNumber = (array) => Math.floor(Math.random() * Math.floor(array.length));

// Variables ----

// Game Variables
let firstGirlScore = 0;
let secondGirlScore = 0;
let round = 1;

// Player score variables
let playerScore = 0;
let memoryScore = 0; //this is used to correctly change the color depending on the player answer (right/wrong)

// Grab the answers buttons
const girl1btn = document.getElementById('girl-1-btn');
const girl2btn = document.getElementById('girl-2-btn');

// Grab the start button
const startBtn = document.getElementById('start-btn');

// Grab the round counter span
let roundCounter = document.getElementById('round-count');

// Start the game
startBtn.addEventListener('click', main);

// Main function for starting the game (everything happens here)
function main() {
  // Hide every element of the intro page
  document.getElementById("finish").classList.add("none");
  document.querySelectorAll(".intro").forEach(element => (element.style.display = "none"));
  document.querySelectorAll(".game-phase").forEach(element => (element.style.display = "block"));

  // Loading bar to hide loading from API (with loading images from API)
  nextRound();

  //Event listener for the first answer button
  girl1btn.addEventListener("click", () => {
    // Set the memory score to the current player score for future comparison
    memoryScore = playerScore;
    // Decide if the player deserves the point
    compare(firstGirlScore, secondGirlScore, "first");

    if (playerScore > memoryScore) {
        // Change the color to green
      rightAnswer();
        // Wait 3 seconds and then continue
      sleep(3000).then(() => {
        //   If the game didn't reach the end, do this
        if (round < 10) {
            // Set the background to white again
          colorReset("right-answer");
            // Update the round variable and show it on the screen
          round++;
          roundCounter.textContent = `${round}`;
            // Same thing - show the loader and start loading from API
          nextRound();
        } else {
            // If the game has reached its 11th round, do this and finish the game (show the outro screen)
          finish();
        }
      });
      
        // Same thing but with setting background to red because the answer was incorrect
    } else {
      wrongAnswer();
      sleep(3000).then(() => {
        if (round < 10) {
          colorReset("wrong-answer");
          round++;
          roundCounter.textContent = `${round}`;
          nextRound();
        } else {
          finish();
        }
      });
    }
  });

  // Event listener for the second answer button - comments from above would be exactly the same here 
  girl2btn.addEventListener("click", () => {
    memoryScore = playerScore;
    compare(firstGirlScore, secondGirlScore, "second");
    if (playerScore > memoryScore) {
      rightAnswer();
      sleep(3000).then(() => {
        if (round < 10) {
          colorReset("right-answer");
          round++;
          roundCounter.textContent = `${round}`;
          nextRound();
        } else {
          finish();
        }
      });
    } else {
      wrongAnswer();
      sleep(3000).then(() => {
        if (round < 10) {
          colorReset("wrong-answer");
          round++;
          roundCounter.textContent = `${round}`;
          nextRound();
        } else {
          finish();
        }
      });
    }
  });
}

// Set the API from class and utilize the random number from the first row
function refresh(){
    let random1 = randomNumber(girlsDatabase);
    let random2 = randomNumber(girlsDatabase);

    if(random1 === random2){
        random2 = 69;
    } else {
        const girl1 = new Girl(girlsDatabase, random1);
        const girl2 = new Girl(girlsDatabase, random2);
        
        girl1.setGirlCard('girl-1-img', 'girl-1-name');
        girl2.setGirlCard('girl-2-img', 'girl-2-name');

        firstGirlScore = girl1.getScore();
        secondGirlScore = girl2.getScore();
    
    }
}

// Function taken from some website - it helps with screen transition (screen will stay red/green for the set amount of time)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// Function to set the background to green (for the right answer)
function rightAnswer(){
    document.body.classList.add('right-answer');
}

// Function to set the background to green (for the wrong answer)
function wrongAnswer(){
    document.body.classList.add('wrong-answer');
}

// Functino to reset the color of the background back to white
function colorReset(className){
    document.body.classList.remove(`${className}`);
}

// Function to compare scores of the girls shown on the screen (3rd argument is the button - first or second / left or right)
function compare(score1, score2, choice){
    if (choice === 'first'){
        if(score1 > score2) playerScore += 1;
        
    } else if (choice === 'second'){
        if(score1 < score2) playerScore += 1;
    }
}

// Function to show the loading bar and get the API loading
function nextRound(){
    setTimeout(refresh, 2000);
    loader()
    setTimeout(loaded, 4000);
}

// Functions to set the visibility of the loader
function loader(){
    document.querySelector('.loading').style.display ='block';
}
function loaded(){
    document.querySelector('.loading').style.display ='none';
}

// Function of the outro screen
function finish(){
    // Reset the screen to white after the last answer
    colorReset('wrong-answer');
    colorReset('right-answer');
    // Hide the game phase elements
    document.querySelectorAll('.game-phase').forEach(element => element.style.display ='none');
    // Show the outro page
    document.getElementById('finish').classList.remove('none');
    // Grab the smirk comment
    const witty = document.getElementById('comment');
    // Show the score the player has obtained
    document.getElementById('player-score').textContent = `${playerScore}`;

    // Depending on the amount of points the player gotten, he will receive different remark
    if(playerScore <= 3){
        witty.textContent = "The audience wasn't pleased."
    } else if(playerScore > 4 && playerScore <= 6){
        witty.textContent = "Not bad!"
    } else if(playerScore >= 7 && playerScore <= 9){
        witty.textContent = "Pretty good!"
    } else if(playerScore === 10){
        witty.textContent = "Flawless, good job!";
    }

    // Event listener for the outro button to refresh the page
   document.getElementById('refresh').addEventListener('click', () => location.reload());
}
