
    
    var wins = 0; //track wins
    var losses = 0; //track losses
    var guessWrong = 0; //tracks wrong guesses
    var maxWrongGuess = 6; //maximum amout of wrong guesses allowed
    var randShow = shows[Math.floor(Math.random()*shows.length)];  //generates random show 
    var usedChars = []; //
    
    // //if you solve the game before you run out of guesses, create function to add wins
    // //create function to have a max of 6 guesses, when at 6 guesses you lose the game and your losses go up by one.
    
    
    // //tests
    alert(randShow); 
    
    
    // create an element
    var newDiv = document.createElement("div")
    newDiv.innerHTML = "<h3>hello sucka</h3>"
    targetDiv.appendChild(newDiv)
    
    // takes in 2 values, name & string/ source for images/videos/change HTML through javascript
    
    targetDiv.setAttribute("class", "changeColor")
    
    document.getElementById("show").innerHTML = randShow;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    
    //add on.click, getElementById for new word, button # newShow
    
    // need to declare function for getting the right hint
    // function getHint() {
    //     document.getElementById("hintBtn").innerHTML = "hello";
    // }
    
    var answerArray = [];
    for (var i = 0; i < randShow.length; i++) {
      answerArray[i] = "_";
    }
    
    for (var i = 0; i < randShow.length; i++) {
      answerArray[i] = "_";
    }
    
    var remainingLetters = randShow.length;
    
    //loop adding correct letter
    document.onkeyup= function (event) {
        var guess = event.key
    }
    
    //shows underscore for letters instead of blank

