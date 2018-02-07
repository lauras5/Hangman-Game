$(document).ready(function(){
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var lettersLength = letters.length
    var shows = ["RUGRATS", "DOUG", "DARIA", "POKEMON", "RECESS", "ANAMANIACS", "CARMEN/SAN/DIEGO", "REN AND STIMPY", "THE SIMPSONS", "POWER RANGERS", "BEAVIS AND BUTTHEAD", "ROCKOS MODERN LIFE", "NINJA TURTLES"]
    var showsLength = shows.length
    var randomShow = shows[Math.floor(Math.random() * showsLength)]
    var answer = [];
    var wins = 0
    $(".wins").text("WINS : " + wins)
    var losses = 0
    $(".losses").text("LOSSES : " + losses)
    var lives = 6
    var hints = ["Gang of Babies", "Quail man's identity", "90's femenist", "Gotta Catch 'em all!", "playtime during school, not lunch", "They live in the WB tower", "Where in the world is...", "'It's log, log...", "Longest running cartoon.", "Morphin' time!", "'I need teepee for my bunghole'", "Friendly walabe", "Pizza lovin' turtles" ]
    var hintLength = hints.length
    var positions = []
    var getHint = $("#hintBtn")
    $(".hintBtn").on("click", function(){
        if(shows[0] === randomShow) {
            $("#hint").text(hints[0])
        }
        else if (shows[1]=== randomShow) {
            $("#hint").text(hints[1])
        }
        else if (shows[2]=== randomShow) {
            $("#hint").text(hints[2])
        }
        else if (shows[3]=== randomShow) {
            $("#hint").text(hints[3])
        }
        else if (shows[4]=== randomShow) {
            $("#hint").text(hints[4])
        }
        else if (shows[5]=== randomShow) {
            $("#hint").text(hints[5])
        }
        else if (shows[6]=== randomShow) {
            $("#hint").text(hints[6])
        }
        else if (shows[7]=== randomShow) {
            $("#hint").text(hints[7])
        }
        else if (shows[8]=== randomShow) {
            $("#hint").text(hints[8])
        }
        else if (shows[9]=== randomShow) {
            $("#hint").text(hints[9])
        }
        else if (shows[10]=== randomShow) {
            $("#hint").text(hints[10])
        }
        else if (shows[11]=== randomShow) {
            $("#hint").text(hints[11])
        }
        else if (shows[12]=== randomShow) {
            $("#hint").text(hints[12])
        }
    })
var wrongLetter = []
var myGuess = []

    //generates random word on click
    $("#newGame").on("click", function(){
        randomShow = (shows[Math.floor(Math.random() * showsLength)])
        answer = []
        for (var i = 0; i < randomShow.length; i++) {
            answer[i] = answer + "_ ";
        }
        // $(".display").html(answer.join(" "))
        $("#hint").html("Press the button to get a hint!")
        $(".lives").text("You have " + lives + " guesses left!");
        console.log(randomShow)
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
        $("#display").append(letterBox)

        //gets value for click on virtual keyboard
        for (var i = 0; i < letters.length; i++) {
            $(".letter").on("click", function(){
                var input = $(".letter").val();
                console.log(input)

                //logs the connection
                var myGuess = input
                if(randomShow.indexOf(myGuess)> -1) {
                    for(var j = 0; j < randomShow.length; j++) {
                        if(randomShow[j] === myGuess) {
                            
                            console.log("great job!")
                        }
                    }

                    function getAllIndexes (word,val) {
                        pos = str.indexOf (randomShow[i]);
                        for (i = 0; i < randomShow.length; i++) {
                            if(randomShow[i]===attr("data-letter")) {
                                positions.push(i)
                            }
                            if (randomShow[i]===input) {
                                ///push to space in #show
                            }
                        }
                    }
                   
                }

            });
  
        }
    })
})


