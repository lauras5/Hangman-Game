$(document).ready(function(){
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var lettersLength = letters.length
    var words  = ["RUGRATS", "DOUG", "DARIA", "POKEMON", "RECESS", "ANAMANIACS", "CARMEN/SAN/DIEGO", "REN AND STIMPY", "THE SIMPSONS", "POWER RANGERS", "BEAVIS AND BUTTHEAD", "ROCKOS MODERN LIFE", "NINJA TURTLES"]
    var randomWord = words[Math.floor(Math.random() * words.length)]
    var answer = [];
    var wins = "0"
    $(".wins").text("WINS : " + wins)
    var losses = 0
    $(".losses").text("LOSSES : " + losses)
    var guessesLeft = []
    var hints = ["Gang of Babies", "Quail man's identity", "90's femenist", "Gotta Catch 'em all!", "playtime during school, not lunch", "They live in the WB tower", "Where in the world is...", "'It's log, log...", "Longest running cartoon.", "Morphin' time!", "'I need teepee for my bunghole'", "Friendly walabe", "Pizza lovin' turtles" ]
    var hintLength = hints.length
    var getHint = $("#hintBtn")
    $(".hintBtn").on("click", function(){
        if(words[0] === randomWord) {
            $("#hint").text(hints[0])
        }
        else if (words[1]=== randomWord) {
            $("#hint").text(hints[1])
        }
        else if (words[2]=== randomWord) {
            $("#hint").text(hints[2])
        }
        else if (words[3]=== randomWord) {
            $("#hint").text(hints[3])
        }
        else if (words[4]=== randomWord) {
            $("#hint").text(hints[4])
        }
        else if (words[5]=== randomWord) {
            $("#hint").text(hints[5])
        }
        else if (words[6]=== randomWord) {
            $("#hint").text(hints[6])
        }
        else if (words[7]=== randomWord) {
            $("#hint").text(hints[7])
        }
        else if (words[8]=== randomWord) {
            $("#hint").text(hints[8])
        }
        else if (words[9]=== randomWord) {
            $("#hint").text(hints[9])
        }
        else if (words[10]=== randomWord) {
            $("#hint").text(hints[10])
        }
        else if (words[11]=== randomWord) {
            $("#hint").text(hints[11])
        }
        else if (words[12]=== randomWord) {
            $("#hint").text(hints[12])
        }
    })
    var wrongLetter = []


    //generates random word on click
    $("#newGame").on("click", function(event){
        randomWord = (words[Math.floor(Math.random() * words.length)])
        answer = []
        for (var i = 0; i < randomWord.length; i++) {
            answer[i] =  "_ ";
        }
        $(".display").html(answer.join(" "))
        $("#hint").html("Press the button to get a hint!")
        guessesLeft = 10
        $(".guessesLeft").text("You have " + guessesLeft + " guesses left!");
        console.log(randomWord)
    })

    // create buttons for letters
    
    for (var i = 0; i < lettersLength; i++) {
        var letterBtns = $("<button>")
        letterBtns.attr("class", "letter-button letter")
        letterBtns.attr("data-letter", letters[i])
        letterBtns.text(letters[i])
        $("#buttons").append(letterBtns)
      }
    
    $(".letter-button").on("click", function() {
        var letterBox = $("<span>")
        letterBox.attr("class", "letter")
        letterBox.text($(this).attr("data-letter"))
        $(".display").append(letterBox)

        //gets value for click on virtual keyboard
        for (var i = 0; i < letters.length; i++) {
            $(".letter").on("click", function(){
                var myGuess = $(".letter").val();
                console.log(letters[i])
                console.log(myGuess)

                //logs the connection
                if(randomWord.indexOf(myGuess) > -1) {
                    console.log("hello")
                    wins++
                }
            });

            function getAllIndexes (word, myGuess) {
                var positions = randomWord.indexOf(myGuess)
                for (i = 0; i < randomWord.length; i++) {
                    if(randomWord[i]===myGuess)
                    console.log("yay")
                }

            }
            
        }
    })
})


