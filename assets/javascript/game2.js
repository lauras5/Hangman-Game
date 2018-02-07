
$(document).ready(function(){

    var words  = ["RUGRATS", "DOUG", "DARIA", "POKEMON", "RECESS", "ANAMANIACS", "CARMEN/SAN/DIEGO", "REN AND STIMPY", "THE SIMPSONS", "POWER RANGERS", "BEAVIS AND BUTTHEAD", "ROCKOS MODERN LIFE", "NINJA TURTLES", "MATILDA"]
    var chosenWord = words[Math.floor(Math.random()* words.length)]
    // var space = ''
    var underScores = [] //underscores
    var wrongGuesses = [] //store wrong guesses
    var guesses = 10 //guess max
    //replace 
    var wins= 0;
    $(".wins").html("WINS : " + wins)
    var hints = ["Gang of Babies", "Quail man's identity", "90's femenist", "Gotta Catch 'em all!", "playtime during school, not lunch", "They live in the WB tower", "Where in the world is...", "'It's log, log...", "Longest running cartoon.", "Morphin' time!", "'I need teepee for my bunghole'", "Friendly walabe", "Pizza lovin' turtles", "Girl Genius"]
    var hintLength = hints.length
    var getHint = $("#hintBtn")
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
    
    $("#newGame").on("click", function(){
        chosenWord = words[Math.floor(Math.random() * words.length)]
        underScores = []
        for (var i = 0; i < chosenWord.length; i++) {
            underScores.push("_ ")
        }
        guesses = 10
        $(".guessesLeft").html("You have " + guesses + " guesses left!")
        $(".display").html(underScores)
        $("#hint").html("Press the button to get a hint!")
        console.log("your random word is " + chosenWord)
    })
    
    if (guesses > 0) { 
        $(document).on("keyup", function(event){
            guess = String.fromCharCode(event.keyCode).toUpperCase()
            // console.log(guess)
            if (chosenWord.indexOf(guess) > -1) {
                for (i = 0; i < chosenWord.length; i++) {
                    if ( chosenWord[i] = guess) {
                        underScores[i] = chosenWord[i]
                        console.log(underScores)
                        underScores.join(" ")
                        return
                    }  
                }
            }
            
            else {
                for (i = 0; i < chosenWord.length; i++) {
                    if ( chosenWord[i] != guess) {
                        guesses--
                    var wrongGuesses = guess
                    $(".wrongGuesses").append(wrongGuesses)
                    console.log(wrongGuesses)
                    return
                    }    
                    
                }
            }
        })        
    }

})