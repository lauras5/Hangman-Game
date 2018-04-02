$(document).ready(function(){
    var wordArr = [
        'handsome', '', 'yay', 'hangman','hard'
    ]
    var chosenWord = ''
    var wordLetters = ''
    var underScores = []
    var wordArea = $(".display")
    var guesses 

    function reset() {
        chosenWord = wordArr[Math.floor(Math.random() * wordArr.length)]
        for (var i = 0; i < chosenWord.length; i++) {
            underScores.push("_ ")
        }
        guesses = 10
        wordArea.html(underScores)
        $(".wrongGuesses").html(' ')
        $(".guessesLeft").html("You have " + guesses + " guesses left!")
        $("#hint").html("Press the button to get a hint!")
        console.log("your random word is " + chosenWord)
    }

    $("#newGame").on("click", function (){
        reset()
    })

    if(guesses > 0) {
        $(document).on('keyup', function(e) {
            userGuess = String.fromCharCode(e.keyCode).toUpperCase()
            if (e.which <=90 && e.which >= 48) {
                for (var j = 0; j < chosenWord.length; j++) {
                    if ( chosenWord[j] === userGuess) {
                        underScores[j] === chosenWord[j]
                        underScores.join(' ')

                        wordArea.push(userGuess)
                        if(underScores[j] = chosenWord[j]) {
                            alert('you win!')
                            reset()
                        }
                    }
                }
            }
        })
    }
})