$(document).ready(function(){
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var lettersLength = letters.length
    var shows = ["RUGRATS", "DOUG", "DARIA", "POKEMON", "RECESS", "ANAMANIACS", "CARMEN SAN DIEGO", "REN AND STIMPY", "THE SIMPSONS", "POWER RANGERS", "BEAVIS AND BUTTHEAD", "ROCKOS MODERN LIFE", "NINJA TURTLES"]
    var showsLength = shows.length
    var randomShow = shows[Math.floor(Math.random() * showsLength)]
    var answer = [];
        for (var i = 0; i < randomShow.length; i++) {
            answer[i] = "_";
        }
    var wins = $("#wins")
    var losses = $("#losses")
    var lives = 6
    var getHint = $("#hintBtn")

    //generates random word on click
    $("#newGame").on("click", function(){
        randomShow = (shows[Math.floor(Math.random() * showsLength)])
        underScores = []
        for (var i = 0; i < randomShow.length; i++) {
            underScores = underScores + "_ ";
        }
        $("#show").html(underScores)
        // $("#show").html = (underScores.join(" "))
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
        });

        function getAllIndexes (word,val) {
            positions = [];
            for (i = 0; i < randomShow.length; i++) {
                if(randomShow[i]===val) {
                    positions.push(i)
                }
            }
            console.log("all index positions are" + positions[i])
        }
    }


})

})

