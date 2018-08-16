
$(document).ready(function () {

    var words = ["RUGRATS", "DOUG", "DARIA", "POKEMON", "RECESS", "ANAMANIACS", "MATILDA", "DUCKTALES"]
    //returns random word
    var chosenWord = words[Math.floor(Math.random() * words.length)]
    var underScores = []
    var wrongGuesses = [] //store wrong guesses
    var guesses = 10 //guess max
    var wins = 0;
    var wrongGuesses = []
    var hints = ["Babies who do stuff", "Quail man's identity", "90's femenist", "Gotta Catch 'em all!", "playtime during school, not lunch", "They live in the WB tower", "Girl Genius", "Quack"]
    var hintLength = hints.length
    var chosenLet = []


    //hint button onclick function
    $("#hintBtn").on("click", function () {
        if (words[0] === chosenWord) {
            $("#hint").text(hints[0])
        }
        else if (words[1] === chosenWord) {
            $("#hint").text(hints[1])
        }
        else if (words[2] === chosenWord) {
            $("#hint").text(hints[2])
        }
        else if (words[3] === chosenWord) {
            $("#hint").text(hints[3])
        }
        else if (words[4] === chosenWord) {
            $("#hint").text(hints[4])
        }
        else if (words[5] === chosenWord) {
            $("#hint").text(hints[5])
        }
        else if (words[6] === chosenWord) {
            $("#hint").text(hints[6])
        }
        else if (words[7] === chosenWord) {
            $("#hint").text(hints[7])
        }
    })

    //new game function is acting as reset
    function reset() {
        wrongGuesses = []
        underScores = []
        guesses = 10

        $(".wrongGuesses").empty()
        $(".guessesLeft").html("You have " + guesses + " guesses left!")
        $(".display").empty()
        $("#hint").html("Press the button to get a hint!")

        chosenWord = words[Math.floor(Math.random() * words.length)]
        for (var i = 0; i < chosenWord.length; i++) {
            underScores.push("_ ")
        }
        $(".display").html(underScores)

        console.log("your random word is " + chosenWord)
    }

    function checkWin(completedWord) {
        if (completedWord === chosenWord) {
            wins++
            alert('You Win! Play again!')
            $(".wins").html("WINS : " + wins)
            reset()
        }
    }

    // click event for new game button
    $("#newGame").on("click", function () {
        reset()
    })

    if (guesses > -1) {

        //gets value when key is released
        $(document).on("keyup", function (e) {

            //changes char value to uppercase
            guess = String.fromCharCode(e.keyCode).toUpperCase()

            //excludes symbols and other keys
            if (e.which <= 90 && e.which >= 48) {

                //if the index is greater than -1
                if (chosenWord.indexOf(guess) > -1) {
                    var splitWord = chosenWord.split('')

                    //changes letters to underscores
                    for (j = 0; j < splitWord.length; j++) {
                        if (chosenWord[j] === guess) {
                            chosenLet.push(guess)
                            underScores[j] = chosenWord[j]
                            $(".display").html("<h2>" + underScores.join('') + "</h2>")

                            const completedWord = underScores.join('')

                            checkWin(completedWord)
                        }
                    }
                }
                else {
                    guesses--
                    $(".guessesLeft").html("You have " + guesses + " guesses left!")
                    wrongGuesses.push(guess)
                    $(".wrongGuesses").append(guess)
                    
                    if (guesses === 0) {
                        alert("You Lost! The answer was '" + chosenWord + "' ! Play again!!")
                        reset()
                    }
                }
            }
        })
    }
})