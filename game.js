
    
    //Global variable.
    var words = [
    "PHILOSOPHY", 
    "BILL", 
    "ROSALYN", 
    "BABYSITTER", 
    "SPACEMAN", 
    "SPIFF", 
    "SUSIE", 
    "TREEHOUSE",
    "BIKE", 
    "SNOWMAN", 
    "SLED", 
    "SCIENTIFIC", 
    "PROGRESS", 
    "BOINK", 
    "DAYS", 
    "PACKED", 
    "TUNA", 
    "TELEVISION",
    "WAGON",
    "CALVINBALL"
    ]; 

    const tryLimit = 10;

    var usedLetters = [];        
    var wordInPlay;           
    var currentWord = [];          
    var guessesLeft = 0;       
    var hasFinished = false;     
    var nmbWins = 0;
   
    
    
    var winSound = new Audio('holy_cow_x.wav');
    var loseSound = new Audio('willy_wonka_you_lose.wav');

    function gameReset(){
        guessesLeft = tryLimit;

        wordInPlay = Math.floor(Math.random() * (words.length));

        usedLetters = [];
        currentWord = [];

        for (var i = 0; i < words[wordInPlay].length; i++) {
            currentWord.push("_");
        };
            
            
            
            
            updateDisplay();
        };

    function updateDisplay() {
        document.getElementById("nmbWins").innerText = nmbWins;
        var currentWordText = "";
        for (var i = 0; i < currentWord.length; i++) {
            currentWordText += currentWord[i];
        }

        document.getElementById("wordInPlay").innerText = wordInPlayText;
        document.getElementById("guessesLeft").innerText = guessesLeft;
        document.getElementById("usedLetters").innerText = usedLetters;
    };

    function checkGuess(letter){
        var positions = [];

        for (var i = 0; i < words[wordInPlay].length; i++) {
            if(words[wordInPlayIndex][i] === letter) {
                positions.push(i);
            }
        }
        if (positions.length <= 0) {
            guessesLeft--;
        } else {
            for(var i = 0; i < positions.length; i++) {
                currentWord[positions[i]] = letter;
            }
        }
    };
    function isWin() {
        if(currentWord.indexOf("_") === -1) {
            
            document.getElementById("pressKeyTryAgain").style.cssText= "display: block"; //ADD PRESS KEY TRY AGAIN
            nmbWins++;
            winSound.play();
            hasFinished = true;
        }
    };

    function isLoss() {
    if(guessesLeft <= 0) {
        loseSound.play();
        
        document.getElementById("pressKeyTryAgain").style.cssText = "display:block";
        hasFinished = true;
    }
}

function takeWhack(letter) {
    if (guessesLeft > 0) {
        
        if (usedLetters.indexOf(letter) === -1) {
            usedLetters.push(letter);
            checkGuess(letter);
        }
    }
    
};

document.onkeydown = function(event) {
    
    if(hasFinished) {
        gameReset();
        hasFinished = false;
    } else {
        
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            
            takeWhack(event.key.toUpperCase());
            updateDisplay();
            isWin();
            isLoss();
        }
    }
};









//  var word = words[Math.floor(Math.random() * words.length)];
//  // Set up the answer array
//  var answerArray = [];
//  for (var i = 0; i < word.length; i++) {
//  answerArray[i] = "_";
//  }
//  var remainingLetters = word.length;
//  // The game loop
//  while (remainingLetters > 0) {
//  // Alert them to how close to doom they are.
//  document.write(answerArray.join(" "));
//  // Get a guess from the player
//  var guess = prompt("Take a guess, or hit cancel if your mother raised a quitter.");
//  if (guess === null) {
//  // Break out of this popsicle stand.
//  break;
//  } else if (guess.length !== 1) {
//  document.write("Please enter a single letter.");
//  } else {
//  // Update with the player's guess.
//  for (var j = 0; j < word.length; j++) {
//  if (word[j] === guess) {
//  answerArray[j] = guess;
//  remainingLetters--;
//  };
//  };
//  };

// document.write(answerArray.join(" "));
// document.write("Woo-hoo! The answer was " + word + " .");

