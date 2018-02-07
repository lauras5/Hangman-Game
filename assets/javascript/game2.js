
$(document).ready(function(){

    var words  = ["RUGRATS", "DOUG", "DARIA", "POKEMON", "RECESS", "ANAMANIACS", "CARMEN/SAN/DIEGO", "REN AND STIMPY", "THE SIMPSONS", "POWER RANGERS", "BEAVIS AND BUTTHEAD", "ROCKOS MODERN LIFE", "NINJA TURTLES", "MATILDA"]
    //figure out how to add spaces
    //need function for finding all occurances, not just first
    var chosenWord = words[Math.floor(Math.random()* words.length)]
    var underScores = [] //underscores
    var wrongGuesses = [] //store wrong guesses
    var guesses = 10 //guess max
    var wins= 0;
    $(".wins").html("WINS : " + wins)
    var hints = ["Gang of Babies", "Quail man's identity", "90's femenist", "Gotta Catch 'em all!", "playtime during school, not lunch", "They live in the WB tower", "Where in the world is...", "'It's log, log...", "Longest running cartoon.", "Morphin' time!", "'I need teepee for my bunghole'", "Friendly walabe", "Pizza lovin' turtles", "Girl Genius"]
    var hintLength = hints.length
    var getHint = $("#hintBtn")

    //hint button onclick function
    $(".hintBtn").on("click", function(){
        if(words[0] === chosenWord) {
            $("#hint").text(hints[0])
        }
        else if (words[1]=== chosenWord) {
            $("#hint").text(hints[1])
        }
        else if (words[2]=== chosenWord) {
            $("#hint").text(hints[2])
        }
        else if (words[3]=== chosenWord) {
            $("#hint").text(hints[3])
        }
        else if (words[4]=== chosenWord) {
            $("#hint").text(hints[4])
        }
        else if (words[5]=== chosenWord) {
            $("#hint").text(hints[5])
        }
        else if (words[6]=== chosenWord) {
            $("#hint").text(hints[6])
        }
        else if (words[7]=== chosenWord) {
            $("#hint").text(hints[7])
        }
        else if (words[8]=== chosenWord) {
            $("#hint").text(hints[8])
        }
        else if (words[9]=== chosenWord) {
            $("#hint").text(hints[9])
        }
        else if (words[10]=== chosenWord) {
            $("#hint").text(hints[10])
        }
        else if (words[11]=== chosenWord) {
            $("#hint").text(hints[11])
        }
        else if (words[12]=== chosenWord) {
            $("#hint").text(hints[12])
        }
        else if (words[13]=== chosenWord) {
            $("#hint").text(hints[12])
        }
    })

    //new game function is acting as reset
    function reset() {
        chosenWord = words[Math.floor(Math.random() * words.length)]
        underScores = []
        for (var i = 0; i < chosenWord.length; i++) {
            underScores.push("_ ")
        }
        guesses = 10
        $(".wrongGuesses").html(' ')
        $(".guessesLeft").html("You have " + guesses + " guesses left!")
        $(".display").html(underScores)
        $("#hint").html("Press the button to get a hint!")
        console.log("your random word is " + chosenWord)
    }

    $("#newGame").on("click", function(){
        reset()
    })


    if (guesses > 0) { 
        $(document).on("keyup", function(e){
            guess = String.fromCharCode(e.keyCode).toUpperCase()
            if (e.which <= 90 && e.which >= 48)
            // console.log(guess)
            if (chosenWord.indexOf(guess) > -1) {
                for (i = 0; i < chosenWord.length; i++) {
                    if ( chosenWord[i] == guess) {
                        underScores[i] = chosenWord[i]
                        // console.log(underScores)
                        underScores.join(" ")
                        $(".display").html(underScores)
                        return
                        
                    }  
                }
            }
            
            else {
                for (i = 0; i < chosenWord.length; i++) {
                    if ( chosenWord[i] != guess) {
                        guesses--
                        $(".guessesLeft").html("You have " + guesses + " guesses left!")
                        var wrongGuesses = guess
                        $(".wrongGuesses").append(wrongGuesses)
                        if ( guesses === 0) {               
                            alert("You Lost! The answer was " + chosenWord + " ! Play again!!")
                            reset()
                        }

                    
                    // console.log(wrongGuesses)
                    return
            
                    }    
                    
                }
            }

            
        })        
    }



})