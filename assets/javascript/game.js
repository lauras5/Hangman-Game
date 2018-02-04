$(document).ready(function(){
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var lettersLength = letters.length
    var shows = ["RUGRATS", "DOUG", "DARIA", "POKEMON", "RECESS", "ANAMANIACS", "CARMEN/SAN/DIEGO", "REN/AND/STIMPY", "THE SIMPSONS", "POWER RANGERS", "BEAVIS AND BUTTHEAD", "ROCKOS MODERN LIFE", "NINJA TURTLES"]
    var showsLength = shows.length
    var randomShow = shows[Math.floor(Math.random() * showsLength)]
    var answer = [];
        for (var i = 0; i < randomShow.length; i++) {
            answer[i] = "_";
        }
    var wins = 0
    $("#wins").text("WINS : " + wins)
    var losses = 0
    $("#losses").text("LOSSES : " + losses)
    var lives = 6
    $("#lives").text("You have " + lives + " guesses left!");
    
    var getHint = $("#hintBtn")
    $(".hintBtn").on("click", function(){
        console.log("hello")
    })

    //generates random word on click
    $("#newGame").on("click", function(){
        randomShow = (shows[Math.floor(Math.random() * showsLength)])
        underScores = []
        for (var i = 0; i < randomShow.length; i++) {
            underScores = underScores + "_ ";
        }
        $("#show").html(underScores)
        console.log(randomShow)
    })

    // create buttons for letters
    for (var i = 0; i < lettersLength; i++) {
        var letterBtns = $("<button>")
        letterBtns.attr("class", "letter-button letter letter-button-color")
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
            $('.letter').on("click", function(){
                var input = $('.letter').val();
                //logs the connection
                var myGuess = input
                if(randomShow.indexOf(myGuess)> -1) {
                    console.log("hello")
                }
            });

            
        function getAllIndexes (word, input) {
            pos = str.indexOf(randomShow[i]);
            for (i = 0; i < randomShow.length; i++) {
                if(randomShow[i]===input) {
                    ///push to appropriate space in randomShow
                }
            }


        }


        


    }


})

})

