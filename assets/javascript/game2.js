$(document).ready(function(){
    var shows = ["POKEMON", "SABRINA", "DOUG", "HEY ARNOLD", "NINJA TURTLES", "YUGIOH"]
    var show = shows[Math.floor(Math.random() * shows.length)]
    var letters = show.split("")
    var guesses = 10
    $(".guessesLeft").text("You have " + guesses + " guesses left!");
    var userLives = []
    $(".lives")
    var remainingLetters = letters.length
    var userGuess = []
    var answerArray = []
    for (var i = 0; i < letters.length; i++)
      answerArray[i] = "_ "

    $("#newGame").on("click", function(){
        show = shows[Math.floor(Math.random() * shows.length)]
        //displays word to guess as underscores
        guesses = 10
        var answerArray = []
        for (var i = 0; i < letters.length; i++)
          answerArray.push("_")
        $(".display").html(answerArray.join(" "))
        //resets lives on button click
        console.log(letters)
        console.log(answerArray)
        console.log(letters[2])
        console.log(guesses)
    })

    //gets letter on keyboard letter press
    $(document).on("keypress", function(){
        userGuess = String.fromCharCode(event.keyCode).toUpperCase()
        
        // console.log(userGuess)

        //while loop
        if (guesses > 0) {
            for (var j = 0; j < letters.length; j++) {
                // console.log(show[j])
                // console.log(show[2])
                if (letters[j] === userGuess) { 
                    answerArray.push(userGuess)
                    console.log(answerArray)
                    remainingLetters--
                    console.log(letters[j])
                }

                else if(letters[j] != userGuess) {
                    guesses--;
                    $(".guesses").append(userGuess + " ")
                    console.log(letters[j])
        
                }
//push wrong guesses
                if (guesses == 0) {
                    alert("YOU LOST!")
                    $(document).on("keypress", function() {
                        null
                    })
                }
                   
            }
            
        
        }
    })
})